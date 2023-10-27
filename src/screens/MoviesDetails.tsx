import {MovieType} from "../types/MovieType";
import {Image, Text, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {useGetRatingQuery} from "../store/movieAPi";
import {RatingStars} from "../components/RatingStars";
import {AddToLikes} from "../components/AddToLikes";

export function MoviesDetails() {
    const route = useRoute()
    const movie: MovieType = route.params as MovieType;

    const {data, isLoading} = useGetRatingQuery(movie.id);
    const ratings = data;

    return (<>
        <Text className="p-3 text-3xl text-center font-bold">{movie.titleText.text}</Text>

        {isLoading && <Text>Rates are loading</Text>}

        <Image className="mx-auto" style={{width: 150, height: 250}} source={{uri: movie?.primaryImage?.url}}/>

        {!isLoading && ratings && <RatingStars className="mx-auto" {...ratings} />}

        <AddToLikes id={movie.id} />
    </>)
}