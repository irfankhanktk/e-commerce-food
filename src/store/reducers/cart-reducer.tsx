import { createSlice } from '@reduxjs/toolkit';

type Props = {
  cart_list: any[];
};
const initialState: Props = {
  cart_list: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart_list = action.payload;
    },
    setAddToCart: (state, action) => {
      state.cart_list.push(action.payload);
    },
    setRemoveCart: (state, action) => {
      const copy = [...state.cart_list];
      state.cart_list = copy?.filter(x => x !== action?.payload);
    },
    setUpdateCartQty: (state, action) => {
      const copy = [...state.cart_list];
      state.cart_list = copy?.filter(x => x !== action?.payload);
    },
  }
});
// Action creators are generated for each case reducer function
export const {
  setCart,
  setAddToCart,
  setRemoveCart,
  setUpdateCartQty
} = cartSlice.actions;

export default cartSlice.reducer;
