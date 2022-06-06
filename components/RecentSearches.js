import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import tw from "twrnc";
import {useDispatch, useSelector} from "react-redux";
import {setOrigin} from "../store/slices/navSlice";
import {useNavigation} from "@react-navigation/native";

const RecentSearches = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const recentOrigins = useSelector(state => state.nav.recentOrigins)

    const loadRecentSearch = (id) => {

        const recentSearch = recentOrigins.find(item => item.id===id);

        dispatch(setOrigin({
            location: recentSearch.location,
            description: recentSearch.description
        }))

        navigation.navigate("MapScreen")
    }

    return (
        <FlatList
            data={recentOrigins}
            keyExractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity style={tw`p-3`} onPress={() => loadRecentSearch(item.id)}>
                    <Text>{ item.description }</Text>
                </TouchableOpacity>
                )}
        />
    )
}

export default RecentSearches
