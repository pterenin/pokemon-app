export type Pokemon = {
    name: string;
    url: string;
}

export type PokemonListResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
}


export type PokemonDetails = {
    name: string;
    types: PokemonType[];
    sprites: any;
}

export type PokemonType = {
    slot: number;
    type: {
        name: string;
        url: string
    }
}

export type MatchesByPokemonName = {
    pokemonData: PokemonDetails;
    matches: {
        favorablePokemons: string[];
        unfavorablePokemons: string[];
    }
}
