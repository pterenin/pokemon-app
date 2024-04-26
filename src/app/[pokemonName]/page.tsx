import { fetchMatchesByPokemonName } from "@/actions/fetchMatchesByPokemonName"
import { fetchPokemonDetails } from "@/actions/fetchPokemonDetails"
import { Matches, PokemonDetails } from "@/types/types";
import PokemonCard from "@/components/PokemonCard"
import MatchesBoard from "@/components/MatchesBoard"

export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    if (!params || !params.pokemonName) return <>No pokemon selected</>;
    const { pokemonName } = params;
    const pokemonData: PokemonDetails = await fetchPokemonDetails(pokemonName);
    const matches: Matches = await fetchMatchesByPokemonName(pokemonName, 0);

    return <div>
        <div className="flex p-5">
            <PokemonCard styles="bg-white m-auto" pokemon={pokemonData} />
        </div>
        <MatchesBoard matches={matches} pokemonName={pokemonName} />
    </div>
}