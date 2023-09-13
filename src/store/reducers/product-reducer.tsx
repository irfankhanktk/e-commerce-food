import { createSlice } from '@reduxjs/toolkit';

type Props = {
  top_selling_products: any[];
};
const initialState: Props = {
  top_selling_products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setTopProducts: (state, action) => {
      state.top_selling_products = action.payload;
    },

  },
});
// Action creators are generated for each case reducer function
export const {
  setTopProducts,
} = productSlice.actions;

export default productSlice.reducer;
