import { createSlice } from "@reduxjs/toolkit";

export const fruitNameSlice = createSlice({
    name : "fruit_name",
    initialState : {
        fruit_name : "" //default value of state left side prop is also variable
    },
    reducers : {
        "add" : (state,action) => {
            state.fruit_name = action.payload
            // here payload property will give the data
        }
    } 
})

//generate the actions automatically
export const {add} = fruitNameSlice.actions
export default fruitNameSlice.reducer
