import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../redux/slices/cartSlice'
import searchReducer from './slices/searchSlice'

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer
  }
})

export default appStore