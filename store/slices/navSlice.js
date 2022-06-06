import { createSlice } from '@reduxjs/toolkit'
import uuid from "react-native-uuid";

const initialState = {
    recentOrigins: [],
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload

            const recentSameOriginLocation = state.recentOrigins.find(item => (item.location.lat==action.payload.location.lat && item.location.lng==action.payload.location.lng));

            if (recentSameOriginLocation===undefined) {
                state.recentOrigins.unshift({
                    id: uuid.v4(),
                    ...action.payload
                })
            }
        },

        setDestination: (state, action) => {
            state.destination = action.payload
        },

        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload
        }
    }
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export const selectOrigin = (state) => state.nav.origin
export const selectDestination = (state) => state.nav.destination
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation

export default navSlice.reducer