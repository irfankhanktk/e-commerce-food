import {useIsFocused, useTheme} from '@react-navigation/native';
import {PrimaryButton} from 'components/atoms/buttons';
import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import CartCard from 'components/molecules/cart-card';
import {mvs} from 'config/metrices';
import {useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import {getCartSummary} from 'services/api/cart-api-actions';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {EmptyList} from 'components/atoms/empty-list';

const CartTab = props => {
  const {t} = i18n;
  const colors = useTheme().colors;
  const {cart_list} = useAppSelector(x => x?.cart);
  const [cartSummary, setCartSummary] = React.useState({});
  const isFocus = useIsFocused();
  const rendererProduct = ({item}) => <CartCard item={item} />;
  React.useEffect(() => {
    (async () => {
      try {
        if (!isFocus) return;
        const res = await getCartSummary();
        setCartSummary(res || {});
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, [isFocus, cart_list]);
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('shopping_cart')} />
      {cart_list?.length > 0 && (
        <Row style={{paddingHorizontal: mvs(20)}}>
          <Medium color={colors.text} label={t('sub_tatal')} />
          <Medium color={colors.text} label={cartSummary?.sub_total} />
        </Row>
      )}

      <CustomFlatList
        showsVerticalScrollIndicator={false}
        // columnWrapperStyle={styles.columnWrapperStyle}
        emptyList={<EmptyList label={t('no_cart_item')} />}
        data={cart_list}
        renderItem={rendererProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
        }}
      />
      {cart_list?.length > 0 && (
        <View style={{paddingHorizontal: mvs(20), paddingBottom: mvs(10)}}>
          <View style={styles.bottomContainer}>
            <Row>
              <Regular color={colors.text} label={t('total_amount')} />
              <Regular color={colors.text} label={cartSummary?.grand_total} />
            </Row>
          </View>
          <PrimaryButton
            onPress={() => navigate('ShippingInfo')}
            containerStyle={{marginBottom: mvs(15)}}
            title={t('proceed_to_shipping')}
          />
        </View>
      )}
    </View>
  );
};
export default CartTab;
