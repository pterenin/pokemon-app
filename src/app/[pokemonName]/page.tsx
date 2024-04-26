import { fetchMatchesByPokemonName } from "@/actions/fetchMatchesByPokemonName"
import PokemonCard from "@/components/PokemonCard"

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    if (!params || !params.pokemonName) return <>No pokemon selected</>;
    const { pokemonName } = params;
    const pokemonData: any = await fetchMatchesByPokemonName(pokemonName);

    return <div>
        <div className="flex p-5">
            <PokemonCard styles="bg-white m-auto" pokemon={pokemonData.pokemonData} />
        </div>
        <div className="flex p-5 justify-evenly">
            <div className="">
                <h3 className="font-bold ">Favorible Matches</h3>
            </div>
            <div>
                <h3 className="font-bold ">Unfavorible Matches</h3>
            </div>
        </div>
    </div>
}