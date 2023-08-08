import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {obj} from "./IPost";

// Define a service using a base URL and expected endpoints


export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: (builder) => ({
        // getPokemonByName: builder.query<obj[], number>({
        //     query: (limit : number  = 5) => ({
        //         url : "todos",
        //         method: "GET",
        //         params: {
        //             _limit : limit
        //         }
        //     })
        // }),
    }),
})

// export const { useGetPokemonByNameQuery } = Api