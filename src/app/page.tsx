import PokemonList from "@/components/PokemonList";
import { PokemonListResponse, Pokemon } from "@/types/types"
import { fetchPokemonList } from "@/actions/fetchPokemonList"


export default async function Home() {
  const data: PokemonListResponse = await fetchPokemonList();
  const nextUrl: string = data.next || '';
  let pokemons: Pokemon[] = data.results;

  return (
    <PokemonList pockemonList={pokemons} next={nextUrl} />
  );
}
