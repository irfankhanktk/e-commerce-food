import CustomFlatList from 'components/atoms/custom-flatlist';

import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import AppHeader from 'components/atoms/headers/app-header';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Medium from 'typography/medium-text';
import ShippingCostCard from 'components/molecules/shipping-cost-card';
import Regular from 'typography/regular-text';
import {Row} from 'components/atoms/row';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from 'config/colors';
const ShippingCost = props => {
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
  const [select, setSelect] = React.useState(true);
  const featuredProduct = ({item}) => <ShippingCostCard item={item} />;

  return (
    <View style={styles.container}>
      <AppHeader back title={t('shipping_cost  $18')} />
      <Medium
        label={t('inhouse_product')}
        style={{paddingHorizontal: mvs(20)}}
      />
      <View style={{maxHeight: mvs(400)}}>
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
        <Regular label={t('choose_delivery')} />
        <Row style={{marginTop: mvs(10)}}>
          <IconButton
            Icon={<Entypo name={'dot-single'} size={30} color={colors.white} />}
            title={t('carrier')}
            containerStyle={{width: '45%'}}
          />
          <IconButton
            Icon={<Entypo name={'dot-single'} size={30} color={colors.white} />}
            title={t('pickup_point')}
            containerStyle={{width: '45%'}}
          />
        </Row>
      </View>
      <View
        style={{
          paddingHorizontal: mvs(20),
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <PrimaryButton
          containerStyle={{marginBottom: mvs(20)}}
          title={t('continue_to_delivery_info')}
        />
      </View>
    </View>
  );
};
export default ShippingCost;
