import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[],
        totalQuantity:0  //represents total item count, not distinct products
    },
    reducers:{
        addToCart: (state,action)=>{
            const product = action.payload;
            const existing = state.items.find(
                (item) => item.id === product.id
            );

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }

            state.totalQuantity += 1;
        },
        removeFromCart: (state,action)=>{
            const id = action.payload;
            const item = state.items.find((i) => i.id === id);

            if (!item) return;

            state.totalQuantity -= item.quantity;
            state.items = state.items.filter((i) => i.id !== id);
        },
        increaseQuantity:(state,action)=>{
            const item = state.items.find((i) => i.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
            }
        },
        decreaseQuantity:(state,action)=>{
           const item = state.items.find((i) => i.id === action.payload);
            if (!item) return;

            item.quantity -= 1;
            state.totalQuantity -= 1;

            if (item.quantity === 0) {
                state.items = state.items.filter(
                (i) => i.id !== action.payload
                );
            }
        },
        clearCart:(state)=>{
            state.items = [];
            state.totalQuantity = 0;
        }
    }
})

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions

export default cartSlice.reducer