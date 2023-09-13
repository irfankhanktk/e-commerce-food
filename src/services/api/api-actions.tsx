import { UTILS } from 'utils';
import { setAddWishlist, setRemoveWishlist, setWishlist } from '../../store/reducers/wishlist-reducer';
import { getData } from './';
import { URLS } from './api-urls';
import { AppDispatch, RootState } from 'store';
import { Alert } from 'react-native';


//profile 
export const getBrands = () => getData(`${URLS.brand.all_brands}`)
export const getVendors = () => getData(`${URLS.vendor.get_vendors}`)
export const getTopBrands = () => getData(`${URLS.brand.top_brands}`)
export const getSearchProducts = (filter: any) => {
  return getData(`${URLS.app.search_products}${filter?.name || ''}&page=${filter?.page || 1}`)
}

//wishlist
export const getWishlist = (
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(`${URLS.wishlist.wishlist}`);
      console.log('res: getWishlist::', res?.data);

      dispatch(setWishlist(res?.data?.map((w: any) => w?.product?.id)));
    } catch (error: any) {
      console.log('error in getCounters', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};
export const removeUserWishlist = (
  product_id: any
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(`${URLS.wishlist.remove_wishlist}${product_id}`)
      console.log('res: removeUserWishlist', res);
      dispatch(setRemoveWishlist(product_id));
    } catch (error: any) {
      console.log('error in getCounters', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};
export const addUserWishlist = (
  product_id: any
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(`${URLS.wishlist.add_wishlist}${product_id}`)
      console.log('res: addUserWishlist', res);
      dispatch(setAddWishlist(product_id));
    } catch (error: any) {
      console.log('error in getCounters', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};