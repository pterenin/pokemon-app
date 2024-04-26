import PokemonSmallCard from "@/components/MatchesBoard/PokemonSmallCard"
type PropTypes = {
    header: string;
    pokemons: any[]
}
export default function MatchCard({ header, pokemons }: PropTypes) {
    return <div className="">
        <h3 className="font-bold ">{header}</h3>
        <div>
            {pokemons.map((pokemon) => {
                return <PokemonSmallCard pokemon={pokemon} />
            })}
        </div>
    </div>
}