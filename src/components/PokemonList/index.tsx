"use client";
import PokemonCard from "@/components/PokemonCard"
import { useState, useCallback } from 'react'
import { Pokemon, PokemonListResponse } from "@/types/types"
import { getApi } from "@/api/api"
import { fetchPokemons } from "../../app/action"

type PropTypes = {
    pockemonList: Pokemon[];
    next: string;
}

export default function PokemonList({ pockemonList, next }: PropTypes) {
    const [pokemons, setPokemons] = useState<Pokemon[]>(pockemonList)
    const [nextUrl, setNextUrl] = useState<string | null>(next)


    const loadMore = useCallback(() => {
        if (!nextUrl) return;

        fetchPokemons(nextUrl).then((data: PokemonListResponse) => {
            setPokemons([...pokemons, ...data.results]);
            setNextUrl(data.next);
        }).catch(error => {
            console.error("Failed to load more pokemons:", error);
        });
    }, [nextUrl]);


    return (
        <div className="grid place-content-center p-10 bg-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-lg place-self-center">
                {pokemons.map((pokemon: any, index: any) => (
                    <PokemonCard key={pokemon.name + "Card"} pokemon={pokemon} />
                ))}
            </div>
            <div className="next">
                {pokemons.length > 0 && (
                    <button className="next-btn" onClick={loadMore}>
                        Load More &darr;
                    </button>
                )}
            </div>
        </div>
    );
}