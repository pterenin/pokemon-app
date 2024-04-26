import PokemonList from "@/components/PokemonList";
import { PokemonListResponse, Pokemon } from "@/types/types"
import { fetchPokemons } from "@/actions/fetchPokemons"


export default async function Home() {
  const data: PokemonListResponse = await fetchPokemons();
  const nextUrl: string = data.next || '';
  let pokemons: Pokemon[] = data.results;


  return (
    <PokemonList pockemonList={pokemons} next={nextUrl} />
  );
}
