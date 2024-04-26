"use server";
import { POKEMON_API_URL } from "@/constants/constants";
import { PokemonDetails } from "@/types/types"

export const fetchPokemonDetails = async (pokemonName: string): Promise<PokemonDetails> => {
    const detailedUrl = `${POKEMON_API_URL}/${pokemonName}`;
    const res = await fetch(detailedUrl);
    const data = await res.json();
    const { name, types, sprites } = data;
    return { name, types, sprites };
}
