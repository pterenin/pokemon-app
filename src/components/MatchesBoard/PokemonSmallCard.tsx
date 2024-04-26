import Link from "next/link"
import { PokemonDetails } from "@/types/types"

type PropTypes = {
    pokemon: PokemonDetails;
}

export default function PokemonSmallCard({ pokemon }: PropTypes) {
    const imagSrc = pokemon.sprites.other.home.front_shiny;
    return <Link href={pokemon.name} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 pl-4 min-h-36">
        <img className="object-cover w-1rounded-t-lg md:h-auto w-20 md:rounded-none md:rounded-s-lg" src={imagSrc} alt={pokemon.name} />
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.name}</h5>
            {pokemon.types.map((type: any) => {
                return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={type.type.name + 'key'}>{type.type.name}</span>
            })}
        </div>
    </Link>
}
