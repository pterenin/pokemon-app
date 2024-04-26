"use server";

import { fetchTypeData, fetchPokemonNamesByType } from "./fetchMatches";
import { fetchPokemonDetails } from "./fetchPokemonDetails";
import { PokemonDetails, MatchesByPokemonName } from "@/types/types"

export async function fetchMatchesByPokemonName(pokemonName: string): Promise<MatchesByPokemonName> {

    const pokemonData: PokemonDetails = await fetchPokemonDetails(pokemonName);
    const typeUrls = pokemonData.types.map(typeEntry => typeEntry.type.url);

    const typePromises = typeUrls.map(url => fetchTypeData(url));
    const typeDatas = await Promise.all(typePromises);

    const favorableTypes: Set<string> = new Set();
    const unfavorableTypes: Set<string> = new Set();
    const favorablePokemons: Set<string> = new Set();
    const unfavorablePokemons: Set<string> = new Set();


    typeDatas.forEach(typeData => {
        typeData.damage_relations.double_damage_to.forEach((t: { name: string }) => favorableTypes.add(t.name));
        typeData.damage_relations.double_damage_from.forEach((t: { name: string }) => unfavorableTypes.add(t.name));
    });

    // Fetch Pokémon for each favorable type
    for (const type of Array.from(favorableTypes)) {
        const pokemonNames = await fetchPokemonNamesByType(type);

        pokemonNames.forEach(name => {
            if (name != pokemonName) {
                favorablePokemons.add(name);
            }
        });
    }

    // Fetch Pokémon for each unfavorable type
    for (const type of Array.from(unfavorableTypes)) {
        const pokemonNames = await fetchPokemonNamesByType(type);
        pokemonNames.forEach(name => {
            if (name != pokemonName) {
                unfavorablePokemons.add(name);
            }
        });
    }

    const matches = { favorablePokemons: Array.from(favorablePokemons), unfavorablePokemons: Array.from(unfavorablePokemons), };
    const result = {
        pokemonData,
        matches
    }

    return result;
}
