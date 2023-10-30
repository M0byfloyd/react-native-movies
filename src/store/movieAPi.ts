import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {MovieType} from "../types/MovieType";
import {RatingsType} from "../types/RatingsType";
import {MovieDetailType} from "../types/MovieDetailType";

type Params = {
    pageNumber: number,
    genre: string
}

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
        getMovies: builder.query<Array<MovieType>, Params>({
            query: ({pageNumber, genre}) => `/titles?genre=${genre}&startYear=2000&sort=year.incr&limit=10&page=${pageNumber}`,
            transformResponse: (response: { results: Array<MovieType> }) => response.results,
            merge: (prev, next) => {
                return [...(prev ?? []), ...next]

            },
            forceRefetch({currentArg, previousArg}) {
                return currentArg !== previousArg
            },
            serializeQueryArgs: ({endpointName}) => {
                return endpointName
            },
        }),
        getRating: builder.query<RatingsType, number>({
            query: (id: number) => `/titles/${id}/ratings`,
            transformResponse: (response: { results: RatingsType }) => response.results,
        }),
        getOneMovie: builder.query<MovieDetailType, string>({
            query: (id: string) => `/titles/${id}?info=base_info`,
            transformResponse: (response: { results: MovieDetailType }) => response.results,
        })
    })
})

export const {useGetMoviesQuery, useGetRatingQuery, useGetOneMovieQuery} = movieApi