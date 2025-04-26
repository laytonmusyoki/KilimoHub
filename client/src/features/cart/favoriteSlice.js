import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const product = action.payload;
      if (!state.items.some(item => item.id === product.id)) {
        state.items.push(product);
      }
    },
    removeFromFavorite: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.id !== productId);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
