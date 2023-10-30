import {RatingsType} from "../types/RatingsType";
import {AntDesign} from '@expo/vector-icons';
import {Text, View} from "react-native";

export function RatingStars(ratingData: RatingsType) {

    const renderStars = () => {
        let stars = [];

        for (let i = 0; i < Math.round(ratingData.aggregateRating); i++) {
            stars.push(<AntDesign key={`full-star-${i}`} name="star" size={24} color="orange"/>)
        }
        for (let i = 0; i < 10 - Math.round(ratingData.aggregateRating); i++) {
            stars.push(<AntDesign key={`empty-star-${i}`} name="staro" size={24} color="orange"/>)
        }

        return stars
    }

    return (
        <View className='flex-col mx-auto'>
            <View className="flex-row">
                {renderStars()}
            </View>
            <Text className='text-center'>{ratingData.voteCount}</Text>
        </View>
    )
}