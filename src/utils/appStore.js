import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";

const appStore = configureStore(
    {   
        // this is the reducer object which contains all the reducers
        // we can have multiple reducers in the object
        reducer: {
            cart: cartReducer,
        }
    }
)

export default appStore; 