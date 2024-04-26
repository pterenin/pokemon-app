"use client";
import { useState } from "react";
import { Matches, PokemonDetails } from "@/types/types";
import { MATCHES_PAGE_SIZE } from "@/constants/constants";
import MatchCard from "./MatchCard";
import Spiner from "@/components/Spiner";
import { fetchMatchesByPokemonName } from "@/actions/fetchMatchesByPokemonName"

type PropTypes = {
    matches: Matches;
    pokemonName: string;
}

export default function MatchesBoard({ matches, pokemonName }: PropTypes) {
    const [favorable, setFavorable] = useState<PokemonDetails[]>(matches.favorablePokemons);
    const [unfavorable, setUnfavorable] = useState<PokemonDetails[]>(matches.unfavorablePokemons);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const loadMore = async () => {
        setIsLoading(true);
        const offset = page * MATCHES_PAGE_SIZE;
        try {
            const data: Matches = await fetchMatchesByPokemonName(pokemonName, offset);
            setFavorable([...favorable, ...data.favorablePokemons]);
            setUnfavorable([...unfavorable, ...data.unfavorablePokemons]);
            setPage(page + 1);
        } catch (error) {
            alert(`Failed to Fetch: ${error}`);
        }
        setIsLoading(false);
    }

    return <>
        <div className="flex p-5 justify-evenly">
            <MatchCard header="Favorible Matches" pokemons={favorable} />
            <MatchCard header="Unfavorible Matches" pokemons={unfavorable} />
        </div>
        <div className="flex mt-10 mb-10">
            {isLoading && <Spiner></Spiner>}
            {!isLoading && (
                <button
                    className="m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={loadMore}>
                    Load More &darr;
                </button>
            )}
        </div>
    </>
}