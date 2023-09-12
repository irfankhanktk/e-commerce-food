import { createSlice } from '@reduxjs/toolkit';

type Props = {
  wishlists: any[];
};
const initialState: Props = {
  wishlists: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlist: (state, action) => {
      state.wishlists = action.payload;
    },
    setAddWishlist: (state, action) => {
      state.wishlists.push(action.payload);
    },
    setRemoveWishlist: (state, action) => {
      const copy = [...state.wishlists];
      state.wishlists = copy?.filter(x => x !== action?.payload);
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setWishlist,
  setAddWishlist,
  setRemoveWishlist
} = wishlistSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default wishlistSlice.reducer;
