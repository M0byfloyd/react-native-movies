import {MovieType} from "../types/MovieType";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useGetOneMovieQuery} from "../store/movieAPi";
import {AddToLikes} from "./AddToLikes";

type Props = {
    id: number
}

export function LikeDisplay({id}: Props) {


    const {data, isFetching, isLoading} = useGetOneMovieQuery(id);
    const movie = data;


    if (isLoading || isFetching) {
        return <Text>Your movie is loading...</Text>
    }

    return (
        <>
            {movie && <TouchableOpacity
                onPress={() => console.log('yo')}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <Image
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    source={{uri: movie.primaryImage.url}}
                />
                <View style={{zIndex: 10, position: 'absolute', right: 30, bottom:100}}>
                    <AddToLikes id={movie.id} hideText={true} />
                </View>

                <View className="flex flex-col justify-between p-4 leading-normal">

                    <Text className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.titleText.text} </Text>
                    <Text className='text-xl font-light'>{movie.releaseYear.year}</Text>
                    <Text className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</Text>
                </View>
            </TouchableOpacity>}
        </>
    )
}