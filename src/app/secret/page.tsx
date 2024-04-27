import { fetchPokemonDetails } from "@/actions/fetchPokemonDetails"
import { PokemonDetails } from "@/types/types";
import PokemonCard from "@/components/PokemonCard"

export default async function PokemonPage() {
    const pokemonData: PokemonDetails = await fetchPokemonDetails("pikachu");
    pokemonData.sprites.other.home.front_shiny = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/female/25.gif";

    return <div>
        <h1 className="text-center p-10 pb-0 text-red-600 font-bold text-xl mb-2 capitalize">!!!Pikachu's secret!!!</h1>
        <div className="flex p-5">
            <PokemonCard styles="bg-white p-20 m-auto" pokemon={pokemonData} />
        </div>
    </div>
}
