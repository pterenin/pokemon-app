import { Pokemon } from "@/types/types"

type PropTypes = {
    pokemon: any;
    styles?: string;
}

export default function PokemonCard({ pokemon, styles }: PropTypes) {
    console.log('pokemon:::::::::', pokemon.name);
    const name: string = pokemon.name;
    const imagSrc = pokemon?.sprites?.other?.home?.front_shiny;
    const types: any[] = pokemon?.types || [];
    const classNames = `max-w-sm rounded overflow-hidden shadow ${styles}`;
    return <div className={classNames}>
        <img
            className="w-full"
            src={imagSrc}
            alt={name}
        />
        <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 capitalize">{name}</h2>
        </div>
        <div className="px-6 pt-4 pb-2">
            {types.map((type: any) => {

                return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={type.type.name + 'key'}>{type.type.name}</span>
            })}
        </div>
    </div>
}