import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import {store} from "./src/store/store";
import {MoviesList} from "./src/screens/MoviesList";

export default function App() {
  return (
    <Provider store={store} >
      <MoviesList />

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
