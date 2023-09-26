import CustomFlatList from 'components/atoms/custom-flatlist';
import {useTheme} from '@react-navigation/native';
import {PrimaryButton} from 'components/atoms/buttons';
import AppHeader from 'components/atoms/headers/app-header';
import AllFeaturedCategoriesCard from 'components/molecules/all-featured-categories-card';
import CheckoutCard from 'components/molecules/checkout-card';
import OrderPlacedModal from 'components/molecules/modals/order-placed-modal';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';
import {getPaymentType} from 'services/api/auth-api-actions';
import {Alert} from 'react-native';
import {UTILS} from 'utils';
import {createOrder, selectPaymentType} from 'services/api/cart-api-actions';
import {setCart} from 'store/reducers/cart-reducer';
import {useDispatch} from 'react-redux';
import {useAppSelector} from 'hooks/use-store';
import {Loader} from 'components/atoms/loader';
import {navigate} from 'navigation/navigation-ref';
const CheckOut = props => {
  const colors = useTheme().colors;
  const dispatch = useDispatch();
  const {product} = useAppSelector(s => s);
  const {top_selling_products} = product;
  const [type, setType] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchType = async () => {
    try {
      setLoading(true);
      const res = await getPaymentType();
      setType(res);
    } catch (error) {
      console.log('Error in getPaymentType====>', error);
      Alert.alert('Payment Type Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  const CreateOrder = async () => {
    try {
      setLoading(true);
      const res = await createOrder();
      setDone(true);
      dispatch(setCart([]));
    } catch (error) {
      console.log('Error in getPaymentType====>', error);
      Alert.alert('Payment Type Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchType();
  }, []);

  const GetPaymentType = async item => {
    const values = {
      payment_type: item?.payment_type,
    };
    try {
      const res = await selectPaymentType(values);
      // console.log('payment type check=========>', res);
    } catch (error) {
      console.log('Error in getPaymentType====>', error);
      Alert.alert('Payment Type Error', UTILS.returnError(error));
    }
  };
  const [done, setDone] = React.useState(false);
  const renderCheckout = ({item}) => (
    <CheckoutCard
      item={item}
      onPress={() => {
        GetPaymentType(item),
          setType(prevData =>
            prevData.map(data => ({
              ...data,
              selected: data.payment_type === item.payment_type,
            })),
          );
      }}
    />
  );

  const renderProducts = ({item}) => (
    <View style={{marginHorizontal: mvs(20)}}>
      <AllFeaturedCategoriesCard
        item={item}
        onPress={() => navigate('ProductDetials', {productId: item?.id})}
      />
    </View>
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('checkout')} />
      {loading ? (
        <Loader />
      ) : (
        <>
          <View style={{maxHeight: mvs(240)}}>
            <CustomFlatList
              showsVerticalScrollIndicator={false}
              data={type}
              renderItem={renderCheckout}
              contentContainerStyle={{
                paddingBottom: mvs(20),
                paddingHorizontal: mvs(20),
              }}
            />
          </View>
          <View style={{paddingHorizontal: mvs(20), marginTop: mvs(10)}}>
            <Regular label={t('products')} />
          </View>
          <View style={{maxHeight: mvs(340)}}>
            <CustomFlatList
              showsVerticalScrollIndicator={false}
              data={top_selling_products || []}
              renderItem={renderProducts}
              contentContainerStyle={{
                paddingBottom: mvs(20),
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: mvs(20),
              flex: 1,
              justifyContent: 'flex-end',
            }}>
            <PrimaryButton
              loading={loading}
              onPress={() => {
                CreateOrder();
              }}
              containerStyle={{marginBottom: mvs(20)}}
              title={t('place_my_order')}
            />
          </View>
        </>
      )}

      <OrderPlacedModal onClose={() => setDone(false)} visible={done} />
    </View>
  );
};
export default CheckOut;
