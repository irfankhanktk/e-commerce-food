import { createSlice } from '@reduxjs/toolkit';

type Props = {
  userAddress: any[];

};
const initialState: Props = {
  userAddress: [],

};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setUserAddress: (state, action) => {
      state.userAddress = action.payload;
    },
    setRemoveAddress: (state, action) => {
      const copy = [...state.userAddress]
      state.userAddress = copy.filter((item) => item !== action?.payload)
    },
    setSelectedAddress: (state, action) => {
      state.userAddress.push(action?.payload)
    }

  },
});
// Action creators are generated for each case reducer function
export const {
  setUserAddress,
  setRemoveAddress,
  setSelectedAddress,

  // demoAsync
} = addressSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default addressSlice.reducer;
