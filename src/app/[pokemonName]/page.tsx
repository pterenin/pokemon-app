export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = params;
    return <h1>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
}