"use client";
import PokemonCard from "@/components/PokemonCard"
import Link from "next/link"

import Spiner from "@/components/Spiner"
import { useState } from 'react'
import { Pokemon } from "@/types/types"
import { fetchPokemons } from "@/actions/fetchPokemons"

type PropTypes = {
    pockemonList: Pokemon[];
    next: string;
}

export default function PokemonList({ pockemonList, next }: PropTypes) {
    const [pokemons, setPokemons] = useState<Pokemon[]>(pockemonList)
    const [nextUrl, setNextUrl] = useState<string | null>(next)
    const [isLoading, setIsloading] = useState<boolean>(false)


    const loadMore = async () => {
        if (!nextUrl) return;
        setIsloading(true);
        try {
            const data = await fetchPokemons(nextUrl);
            setPokemons([...pokemons, ...data.results]);
            setNextUrl(data.next);
        } catch (error) {
            alert(`Failed to Fetch: ${error}`);
        }
        setIsloading(false);
    }

    return (
        <div className="grid place-content-center p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-lg place-self-center">
                {pokemons && pokemons.map((pokemon: any, index: any) => (
                    <Link
                        href={pokemon.name}
                        className="hover:bg-gray-300 bg-white"
                    >
                        <PokemonCard key={pokemon.name + "Card"} pokemon={pokemon} /></Link>
                ))}
            </div>
            <div className="flex mt-10">
                {isLoading && <Spiner></Spiner>}
                {!isLoading && pokemons && pokemons.length > 0 && (
                    <button className="m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loadMore}>
                        Load More &darr;
                    </button>
                )}
            </div>
        </div>
    );
}