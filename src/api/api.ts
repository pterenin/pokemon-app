import { PokemonListResponse } from "@/types/types"

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon'
const PAGE_SIZE = 20;


export async function getApi(url: string = POKEMON_API_URL) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function getPockemonList(page: number = 0) {
    const url = POKEMON_API_URL + `?offset=${page * PAGE_SIZE}&limit=${PAGE_SIZE}`;
    const data: PokemonListResponse = await getApi(url)
    return data;
};

export async function getPockemonDetails(name: string) {
    const url = `${POKEMON_API_URL}/${name}`;
    const data = await getApi(url)
    return data;
}