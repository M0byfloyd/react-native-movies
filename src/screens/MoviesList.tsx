import {useGetMoviesQuery} from "../store/movieAPi";
import {MovieItem} from "../components/MovieItem";
import {MovieType} from "../types/MovieType";
import {FlatList, Text, View} from "react-native";

export function MoviesList() {
    const {data, isFetching, isLoading} = useGetMoviesQuery();
    const movies = data;

    if (isLoading) return <Text>Loading...</Text>
    if (isFetching) return <Text>Fetching...</Text>


    return (
        <>
            <FlatList
                data={movies}
                numColumns={2}
                renderItem={({item}) =>
                    <MovieItem {...item} />
                }
            />

        </>
    )
}