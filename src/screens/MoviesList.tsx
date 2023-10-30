import {useGetMoviesQuery} from "../store/movieAPi";
import {MovieItem} from "../components/MovieItem";
import {MovieType} from "../types/MovieType";
import {FlatList, RefreshControl, Text, View} from "react-native";
import {useState} from "react";

export function MoviesList() {
    const [pageNumber, setPageNumber] = useState(1);
    const [genre, setGenre] = useState('Horror');

    const {data, isFetching, isLoading} = useGetMoviesQuery({pageNumber: pageNumber, genre: genre});
    const movies = data;
    if (isLoading) return <Text>Loading...</Text>

    return (
        <>
            <FlatList
                data={movies}
                numColumns={2}
                renderItem={({item}) =>
                    <MovieItem {...item} />
                }
                onEndReached={() => {
                    setPageNumber(pageNumber + 1)
                }}
                refreshControl={
                    <RefreshControl refreshing={isFetching} onRefresh={() => setGenre('Action')}/>
                }
                refreshing={isFetching}
            />

        </>
    )
}