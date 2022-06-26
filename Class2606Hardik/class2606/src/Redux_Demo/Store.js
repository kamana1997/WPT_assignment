import {configureStore} from "@reduxjs/toolkit"
import fruitNameReducer from "./FruitNameSlice"
export default configureStore({
    reducer : {
        fruitName : fruitNameReducer
    }
})