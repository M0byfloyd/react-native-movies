import {StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./src/store/store";
import {MoviesList} from "./src/screens/MoviesList";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MovieType} from "./src/types/MovieType";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Likes} from "./src/screens/Likes";
import {MoviesDetails} from "./src/screens/MoviesDetails";

export type StackType = {
    MoviesList: undefined,
    MoviesDetails: MovieType,
};

export type TabType = {
    Movies: undefined,
    Likes: undefined
}

export function MovieStack() {
    const Stack = createNativeStackNavigator<StackType>();

    return (
        <Stack.Navigator initialRouteName="MoviesList">
            <Stack.Screen name="MoviesList" component={MoviesList}/>
            <Stack.Screen name="MoviesDetails" component={MoviesDetails}/>
        </Stack.Navigator>
    )
}

export default function App() {
    const Tab = createBottomTabNavigator<TabType>();

    return (
            <Provider store={store}>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen
                            name="Movies" component={MovieStack}
                            options={{headerShown:false}}
                        />
                        <Tab.Screen name="Likes" component={Likes}/>
                    </Tab.Navigator>
                </NavigationContainer>

            </Provider>
    );
}
