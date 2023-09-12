import { createSlice } from '@reduxjs/toolkit';

type Props = {
  userInfo: any;
  language: string;
  location?: {
    latitude: number;
    longitude: number;
  };
  notifications: any[];

  cities: any[];
  countries: any[];
  states: any[];
  wallet: any;
  unreadNotification: number;
  locations: any[];
  dashboard_counters: any
};
const initialState: Props = {
  userInfo: null,
  cities: [],
  countries: [],
  states: [],
  language: 'en',
  location: undefined,
  notifications: [],
  wallet: {},
  unreadNotification: 0,
  locations: [],
  dashboard_counters: {}
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setCities: (state, action) => {
      state.cities = action.payload;
    },
    setStates: (state, action) => {
      state.states = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setDashboardCounters: (state, action) => {
      state.dashboard_counters = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    reset: (state, action) => {
      state = initialState;
    },
    setLocations: (state, action) => {
      state.locations = action.payload;
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
  reset,
  setDashboardCounters,
  setCities,
  setStates,
  setCountries,
  setLanguage,
  setLocation,
  setNotifications,

  setLocations,
  setWallet,
  // demoAsync
} = userSlice.actions;

// export const demoAsyncFun = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(demoAsync(amount))
//   }, 1000)
// }
export default userSlice.reducer;
