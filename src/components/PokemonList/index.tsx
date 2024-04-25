import PokemonCard from "@/components/PokemonCard"

export default function PokemonList({ pockemonList }: { pockemonList: any[] }) {
    return (
        <div>
            <h1>Pokémon List</h1>
            <ul>
                {pockemonList.map((pokemon: any, index: any) => (
                    <PokemonCard key={pokemon.name + "Card"} pokemon={pokemon} />
                ))}
            </ul>
        </div>
    );
}