import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import cartReducer from "../features/cartSlice"
import authReducer from "../features/AuthSlice"
import scategoriesReducer from "../features/scategorieSlice"

const store = configureStore({
    reducer: {
        storearticles: articlesReducer,
        storescategories: scategoriesReducer,
        storecart: cartReducer,
        auth: authReducer,
    }
})

export default store