import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICoordinatesSliceState {
    value: {
        lat: number
        lon: number
    }
}

// Default coordinates for Kyiv, Ukraine
const initialState: ICoordinatesSliceState = {
    value: {
        lat: 52.4356,
        lon: 30.5008,
    },
}

export const coordinatesSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducers: create => ({
        setCoordinates: create.reducer(
            (state, action: PayloadAction<{ lat: number; lon: number }>) => {
                state.value.lat = action.payload.lat
                state.value.lon = action.payload.lon
            }
        ),
    }),
    selectors: {
        selectCoordinates: coordinates => coordinates.value,
    },
})

export const { setCoordinates } = coordinatesSlice.actions

export const { selectCoordinates } = coordinatesSlice.selectors
