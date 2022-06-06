import React, {Component, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import {useSelector} from "react-redux";
import MapViewDirections from "react-native-maps-directions";
import tw from "twrnc";
import {GOOGLE_PLACES_API} from "@env"

const Map = () => {
    const origin = useSelector(state => state.nav.origin)
    const destination = useSelector(state => state.nav.destination)
    const mapRef = useRef(null)

    const initialRegion = {
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    }

    useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], { edgePadding: { top: 50, right: 50, bottom: 50, left: 50}})

    }, [origin, destination])

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={initialRegion}>

            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_PLACES_API}
                    strokeWidth={3}
                    strokeColor="blue"
                />
            )}

            {origin && destination && (
                <Marker
                    coordinate={{
                    latitude: destination.location.lat,
                    longitude: destination.location.lng }}
                    title="Destination"
                    identifier="destination"
                    description={destination.description}
                />
            )}

            {origin && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title="Origin"
                    identifier="origin"
                    description={origin.description}
                />
            )}
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})