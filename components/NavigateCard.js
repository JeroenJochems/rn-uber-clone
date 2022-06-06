import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView  } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import tw from "twrnc";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {setDestination, setOrigin} from "../store/slices/navSlice";
import { GOOGLE_PLACES_API } from "@env"
import {useDispatch} from "react-redux";

const NavigateCard = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-xl font-semibold py-2  text-center`} onPress={() => navigation.navigate('RideOptionsCard')}>
                Yo
            </Text>
            <View style={tw`border-t border-gray-200`}>
                <GooglePlacesAutocomplete
                    placeholder="Where to?"
                    styles={{
                        container: {
                            flex: 0,
                            padding: 20,

                        },
                        textInput: {
                            fontSize: 18,
                            backgroundColor: "#ececec"
                        }
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_PLACES_API,
                        language: 'en',
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setDestination(
                            {
                                location: details.geometry.location,
                                description: data.description,
                            }
                        ))
                        navigation.navigate('RideOptionsCard')
                    }}
                    fetchDetails={true}
                    onFail={(error) => console.error(error)}
                />
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})