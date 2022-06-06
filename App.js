import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store'
import HomeScreen from "./screens/HomeScreen";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from "./screens/MapScreen";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <Provider store={store}>
          <SafeAreaProvider>
              <NavigationContainer>
                  <Stack.Navigator>
                      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
                      <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }}/>
                  </Stack.Navigator>
              </NavigationContainer>
          </SafeAreaProvider>
      </Provider>
  );
}

const styles = StyleSheet.create();
