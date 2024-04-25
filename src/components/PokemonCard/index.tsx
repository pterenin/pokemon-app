
import Link from "next/link"
import { getPockemonDetails } from "@/api/api"
import { Pokemon } from "@/types/types"

export default async function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    const name: string = pokemon.name;
    const pokemonDetails: any = await getPockemonDetails(name);
    const imagSrc = pokemonDetails?.sprites?.other?.home?.front_shiny;
    const types: any[] = pokemonDetails?.types || [];
    return <Link
        href={name}
    >
        <>
            <img
                src={imagSrc}
                alt={name}
            />
            <h2 className="capitalize" >
                {name}
            </h2>
            {types.map((type: any) => {

                return <span key={type.type.name + 'key'}>{type.type.name}</span>
            })}
        </>
    </Link>
}