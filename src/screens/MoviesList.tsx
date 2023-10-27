import {useGetMoviesQuery} from "../store/movieAPi";
import {MovieItem} from "../components/MovieItem";
import {MovieType} from "../types/MovieType";
import {FlatList, RefreshControl, Text, View} from "react-native";
import {useState} from "react";

export function MoviesList() {
    const [pageNumber, setPageNumber] = useState(1);

    const {data, isFetching, isLoading} = useGetMoviesQuery({pageNumber: pageNumber, genre: 'Horror'});
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
                    setPageNumber(page + 1)
                }}
                refreshControl={
                    <RefreshControl refreshing={isFetching} onRefresh={() => console.log('coucou')}/>
                }
                refreshing={isFetching}
            />

        </>
    )
}