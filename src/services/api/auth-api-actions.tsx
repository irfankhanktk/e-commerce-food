import { AppDispatch, RootState } from 'store';
import { getData, postData, postFormData } from './';
import { URLS } from './api-urls';
import { UTILS } from 'utils';
import { STORAGEKEYS } from 'config/constants';
import { Alert } from 'react-native';
import { setUserInfo } from './../../store/reducers/user-reducer';
import { goBack, resetStack } from 'navigation/navigation-ref';

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
      await UTILS.setItem(STORAGEKEYS.token, res?.data?.jwToken);
      await UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.data));
      dispatch(setUserInfo(res?.data));
      resetStack('Drawer');
      // UTILS.resetStack(props, 'HotelStack');
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
  setModal: (bool: boolean) => void,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postData(URLS.auth.register, values);
      console.log('res of onSignupPress=>', res);
      setModal(true);
    } catch (error: any) {
      console.log('error in onSignupPress', UTILS?.returnError(error));
      Alert.alert('', UTILS?.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};

export const onSendCodeToEmail = (
  values: any,
) => postData(URLS.auth.send_email_code, values);

export const onForgotPassword = (
  values: any,
) => postData(URLS.auth.forget_password, values);

export const onUpdateProfile = (
  values: any,
  setLoading: (bool: boolean) => void,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(true);
      const res = await postFormData(URLS.auth.update_profile, values);
      console.log('res of onLogin=>', res);
      await UTILS.setItem(STORAGEKEYS.user, JSON.stringify(res?.data));
      dispatch(setUserInfo(res?.data));
      goBack();
    } catch (error: any) {
      console.log('error in login', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
export const onLogoutPress = (props: any) => {
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