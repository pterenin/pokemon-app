import { BASE_URL } from "@/constants/constants";

export async function fetchTypeData(typeUrl: string) {
    try {
        const response = await fetch(typeUrl);
        console.log('-=-=-=-=-=-=-=-=-=-=-')
        console.log(typeUrl)
        console.log(response)
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchPokemonNamesByType(typeName: string): Promise<string[]> {
    const url = `${BASE_URL}/type/${typeName}`;
    const typeData = await fetchTypeData(url);
    return typeData.pokemon.map((p: { pokemon: { name: string } }) => p.pokemon.name);
}


