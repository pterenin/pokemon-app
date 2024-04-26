"use server";

import { getApi } from "@/api/api"

export const fetchPokemons = async (url?: string) => {
    const response = await getApi(url);
    return response;
} 