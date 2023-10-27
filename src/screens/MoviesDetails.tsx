import {MovieType} from "../types/MovieType";
import {Image, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {AntDesign} from '@expo/vector-icons';
import {useGetRatingQuery} from "../store/movieAPi";
import {RatingsType} from "../types/RatingsType";
import {RatingStars} from "./RatingStars";

export function MoviesDetails() {
    const route = useRoute()
    const movie: MovieType = route.params as MovieType;

    const {data, isLoading} = useGetRatingQuery(movie.id);
    const ratings = data;


    console.log(ratings)
    return (<>
        <Text className="p-3 text-3xl text-center font-bold">{movie.titleText.text}</Text>

        {isLoading && <Text>Rates are loading</Text>}

        {!isLoading && ratings && <Text>{ratings?.averageRating}</Text>}

        <Image className="mx-auto" style={{width: 150, height: 250}} source={{uri: movie?.primaryImage?.url}}/>

        {!isLoading && ratings && <RatingStars className="mx-auto" {...ratings} />}

        <View className="flex-row p-3 rounded-full"
              style={{position: "absolute", right: 20, bottom: 20, backgroundColor: '#ffc13a'}}>
            <Text>Ajouter aux favoris </Text>
            <AntDesign name="heart" size={24} color="black"/>
        </View>
    </>)
}