import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import tw from "twrnc";
import Map from "../components/Map";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {

    const Stack = createNativeStackNavigator();

    return (
        <KeyboardAvoidingView behavior={'padding'} style={tw`flex-1`}>
            <SafeAreaView style={tw`h-full bg-white`}>
                <View style={tw`h-1/2`}>
                    <Map />
                </View>
                <View style={tw`h-1/2`}>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="NavigateCard"
                            component={NavigateCard}
                            options={{headerShown: false}}/>
                        <Stack.Screen
                            name="RideOptionsCard"
                            component={RideOptionsCard}
                            options={{headerShown: false}}/>
                    </Stack.Navigator>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default MapScreen