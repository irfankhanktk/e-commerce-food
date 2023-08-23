import CustomFlatList from 'components/atoms/custom-flatlist';

import AppHeader from 'components/atoms/headers/app-header';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import ShippingInfoCard from 'components/molecules/shipping-info-card';
import {PrimaryButton} from 'components/atoms/buttons';

const ShippingInfo = props => {
  const [data, setData] = React.useState([
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
  const featuredProduct = ({item}) => (
    <ShippingInfoCard
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

  return (
    <View style={styles.container}>
      <AppHeader back title={t('shipping_info')} />

      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={featuredProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />
      <View style={{paddingHorizontal: mvs(20)}}>
        <PrimaryButton
          onPress={() => navigate('ShippingCost')}
          containerStyle={{marginBottom: mvs(20)}}
          title={t('continue_to_delivery_info')}
        />
      </View>
    </View>
  );
};
export default ShippingInfo;
