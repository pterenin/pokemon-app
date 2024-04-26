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

export type Matches = {
    favorablePokemons: PokemonDetails[];
    unfavorablePokemons: PokemonDetails[];
}

export type TypeData = {
    damage_relations: TypeRelations;
    game_indices: GameIndex[];
    generation: NamedAPIResource;
    id: number;
    move_damage_class: NamedAPIResource;
    moves: Move[];
    name: string;
    names: LanguageName[];
    past_damage_relations: any[]; // If more detail is known, this can be further specified
    pokemon: TypePokemon[];
}

type NamedAPIResource = {
    name: string;
    url: string;
}

type TypeRelations = {
    double_damage_from: NamedAPIResource[];
    double_damage_to: NamedAPIResource[];
    half_damage_from: NamedAPIResource[];
    half_damage_to: NamedAPIResource[];
    no_damage_from: NamedAPIResource[];
    no_damage_to: NamedAPIResource[];
}

type DamageRelations = {
    damage_relations: TypeRelations;
}

type GameIndex = {
    game_index: number;
    generation: NamedAPIResource;
}

type Move = {
    name: string;
    url: string;
}

type LanguageName = {
    language: NamedAPIResource;
    name: string;
}

type TypePokemon = {
    pokemon: NamedAPIResource;
    slot: number;
}
