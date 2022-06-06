import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import tw from "twrnc";
import {Icon} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

const data = [
    {
        id: 1,
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },{
        id: 2,
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "MapScreen"
    },
]

const NavOptions = () => {

    const navigation = useNavigation()

    return (
        <View>
            <FlatList
                data={data}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw`pr-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40`}>
                        <Image source={{ uri: item.image }}
                               style={{width: 120, height: 120, resizeMode: "contain"}} />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon name='arrowright' color='white' type='antdesign' style={tw`rounded-full bg-black w-10 h-10 mt-4 p-2`} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavOptions