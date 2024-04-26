"use server";

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon'


// Fetches pokemon list, than fetches details for each using Promise.all
export const fetchPokemons = async (url: string = POKEMON_API_URL) => {
    const res = await fetch(url);
    const data = await res.json();

    const fetches = data.results.map((pokemon: any) => {
        const detailedUrl = `${POKEMON_API_URL}/${pokemon.name}`;
        return fetch(detailedUrl).then(res => res.json());
    });

    const detailedData = await Promise.all(fetches);
    data.results = detailedData;
    return data;
}
