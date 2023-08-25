import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';

import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import styles from './styles';
import CartCard from 'components/molecules/cart-card';
import Regular from 'typography/regular-text';
import {PrimaryButton} from 'components/atoms/buttons';

const CartTab = props => {
  const {t} = i18n;
  const featuredCategories = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
  ];

  const featuredProduct = ({item}) => <CartCard item={item} />;

  return (
    <View style={styles.container}>
      <AppHeader back title={t('shopping_cart')} />
      <Row style={{paddingHorizontal: mvs(20)}}>
        <Medium color={colors.darkBlack} label={'Inhouse'} />
        <Medium label={'$30.00'} />
      </Row>
      <CustomFlatList
        showsVerticalScrollIndicator={false}
        // columnWrapperStyle={styles.columnWrapperStyle}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
        }}
      />
      <View style={{paddingHorizontal: mvs(20)}}>
        <View style={styles.bottomContainer}>
          <Row>
            <Regular label={t('total_amount')} />
            <Regular label={'$12000'} />
          </Row>
        </View>
        <PrimaryButton
          onPress={() => navigate('ShippingInfo')}
          containerStyle={{marginBottom: mvs(15)}}
          title={t('proceed_to_shipping')}
        />
      </View>
    </View>
  );
};
export default CartTab;
