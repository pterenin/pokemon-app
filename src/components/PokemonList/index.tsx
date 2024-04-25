import PokemonCard from "@/components/PokemonCard"
import { Pokemon } from "@/types/types"

export default function PokemonList({ pockemonList }: { pockemonList: Pokemon[] }) {
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