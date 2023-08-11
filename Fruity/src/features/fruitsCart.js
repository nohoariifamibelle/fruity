import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const fruitsCart = createSlice({
    name: 'fruitsCart',
    initialState,
    reducers: {
        addOne: (state, action) => {
            const fruitIndex = state.cart.findIndex(obj => obj.id === action.payload.id)

            if (fruitIndex !== -1) {
                state.cart[fruitIndex].quantity++
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }
        },
        removeOne: (state, action) => {
            const fruit = state.cart.find(obj => obj.id === action.payload)

            if (fruit) {
                if (fruit.quantity === 1) {
                    state.cart = state.cart.filter(fruit => fruit.id !== action.payload)
                } else {
                    fruit.quantity--
                }
            }
        },
        removeAll: (state) => {
            if (state.cart.length > 0) {
                state.cart = []
            }
        },
        removeFruit: (state, action) => {
            const fruit = state.cart.find(obj => obj.id === action.payload)
            if (fruit) {
                fruit.quantity = 0
            }
        }
    }
})

export const { addOne, removeOne, removeAll, removeFruit } = fruitsCart.actions
export default fruitsCart.reducer