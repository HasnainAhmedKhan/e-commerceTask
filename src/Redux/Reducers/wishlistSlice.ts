import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a wishlist item
interface WishlistItem {
  id: string;
  price: string;
  image: any;
  name: string;
  description: string;
}

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
