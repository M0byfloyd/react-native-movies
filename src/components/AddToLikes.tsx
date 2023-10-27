import {Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {toggleMoviesToLike} from "../store/likesSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";

type Props = {
    id: number,
    hideText: boolean
}

export function AddToLikes({id, hideText}: Props) {
    const dispatch = useDispatch();

    const isLiked = useSelector<RootState>(state => state.likes.liked.includes(id));

    return (
        <TouchableOpacity
            onPress={() => dispatch(toggleMoviesToLike(id))}
            className="flex-row p-3 rounded-full"
            style={{position: "absolute", right: 20, bottom: 20, backgroundColor: '#ffc13a'}}>

            {!hideText &&
                <Text>Ajouter aux favoris </Text>
            }
            <AntDesign name={isLiked ? 'heart' : 'hearto'} size={24} color="black"/>

        </TouchableOpacity>
    )
}