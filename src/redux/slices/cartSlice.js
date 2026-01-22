import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addToCart: (state,action)=>{
            let someItem = state.items.find((item)=>{item.id === action.payload.id})

            if(someItem){
                someItem.noOfitems +=1
            }else{
                state.items.push({...action.payload, noOfitems: 1})
            }
            state.totalQuantity +=1
        },
        removeFromCart: (state,action)=>{
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        increaseQuantity:(state,action)=>{
            const item = state.items.find((item)=> {item.id === action.payload})
            if(item) item.quantity++;
        },
        decreaseQuantity:(state,action)=>{
            const item = state.items.find((item)=>{item.id === action.payload})
            if(item) item.quantity--;
        },
        clearCart:(state)=>{
            state.items = [];
        }
    }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions

export default cartSlice.reducer