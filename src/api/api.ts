import { PokemonListResponse } from "@/types/types"

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon'

export async function getPockemonList() {
    const res = await fetch(POKEMON_API_URL + '?offset=0&limit=20');
    const data: PokemonListResponse = await res.json();
    return data;
};


export async function getPockemonDetails(name: string) {
    const res = await fetch(POKEMON_API_URL + `/${name}`);
    const data = await res.json();
    console.log(data)
    return data;
}