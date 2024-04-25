import PokemonList from "@/components/PokemonList";

export async function getPockemonList() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await res.json();
  return data;
};

export default async function Home() {
  const data: any = await getPockemonList();
  const pokemons = data.results;
  return (
    <PokemonList pockemonList={pokemons} />
  );
}
