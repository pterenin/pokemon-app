import PokemonList from "@/components/PokemonList";
import { PokemonListResponse, Pokemon } from "@/types/types"
import { getPockemonList } from "@/api/api"

export default async function Home() {
  const data: PokemonListResponse = await getPockemonList();
  const pokemons: Pokemon[] = data.results;
  return (
    <PokemonList pockemonList={pokemons} />
  );
}
