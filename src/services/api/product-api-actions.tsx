import { Alert } from 'react-native';
import { AppDispatch, RootState } from 'store';
import { UTILS } from 'utils';
import { getData } from '.';
import { setTopProducts } from '../../store/reducers/product-reducer';
import { URLS } from './api-urls';


//top selling Products that should be display in product details
export const getTopSellingProducts = (
) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const res = await getData(`${URLS.product.top_seller_products}`);
      console.log('res: getTopSellerProducts::', res?.data);

      dispatch(setTopProducts(res?.data || []));
    } catch (error: any) {
      console.log('error in getTopSellerProducts', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      // setLoading(false);
    }
  };
};

export const getRelatedProducts = (productId: any) => getData(`${URLS.product.related_products}${productId}`)
