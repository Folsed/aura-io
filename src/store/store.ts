'use client'
import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { counterSlice } from './features/counter/counterSlice'
import { weatherApiSlice } from '@/store/features/weather/weatherApiSlice'

const rootReducer = combineSlices(counterSlice, weatherApiSlice)

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => {
            return getDefaultMiddleware().concat(weatherApiSlice.middleware)
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
