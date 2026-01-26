// this slice works as to what products are to be shown on the prdoctlist screen

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name :'search', //name with which it will be known
    initialState:{
        query:"" //At the start, the search box is empty.
    },
    reducers:{
        setSearchInput:(state, action)=>{
            state.query = action.payload
        },
        clearSearch:(state) =>{
            state.query = ""
        }
    }
})

export const {setSearchInput, clearSearch} = searchSlice.actions

export default searchSlice.reducer