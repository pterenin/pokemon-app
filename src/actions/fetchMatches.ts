import { BASE_URL } from "@/constants/constants";
import { TypeData } from "@/types/types";

export async function fetchTypeData(typeUrl: string): Promise<TypeData> {
    const response = await fetch(typeUrl);
    const data: TypeData = await response.json();
    return data;
}

export async function fetchPokemonNamesByType(typeName: string): Promise<string[]> {
    const url = `${BASE_URL}/type/${typeName}`;
    const typeData: TypeData = await fetchTypeData(url);
    return typeData.pokemon.map((p: { pokemon: { name: string } }) => p.pokemon.name);
}


