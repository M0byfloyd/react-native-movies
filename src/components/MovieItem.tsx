import {MovieType} from "../types/MovieType";
import {Image, Text, View} from "react-native";

export function MovieItem(movie: MovieType) {
    return (<>
        <View style={{ flex:1}}>
            <Text className="text-lg font-bold">{movie.titleText.text}</Text>
            <Image style={{height:300}} source={{uri: movie?.primaryImage?.url}} />
            <Text>{movie.releaseYear.year}</Text>
        </View>
    </>)
}