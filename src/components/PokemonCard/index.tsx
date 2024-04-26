import Link from "next/link"
import { Pokemon } from "@/types/types"

export default function PokemonCard({ pokemon }: { pokemon: any }) {
    const name: string = pokemon.name;
    const imagSrc = pokemon?.sprites?.other?.home?.front_shiny;
    const types: any[] = pokemon?.types || [];
    return <Link
        href={{
            pathname: name,
            query: pokemon
        }}
        className="max-w-sm rounded overflow-hidden shadow hover:bg-gray-300 bg-white"
    >
        <img
            className="w-full"
            src={imagSrc}
            alt={name}
        />
        <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 capitalize">{name}</h2>
        </div>
        <div className="px-6 pt-4 pb-2">
            {types.map((type: any) => {

                return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={type.type.name + 'key'}>{type.type.name}</span>
            })}
        </div>
    </Link>
}