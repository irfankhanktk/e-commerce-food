import axios from 'axios';
import { STORAGEKEYS } from 'config/constants';
import { resetStack } from 'navigation/navigation-ref';
import { Alert } from 'react-native';
import { AppDispatch, RootState } from 'store';
import { UTILS } from 'utils';
import { getData, postData } from './';
import {
  setLocations,
  setNotifications,
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
  props: any,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.login, values);
      console.log('res of onLogin=>', res);
      await UTILS.setItem(STORAGEKEYS.token, res?.access_token);

      const uRes = await getUserInfo();
      console.log('result of info:::', uRes?.user);

      dispatch(setUserInfo(uRes?.user));
      const role = uRes?.user?.role?.name;
      let screen = `${role}Stack`;
      if (!role) {
        screen = 'Login';
      }
      resetStack(screen);
    } catch (error: any) {
      console.log('error in login', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onSignup = (
  values: any,
  setLoading: (bool: boolean) => void,
  props: any,
  setOtpLoading: (bool: boolean) => void,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.signup, values);
      console.log('res of onSignupPress=>', res);
      setOtpLoading(true);
    } catch (error: any) {
      console.log('error in onSignupPress', UTILS?.returnError(error));
      Alert.alert('', UTILS?.returnError(error));
    } finally {
      setLoading(false);
    }
  };
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
export const onUpdatePassword = (
  values: any,
  setLoading: (bool: boolean) => void,
  props: any,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.update_password, values);
      console.log('res of onUpdatePassword=>', res);
      Alert.alert('Password Changed Successfully');
      dispatch(onLogoutPress());
    } catch (error: any) {
      console.log('error in onSignupPress', UTILS.returnError(error));
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
export const deletePermanentAccount = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(`${URLS.auth.delete_account}`);
      console.log('res of deletaccount', res);
      Alert.alert('Success', 'Account Deleted Successfully');
      dispatch(onLogoutPress());
      return res;
    } catch (error) {
      console.log('error', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
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
export const getBookings = (slug: any) => getData(`${URLS.auth.get_bookings}`);
///Notifications///
export const getNotifications = (
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await postData(URLS.auth.get_notification);
      dispatch(setNotifications(res?.notifications || []));
    } catch (error: any) {
      console.log('error in notification', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};
export const getDashBoard = (slug: any) => getData(`${URLS.auth.get_dashboard}`);