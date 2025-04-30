import { createSlice } from '@reduxjs/toolkit'

export interface ICounterSliceState {
    value: number
    status: 'idle' | 'loading' | 'failed'
}
const initialState: ICounterSliceState = {
    value: 0,
    status: 'idle',
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: create => ({
        increment: create.reducer(state => {
            state.value += 1
        }),
        decrement: create.reducer(state => {
            state.value -= 1
        }),
    }),
    selectors: {
        selectCount: counter => counter.value,
        selectStatus: counter => counter.status,
    },
})

export const { increment, decrement } = counterSlice.actions

export const {selectCount, selectStatus} = counterSlice.selectors