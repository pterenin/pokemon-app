export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = params;
    return <h1 className="capitalize">{pokemonName}</h1>
}