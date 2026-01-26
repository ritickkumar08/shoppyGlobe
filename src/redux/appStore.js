import { configureStore } from '@reduxjs/toolkit'
// Cart slice owns cart items, quantities, and pricing logic.
import cartReducer from '../redux/slices/cartSlice'
// Search slice appears to manage query/filter state.
import searchReducer from './slices/searchSlice'


// Central Redux store configuration.
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer
  }
  // Redux Toolkit enables thunk and devtools by default.
})

export default appStore