import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

type Props = {
  userInfo: any
  wishlist: any[]
  language: string
  location?: any
  notifications: any[]
  wallet: any
  unreadNotification: number
  is_visited_Location: any
};
const initialState: Props = {
  userInfo: null,
  wishlist: [],
  language: 'en',
  location: null,
  notifications: [],
  wallet: {},
  unreadNotification: 0,
  is_visited_Location: '0',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    setAddToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    setRemoveFromWishlist: (state, action) => {
      state.wishlist = state?.wishlist?.filter(x => x?.id !== action.payload?.id);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setIsVisitedLocation: (state, action) => {
      state.is_visited_Location = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    reset: (state, action) => {
      state = initialState;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
      state.unreadNotification = action.payload?.filter(
        (x: any) => !x?.is_read,
      )?.length;
    },
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
    // demoAsync: (state, action) => {
    //   state.userInfo = action.payload
    // },
  },
});
// Action creators are generated for each case reducer function
export const {
  setUserInfo,
  setWishlist,
  setAddToWishlist,
  setRemoveFromWishlist,
  setIsVisitedLocation,
  reset,
  setLanguage,
  setLocation,
  setNotifications,
  setWallet,
  // demoAsync
} = userSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default userSlice.reducer;
