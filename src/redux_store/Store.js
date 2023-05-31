import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSilce"

const Store = configureStore({
    reducer: {
        product: productReducer,
    }
})

export default Store