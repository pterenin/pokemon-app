export default async function PokemonPage({ searchParams }: { searchParams: any }) {
    console.log(searchParams.name)
    const { name } = searchParams;

    const imagSrc = searchParams?.sprites?.other?.home?.front_shiny;

    return <>
        <img
            className="w-full"
            src={imagSrc}
            alt={name}
        />
        <h1 className="capitalize">{name}</h1>
    </>
}