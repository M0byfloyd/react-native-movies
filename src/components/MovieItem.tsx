import {MovieType} from "../types/MovieType";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackType} from "../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

export function MovieItem(movie: MovieType) {
    const navigation = useNavigation<NativeStackNavigationProp<StackType>>();

    return (<>
        <TouchableOpacity
            style={{ flex:1, backgroundColor:'orange'}}
            onPress={()=> navigation.navigate('MoviesDetails',movie.id)}
            className="rounded-md m-2"
        >
            <View>

                <Text className="text-lg font-bold p-2">{movie.titleText.text} <Text className="text-sm font-light"> - {movie.releaseYear.year}</Text></Text>

            </View>
            <Image style={{height:300}} source={{uri: movie?.primaryImage?.url}} />

        </TouchableOpacity>
    </>)
}