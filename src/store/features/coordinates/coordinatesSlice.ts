import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICoordinatesSliceState {
    value: {
        lat: number
        lon: number
    }
}

const getInitialCoordinates = (): { lat: number; lon: number } => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('current-city-coordinates')
        if (saved) {
            return JSON.parse(saved)
        }
    }
    // fallback to Kyiv
    return { lat: 50.4500336, lon: 30.5241361 }
}
// Default coordinates for Kyiv, Ukraine
const initialState: ICoordinatesSliceState = {
    value: getInitialCoordinates(),
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
