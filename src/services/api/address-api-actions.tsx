import { UTILS } from 'utils';
import { setAddWishlist, setRemoveWishlist, setWishlist } from '../../store/reducers/wishlist-reducer';
import { deleteData, getData, postData } from '.';
import { URLS } from './api-urls';
import { AppDispatch, RootState } from 'store';
import { Alert } from 'react-native';
import { setAddToCart, setCart, setRemoveCart, setUpdateCartQty } from '../../store/reducers/cart-reducer';
import { setUserAddress } from '../../store/reducers/address-reducer';




//wishlist
export const getAddressess = (
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(`${URLS.address.get_address}`);
      console.log('res: getAddressessList::', res);

      dispatch(setUserAddress(res?.data || []));

    } catch (error: any) {
      console.log('error in getCartList', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};
export const makeDefaultAddress = (
  id: any,
  setLoading: (bool: boolean) => void
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setLoading(id)
      const res = await postData(`${URLS.address.make_default}`, { id });
      console.log('res: getAddressessList::', res);
      let copy = [...getState()?.address?.userAddress];
      copy = copy?.map(x => ({ ...x, set_default: x?.id === id ? 1 : 0 }))
      dispatch(setUserAddress(copy));

    } catch (error: any) {
      console.log('error in getCartList', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
};
