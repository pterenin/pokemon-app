"use server";
import { POKEMON_API_URL } from "@/constants/constants";
import { fetchPokemonDetails } from "./fetchPokemonDetails"

// Fetches pokemon list, than fetches details for each using Promise.all
export const fetchPokemonList = async (url: string = POKEMON_API_URL) => {
    const res = await fetch(url);
    const data = await res.json();

    const fetches = data.results.map((pokemon: any) => {
        const detailedUrl = `${POKEMON_API_URL}/${pokemon.name}`;
        return fetchPokemonDetails(pokemon.name)
    });

    const detailedData = await Promise.all(fetches);
    data.results = detailedData;
    return data;
}
