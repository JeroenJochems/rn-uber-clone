import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import tw from 'twrnc';
import NavOptions from "../components/NavOptions";
import {useDispatch, useSelector} from "react-redux";
import {setOrigin} from "../store/slices/navSlice";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import { GOOGLE_PLACES_API } from "@env"
import RecentSearches from "../components/RecentSearches";

const HomeScreen = () => {

    const dispatch = useDispatch()
    const origin = useSelector(state => state.nav.origin)

    return (
        <SafeAreaView style={tw`h-full bg-white`}>
            <View style={tw`p-5`}>
                <Image style={{ width: 100, height: 100, resizeMode: 'contain' }} source={{ uri: 'https://links.papareact.com/gzs'}} />

                <GooglePlacesAutocomplete
                    placeholder="Where from?"
                    styles={{
                        container: {
                            flex: 0
                        },
                        textInput: {
                            fontSize: 18,
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
                        dispatch(setOrigin(
                            {
                                location: details.geometry.location,
                                description: data.description,
                            }
                        ))
                    }}
                    fetchDetails={true}
                    onFail={(error) => console.error(error)}
                />
                { origin && (<NavOptions />)}

                <RecentSearches />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create()