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

import {ClanderTwo, DeliveryTwo} from 'assets/icons';
import Entypo from 'react-native-vector-icons/Entypo';

const OrderHistory = props => {
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

  const featuredProduct = ({item}) => (
    <OrderHistoryCard item={item} onPress={() => navigate('ProductDetials')} />
  );

  return (
    <View style={styles.container}>
      <AppHeader back title={t('order_history')} />
      <Row style={{paddingHorizontal: mvs(20)}}>
        <Row style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => toggleOptions()}
            style={[styles.selectButton]}>
            <Row
              style={{
                paddingHorizontal: mvs(5),
              }}>
              <Regular fontSize={mvs(12)} label={selectByPayment} />
              <Entypo
                name={'chevron-small-right'}
                size={20}
                color={colors.primary}
                style={{transform: [{rotate: select ? '0deg' : '90deg'}]}}
              />
            </Row>
          </TouchableOpacity>
          <View style={{marginLeft: mvs(10)}}>
            <ClanderTwo />
          </View>

          {!select ? (
            <View style={styles.dotContainer}>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('All');
                  setSelect(!select);
                }}>
                <Regular color={colors.darkBlack} label={t('all')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('Paid');
                  setSelect(!select);
                }}>
                <Regular
                  style={{color: colors.darkBlack, marginTop: mvs(10)}}
                  label={t('paid')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByPayment('Unpaid');
                  setSelect(!select);
                }}>
                <Regular
                  style={{color: colors.darkBlack, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('unpaid')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </Row>

        <Row style={styles.innerContainer}>
          <View style={{marginRight: mvs(10)}}>
            <DeliveryTwo />
          </View>
          <TouchableOpacity
            onPress={() => deliveryOptions()}
            style={styles.selectButton}>
            <Row
              style={{
                paddingHorizontal: mvs(5),
              }}>
              <Regular fontSize={mvs(12)} label={selectByDelivery} />
              <Entypo
                name={'chevron-small-right'}
                size={20}
                color={colors.primary}
                style={{
                  transform: [{rotate: deliverySelect ? '0deg' : '90deg'}],
                }}
              />
            </Row>
          </TouchableOpacity>
          {!deliverySelect ? (
            <View style={styles.deliverdContainer}>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('All');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular color={colors.darkBlack} label={t('all')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('Confirmed');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular
                  style={{color: colors.darkBlack, marginTop: mvs(10)}}
                  label={t('confirmed')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('On Delivery');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular
                  style={{color: colors.darkBlack, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('on_delivery')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectByDelivery('Delivered');
                  setDeliverySelect(!deliverySelect);
                }}>
                <Regular
                  style={{color: colors.darkBlack, marginTop: mvs(10)}}
                  fontSize={mvs(12)}
                  label={t('delivered')}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </Row>
      </Row>
      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />
    </View>
  );
};
export default OrderHistory;
