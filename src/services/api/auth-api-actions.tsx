import axios from 'axios';
import { STORAGEKEYS } from 'config/constants';
import { navigate, resetStack } from 'navigation/navigation-ref';
import { Alert } from 'react-native';
import { AppDispatch, RootState } from 'store';
import { UTILS } from 'utils';
import { getData, postData } from './';
import {
  setCities,
  setCountries,
  setDashboardCounters,
  setLocations,
  setNotifications,
  setStates,
  setUserInfo,
  setWallet,
} from './../../store/reducers/user-reducer';
import { URLS } from './api-urls';
export const getUserInfo = () => {
  return getData(URLS.auth.get_user_info);
};
export const onLogin = (
  values: any,
  setLoading: (bool: boolean) => void,

) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.login, values);
      await UTILS.setItem(STORAGEKEYS.token, res?.access_token);
      await UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      console.log('res of onLogin=>', res);
      dispatch(setUserInfo(res?.user));
      if (res?.user?.type === 'customer') {
        navigate('Drawer')
      } else {
        navigate('AdminDashBoard')
      }
    } catch (error: any) {
      console.log('error in login', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onSignup = (values: any) => postData(URLS.auth.signup, values);
export const verifyOtp = (values: any) => postData(URLS.auth.otp_verify, values);
export const resendVerifyOtp = (values: any) => postData(URLS.auth.resend_otp_verify, values);
export const forgotPassword = (values: any) => postData(URLS.auth.forget_password, values);
export const resendPasswordCode = (values: any) => postData(URLS.auth.resend_password_code, values);
export const changePassword = (values: any) => postData(URLS.auth.change_password, values);
export const logout = () => getData(URLS.auth.logout);
export const banners = () => getData(URLS.app.get_banners);
export const getFeaturedCategories = () => getData(URLS.app.get_featured_categories);
export const getAllFeaturedProducts = () => getData(URLS.app.get_all_featured_products);
export const getAllProducts = (pageNumber: any) => {
  let url = `${URLS.app.get_all_products}?page=${pageNumber}`;
  return getData(url);
};

export const getProductDetails = (productId: any) => getData(`${URLS.app.get_product_details}${productId}`)
export const getProductSlides = (productId: any) => getData(`${URLS.app.get_product_slides}${productId}`)

export const getAllCategories = () => getData(URLS.categories.get_all_categories);
export const getAllFeaturedCategories = () => getData(URLS.categories.get_all_categories_featured)
// export const getOrderList = () => getData(URLS.product.order_list)
export const getOrderList = (dateRange: any, paymentType: any, pageNumber: any) => {
  let url = `${URLS.product.order_list}?date_range=${dateRange}&payment_type=${paymentType}&page=${pageNumber}`;
  return getData(url);
};
export const getDistance = async (lat1: any, lat2: any, lon1: any, lon2: any) => {
  console.log("lat1, lat2, lon1, lon2", lat1, lat2, lon1, lon2);

  try {
    var km = 1;
    let time = 0;
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${lat1},${lon1}&destinations=${lat2},${lon2}&key=AIzaSyCbFQqjZgQOWRMuQ_RpXU0kGAUIfJhDw98`
    );
    if (response?.data?.status === "OK") {
      console.log("Distance is ");
      km = response?.data?.rows[0]?.elements[0]?.distance?.value / 1000;
      time = response?.data?.rows[0]?.elements[0]?.duration?.text;

    }
    return { km, time };

  } catch (error) {
    throw new Error(UTILS.returnError(error));
  }
}



//////////add addresss/////////////////
export const getAddresses = (userId: any) => getData(`${URLS.address.get_address}`)
export const deleteAddress = (addressId: any) => getData(`${URLS.address.delete_address}${addressId}`)
export const addAddress = (newAddress: any) => postData(`${newAddress?.id ? URLS.address.update : URLS.address.add_address}`, newAddress)


//////////admin dashboard///////////////
export const getStatus = () => getData(URLS.admin.dashboard_status);
export const getShop = () => getData(URLS.brand.shop);
export const getWishlist = () => getData(URLS.wishlist.wishlist);

///////////rating delivery boy/////////////
export const ratingDeliveryBoy = (values: any) => postData(URLS.rating.delivery_boy_rating, values);


/////////////payment ////////////////////////
export const getPaymentType = () => getData(`${URLS.payment.payment_type}`)



export const getCities = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {

      const res = await getData(URLS.address.get_cities)

      dispatch(setCities(res?.data || []));

    } catch (error: any) {
      console.log('error in wallet', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
    }
  };
};
export const getCountries = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(URLS.address.get_countries)
      console.log('res::::', res);

      dispatch(setCountries(res?.data || []));

    } catch (error: any) {
      console.log('error in wallet', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
    }
  };
};
export const getStates = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(URLS.address.get_states)

      dispatch(setStates(res?.data || []));

    } catch (error: any) {
      console.log('error in wallet', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
    }
  };
};


export const getAllProductCategoryPaginated = (categoryId: any, pageNumber: any,) => {
  let url = `${URLS.categories.get_all_products_of_category_paginated}${categoryId}?page=${pageNumber}&name=`;
  return getData(url);
};




//// add amount///
export const onAddAmount = (values: any) => {
  return postData(URLS.wallet.add_amount, values);
};
/// Wallet ///
export const getWallet = (values: any, setLoading: (bool: boolean) => void) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.wallet.get_wallet, values);

      dispatch(setWallet(res || {}));

    } catch (error: any) {
      console.log('error in wallet', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const getLocations = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(URLS.auth.locations);
      dispatch(setLocations(res?.data));
    } catch (error) {
      console.log('error', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    }
  };
};
export const onUpdateProfile = (
  values: any,
  setLoading: (bool: boolean) => void,
  props: any,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      delete values?.role;
      delete values?.roles;
      const res = await postData(URLS.auth.update_profile, values);
      console.log('res of onUpdateProfile=>', res);

      UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      dispatch(setUserInfo(res?.user));
      Alert.alert('Success', 'Save changes successfully');
    } catch (error: any) {
      console.log('error in onUpdateProfile', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onLogoutPress = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      // await logout();
      await UTILS.clearStorage();
      dispatch(setUserInfo(null));
      resetStack('Splash');
    } catch (error: any) {
      console.log('error in onDeleteTask', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    }
  };
};

export const getPaymentUri = async (data: any) =>
  axios.post('https://secure.clickpay.com.sa/payment/request', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'SNJNL9M6RH-J69NMZLB9Z-GGNBNKDBTJ',
    },
  });
export const getPaymentTransationStatus = async (data: any) =>
  axios.post('https://secure.clickpay.com.sa/payment/query', data, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'SNJNL9M6RH-J69NMZLB9Z-GGNBNKDBTJ',
    },
  });

// update profile
export const updateProfile = (
  data: any,
  setLoading: (bool: boolean) => void
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.update_profile, data);
      console.log('res::::', res);
      UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      dispatch(setUserInfo(res?.user || []));
    } catch (error: any) {
      console.log('error in updateProfile', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const uploadImage = (
  data: any,
  setLoading: (bool: boolean) => void
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.update_image, data);
      UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.user));
      dispatch(setUserInfo(res?.user || []));
    } catch (error: any) {
      console.log('error in updateProfile', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const getCounters = (
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(`${URLS.auth.dashboard_counters}`)
      dispatch(setDashboardCounters(res || {}));
    } catch (error: any) {
      console.log('error in getCounters', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};

