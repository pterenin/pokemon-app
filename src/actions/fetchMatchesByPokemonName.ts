"use server";

import { fetchTypeData, fetchPokemonNamesByType } from "./fetchMatches";
import { fetchPokemonDetails } from "./fetchPokemonDetails";
import { PokemonDetails, Matches, TypeData } from "@/types/types"


export async function fetchMatchesByPokemonName(pokemonName: string, offset: number): Promise<Matches> {

  //get types data for specific pokemon by name
  const pokemonData: PokemonDetails = await fetchPokemonDetails(pokemonName);
  const typeUrls = pokemonData.types.map(typeEntry => typeEntry.type.url);
  const typeNames = pokemonData.types.map(typeEntry => typeEntry.type.name);


  const typePromises = typeUrls.map(url => fetchTypeData(url));
  const typeDatas: TypeData[] = await Promise.all(typePromises);

  const favorableTypes: Set<string> = new Set();
  const unfavorableTypes: Set<string> = new Set();
  const favorablePokemons: Set<string> = new Set();
  const unfavorablePokemons: Set<string> = new Set();


  //get favorable and unfavorable types
  typeDatas.forEach(typeData => {
    typeData.damage_relations.double_damage_to.forEach((t: { name: string }) => {
      if (!typeNames.includes(t.name)) {
        favorableTypes.add(t.name);
      }
    });
    typeData.damage_relations.double_damage_from.forEach((t: { name: string }) => {
      if (!typeNames.includes(t.name)) {
        unfavorableTypes.add(t.name);

      }
    });
  });

  // Fetch Pokémon names for each favorable type
  for (const type of Array.from(favorableTypes)) {
    const pokemonNames = await fetchPokemonNamesByType(type);

    pokemonNames.forEach(name => {
      if (name != pokemonName) {
        favorablePokemons.add(name);
      }
    });
  }

  // Fetch Pokémon names for each unfavorable type
  for (const type of Array.from(unfavorableTypes)) {
    const pokemonNames = await fetchPokemonNamesByType(type);
    pokemonNames.forEach(name => {
      if (name != pokemonName) {
        unfavorablePokemons.add(name);
      }
    });
  }

  //normilize favorable and unfavorable pokemon name lists, slice by offset
  const favorablePokemonsNames = Array.from(favorablePokemons);
  const unfavorablePokemonsNames = Array.from(unfavorablePokemons);
  const favorablePokemonsToFetch = favorablePokemonsNames
    .filter(name => !unfavorablePokemonsNames.includes(name))
    .slice(offset, offset + 3);;
  const unfavorablePokemonsToFetch = unfavorablePokemonsNames
    .filter(name => !favorablePokemonsNames.includes(name))
    .slice(offset, offset + 3);;

  //load more details for each favaorbale and unfavarable pokemon
  const favorablePokemonsData = [];
  const unfavorablePokemonsData = [];
  for (const pokemonName of favorablePokemonsToFetch) {
    const pokemonData: PokemonDetails = await fetchPokemonDetails(pokemonName);
    favorablePokemonsData.push(pokemonData);
  }
  for (const pokemonName of unfavorablePokemonsToFetch) {
    const pokemonData: PokemonDetails = await fetchPokemonDetails(pokemonName);
    unfavorablePokemonsData.push(pokemonData);
  }

  return { favorablePokemons: favorablePokemonsData, unfavorablePokemons: unfavorablePokemonsData };
}
