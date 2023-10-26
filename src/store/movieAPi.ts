import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {MovieType} from "../types/MovieType";

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://moviesdatabase.p.rapidapi.com',
        headers: {
            'X-RapidAPI-Key': '62310042d6mshc6fde6a32942bc0p15753ajsn1e9d3ec11c72',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    }),
    endpoints: builder => ({
        getMovies: builder.query<Array<MovieType>, void>({
            query: () => `/titles?genre=Music&startYear=1970&sort=year.incr`,
            transformResponse: (response: { results: Array<MovieType> }) => response.results,
        })
    })
})

export const {useGetMoviesQuery} = movieApi