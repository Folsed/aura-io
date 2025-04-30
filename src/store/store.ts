'use client'
import { Action, combineSlices, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { counterSlice } from './features/counter/counterSlice'

const rootReducer = combineSlices(counterSlice)

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
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
