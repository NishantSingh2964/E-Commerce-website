import { configureStore } from "@reduxjs/toolkit";
import CardSlice from './CardSlice'
import ProductSlice from './ProductSlice'
const store = configureStore({
    reducer:{
        cart: CardSlice,
        products: ProductSlice
    }
})

export default store;