import { setAddToWishlist, setRemoveFromWishlist, setWishlist } from '../../store/reducers/user-reducer';
import { deleteData, getData, postData, putData } from '.';
import { URLS } from './api-urls';
import { AppDispatch, RootState } from 'store';
import { Alert } from 'react-native';
import { UTILS } from 'utils';




export const getCategories = async () => getData(URLS.shop.shop_categories)
export const getShops = async (id: any) => getData(`${URLS.shop.get_shops_by_cat_id}${id}`)
export const getTrendingShops = async () => getData(URLS.shop.trending_shops)
export const getPopularShops = async () => getData(URLS.shop.popluar_shops)
//shop details start here
export const getShopDetails = async (id: any) => getData(`${URLS.shop.shop_details}${id}`)
export const getShopPopularProducts = async (id: any) => getData(`${URLS.product.popular_shop_products}${id}`)
export const getShopDetailsCategories = async (id: any) => getData(`${URLS.shop.shop_details_categories}${id}`)
export const getProductsByCategoryId = async (id: any) => getData(`${URLS.product.products_by_cat_id}${id}`)
//shop details end here

//product wishlist start here
export const getUserWishlist = (
  setLoading: (bool: boolean) => void,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      // setLoading(true);
      const res = await getData(URLS.wishlist.get_wishlist);
      console.log('res of getUserWishlist=>', res);
      dispatch(setWishlist(res?.data || []));
    } catch (error: any) {
      console.log('error in getUserWishlist', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};
export const addOrRemoveWishlist = (
  product: any,
  setLoading: (bool: boolean) => void,
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      // setLoading(true);
      const payload = {
        productId: product?.id,
        preferenceId: 0
      }
      const wishlist = getState()?.user?.wishlist;
      const isExist = wishlist?.some(x => x?.id === product?.id);
      const res = isExist ? await deleteData(URLS.wishlist.remove_product, payload)
        : await postData(URLS.wishlist.add_product, payload);
      // console.log('res of addOrRemoveWishlist=>', res);
      if (isExist) {
        dispatch(setRemoveFromWishlist(product));
      } else {
        dispatch(setAddToWishlist(product));
      }
    } catch (error: any) {
      console.log('error in addOrRemoveWishlist', UTILS.returnError(error));
      Alert.alert('', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};
// data in wishlist add and remove will be
// {
//     "productId": 0,
//     "preferenceId": 0
// }
export const getUserAddresses = async (searchTerm?: string) => getData(`${URLS.address.get_user_addresses}${searchTerm}`)
export const addUserAddress = async (data: any) => {
  if (data?.addressId) {
    return putData(URLS.address.user_address, data);
  }
  return postData(URLS.address.user_address, data);
}
export const deleteUserAddress = async (data: any) => deleteData(URLS.address.user_address, data)
  //body
    // {
    // "addressId": 0 for put and delete body only
    //   "title": "string",
    //   "address": "string",
    //   "latitude": 0,
    //   "longitude": 0
    // }
