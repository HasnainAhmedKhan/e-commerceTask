import { combineReducers,configureStore } from '@reduxjs/toolkit';
import cartSlice from './Reducers/cartSlice';
import wishlistSlice from './Reducers/wishlistSlice';
const rootReducer = combineReducers({
  cart: cartSlice,
  wishlist: wishlistSlice,
});

// Define RootState type
export type RootState = ReturnType<typeof rootReducer>;

// Configure the store
const store = configureStore({
  reducer: rootReducer,
});

export default store;