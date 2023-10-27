import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import {FlatList, Text} from "react-native";
import {LikeDisplay} from "../components/LikeDisplay";

export function Likes() {
    const likes = useSelector<RootState>(state => state.likes.liked);

    if (!likes.length) {
        return <Text className="text-2xl text-center my-auto">T'aimes rien</Text>
    }

    return (<>
        <FlatList data={likes} renderItem={({item}) =>
            <LikeDisplay id={item} />
        }/>
    </>)
}