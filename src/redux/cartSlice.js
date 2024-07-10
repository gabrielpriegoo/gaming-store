import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalItems += 1;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
