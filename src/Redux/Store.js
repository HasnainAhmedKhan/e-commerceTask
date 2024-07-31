import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/cartReducer";
import wishlistReducer from "./Reducers/wishlistReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  }
})
export default store;