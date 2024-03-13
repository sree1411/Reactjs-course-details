import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: "count",
    initialState:{
        count:0
    },
    reducers:{
        add(state, action){
            const updatedCart = state.count + 1
            return{...state, count:updatedCart}
        },
        remove(state, action){
            const updatedCart = state.count - 1
            return{...state, count:updatedCart}
        },
        reset(state, action){
            // const updatedCart = state.count - state.count
            // console.log(updatedCart);   we can write like this also in the commnet section
            // return{...state, count:updatedCart}
            return{...state, count:0}
        }
    }
})

export const {add, remove, reset} = counterSlice.actions
export const counterReducer = counterSlice.reducer