import { createSlice } from "@reduxjs/toolkit";

const CartSilce = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addCart(state,action) {
            
            return [...state, {...action.payload, cartCount: 1}]
        },

        removeCart(state,action) {
            return state.filter(product => product.id !== action.payload)
        },

        increment(state, action){
            
            return state.map(product => product.id === action.payload ? {...product, cartCount: product.cartCount + 1} : product)
        },

        decrement(state, action){
            

            return state.map(product => product.id === action.payload ? {...product, cartCount: product.cartCount - 1} : product)
            .filter(product => product.cartCount !== 0 )
        }
    }
})

export default CartSilce.reducer
export const {addCart, removeCart, increment, decrement} = CartSilce.actions;