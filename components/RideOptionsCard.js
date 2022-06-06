import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useSelector} from "react-redux";

const RideOptionsCard = () => {

    const navSlice = useSelector(state => state.nav)

    return (
        <View>
            <Text>{ navSlice.origin?.description } to { navSlice.destination?.description }</Text>
        </View>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})