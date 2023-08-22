import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import OrderHistoryCard from 'components/molecules/order-history-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {
  ClanderTwo,
  Currency,
  DeliveryThree,
  DeliveryTwo,
  Language,
  Like,
  Location,
  ShoppingBag,
  Tick,
  UserEdit,
} from 'assets/icons';
import Entypo from 'react-native-vector-icons/Entypo';

const OrderDetails = props => {
  const [select, setSelect] = React.useState(true);
  const [selectByPayment, setSelectByPayment] = React.useState('All');
  const [selectByDelivery, setSelectByDelivery] = React.useState('All');
  const [deliverySelect, setDeliverySelect] = React.useState(true);
  const toggleOptions = () => {
    setSelect(!select);
  };
  const deliveryOptions = () => {
    setDeliverySelect(!deliverySelect);
  };

  return (
    <View style={styles.container}>
      <AppHeader back title={t('order_details')} />
      <Row style={{marginTop: mvs(25), paddingHorizontal: mvs(20)}}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.itemsContainer}>
            <ShoppingBag />
          </View>
          <Regular label={t('order_placed')} fontSize={mvs(10)} />
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.itemsContainer}>
            <Like />
          </View>
          <Regular label={t('confirmed')} fontSize={mvs(10)} />
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.itemsContainer}>
            <DeliveryThree />
          </View>
          <Regular label={t('on_delivery')} fontSize={mvs(10)} />
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.itemsContainer}>
            <Tick />
          </View>
          <Regular label={t('delivered')} fontSize={mvs(10)} />
        </View>
      </Row>
      <View style={{paddingHorizontal: mvs(40), marginTop: mvs(20)}}>
        <View style={styles.line} />
        <Row>
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
          <View style={styles.circle} />
        </Row>
      </View>
    </View>
  );
};
export default OrderDetails;
