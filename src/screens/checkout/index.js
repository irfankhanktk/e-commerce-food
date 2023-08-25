import CustomFlatList from 'components/atoms/custom-flatlist';

import {PrimaryButton} from 'components/atoms/buttons';
import AppHeader from 'components/atoms/headers/app-header';
import AllFeaturedCategoriesCard from 'components/molecules/all-featured-categories-card';
import CheckoutCard from 'components/molecules/checkout-card';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';
import OrderConfirmationModal from 'components/molecules/modals/order-conformation-modal';
import OrderPlacedModal from 'components/molecules/modals/order-placed-modal';
const CheckOut = props => {
  const [data, setData] = React.useState([
    {
      id: 1,
      selected: true,
      title: 'Cash on delivery',
    },
    {
      id: 2,
      selected: false,
      title: 'FEDEX',
      price: '$20.200',
    },
  ]);
  const [dataa, setDataa] = React.useState([
    {
      id: 1,
      selected: false,
    },
    {
      id: 2,
      selected: false,
    },
    {
      id: 3,
      selected: false,
    },
    {
      id: 4,
      selected: false,
    },
    {
      id: 5,
      selected: false,
    },
  ]);
  const [done, setDone] = React.useState(false);
  const featuredProduct = ({item}) => (
    <CheckoutCard
      item={item}
      onPress={() => {
        setData(prevData =>
          prevData.map(data => ({
            ...data,
            selected: data.id === item.id,
          })),
        );
      }}
    />
  );
  const renderProducts = ({item}) => <AllFeaturedCategoriesCard item={item} />;

  return (
    <View style={styles.container}>
      <AppHeader back title={t('checkout')} />

      <View style={{maxHeight: mvs(240)}}>
        <CustomFlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={featuredProduct}
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
          data={dataa}
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
          onPress={() => setDone(true)}
          containerStyle={{marginBottom: mvs(20)}}
          title={t('place_my_order')}
        />
      </View>
      <OrderPlacedModal onClose={() => setDone(false)} visible={done} />
    </View>
  );
};
export default CheckOut;
