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
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {setSelectedAddress} from 'store/reducers/address-reducer';
import {makeDefaultAddress} from 'services/api/address-api-actions';

const ShippingInfo = props => {
  const colors = useTheme().colors;
  const dispatch = useAppDispatch();
  const {userAddress} = useAppSelector(s => s.address);
  const selected = useAppSelector(s => s);

  const [loading, setLoading] = React.useState(false);

  const featuredProduct = ({item}) => (
    <ShippingInfoCard
      item={item}
      loading={loading == item?.id}
      onPress={() => dispatch(makeDefaultAddress(item?.id, setLoading))}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('shipping_info')} />

      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={userAddress}
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
