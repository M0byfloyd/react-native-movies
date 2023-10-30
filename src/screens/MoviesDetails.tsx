import {Image, Text, View} from "react-native";
import {useGetOneMovieQuery, useGetRatingQuery} from "../store/movieAPi";
import {RatingStars} from "../components/RatingStars";
import {AddToLikes} from "../components/AddToLikes";
import {useRoute} from "@react-navigation/native";

export function MoviesDetails() {
    const route = useRoute()
    const id: number = route.params as unknown as number;

    const {data, isLoading} = useGetOneMovieQuery(id);
    const movie = data;

    return (<>
        <Text className="p-3 text-3xl text-center font-bold">{movie?.titleText?.text}</Text>

        <View className="flex-row mx-auto">
            {
                movie?.genres.genres.map((genre) =>
                    <Text className="p-3 text-sm font-bold">{genre?.text}</Text>
                )
            }
        </View>

        {isLoading && <Text>Rates are loading</Text>}

        <Image className="mx-auto" style={{width: 150, height: 250}} source={{uri: movie?.primaryImage?.url}}/>

        {!isLoading && movie && <RatingStars className="mx-auto" {...movie.ratingsSummary} />}

        {movie && <AddToLikes id={movie.id} hideText={false}/>}
    </>)
}