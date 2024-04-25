
import Link from "next/link"

export default function PokemonCard({ pokemon }: { pokemon: any }) {
    const name: string = pokemon.name;
    return <Link
        href={name}
    >
        <h2 >
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </h2>
    </Link>
}