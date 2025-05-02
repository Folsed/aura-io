'use client'
import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { weatherApiSlice } from '@/store/features/weather/weatherApiSlice'
import { coordinatesSlice } from './features/coordinates/coordinatesSlice'
import { uvApiSlice } from './features/weather/uvApiSlice'

const rootReducer = combineSlices(weatherApiSlice, coordinatesSlice, uvApiSlice)

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => {
            return getDefaultMiddleware().concat(weatherApiSlice.middleware, uvApiSlice.middleware)
        },
    })
}

export type TAppStore = ReturnType<typeof makeStore>
export type TRootState = ReturnType<typeof rootReducer>

export type TAppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    TRootState,
    unknown,
    Action
>
export type TAppDispatch = TAppStore['dispatch']
