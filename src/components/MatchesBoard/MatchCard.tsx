import PokemonSmallCard from "@/components/MatchesBoard/PokemonSmallCard"
type PropTypes = {
    header: string;
    pokemons: any[]
}
export default function MatchCard({ header, pokemons }: PropTypes) {
    return <div className="">
        <h3 className="font-bold  m-2 text-center">{header}</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {pokemons.map((pokemon) => {
                return <PokemonSmallCard pokemon={pokemon} />
            })}
        </div>
    </div>
}