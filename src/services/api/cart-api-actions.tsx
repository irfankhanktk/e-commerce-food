import { UTILS } from 'utils';
import { setAddWishlist, setRemoveWishlist, setWishlist } from '../../store/reducers/wishlist-reducer';
import { deleteData, getData, postData } from './';
import { URLS } from './api-urls';
import { AppDispatch, RootState } from 'store';
import { Alert } from 'react-native';
import { setAddToCart, setCart, setRemoveCart, setUpdateCartQty } from '../../store/reducers/cart-reducer';




//wishlist
export const getCartList = (
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await postData(`${URLS.cart.get_cart_summary}`);
      console.log('res: getCartList::', res);

      dispatch(setCart(res || []));
    } catch (error: any) {
      console.log('error in getCartList', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};

export const addToCartList = (
  data: any,
  setCartLoading: (bool: boolean) => void
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setCartLoading(true)
      const res = await postData(`${URLS.cart.add_to_cart}`, data)
      console.log('res: addToCartList', res?.cartlist?.original?.length);

      dispatch(setCart(res?.cartlist?.original || []));
    } catch (error: any) {
      console.log('error in addToCartList', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setCartLoading(false)
    }
  };
};
export const updateCartQty = (
  data: any,
  setCartLoading: (bool: boolean) => void,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setCartLoading(true)
      const res = await postData(`${URLS.cart.update_cart_qty}`, data)
      console.log('res: updateCartQty', res?.cartlist?.original[0]);
      dispatch(setCart(res?.cartlist?.original || []));
    } catch (error: any) {
      console.log('error in updateCartQty', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setCartLoading(false)
    }
  };
};
export const removeFromCartList = (
  productId: any,
  setCartLoading: (bool: boolean) => void,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      setCartLoading(true)
      const res = await deleteData(`${URLS.cart.remove_from_cart}${productId}`)
      console.log('res: removeFromCartList', res?.cartlist?.original[0]);
      dispatch(setCart(res?.cartlist?.original || []));
    } catch (error: any) {
      console.log('error in removeFromCartList', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setCartLoading(false)
    }
  };
};
export const getCartSummary = () => getData(`${URLS.cart.get_summary}`)

export const updateShippingType = (values: any) => postData(URLS.cart.updat_shipping_type, values);
export const selectPaymentType = (values: any) => postData(URLS.payment.paymentselection, values);
export const createOrder = () => postData(URLS.cart.create_order);
export const orderDetails = (productId: any) => getData(`${URLS.product.order_details}${productId}`)


