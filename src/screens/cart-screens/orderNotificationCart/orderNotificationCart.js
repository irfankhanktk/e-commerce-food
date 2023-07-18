import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './style';
import Header from 'components/carts/header';
import {CyclePic} from 'assets/svgs';
import OrderTrack from 'components/carts/orderTrack';
import DrawVerticalLine from 'components/carts/drawVerticalLine';
import PrimaryButton from 'components/carts/button';
import {mvs} from 'config/metrices';

const OrderNotificationCart = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Header
        bgColor="#20D994"
        leftIcon="ArrowWhite"
        midLabel="Order Status"
        txtColor="white"
        midSecond="Invoice: 54321"
        onclickLeftIcon={() => navigation.navigate('CartCheckout')}
      />
      <ScrollView contentContainerStyle={styles.body}>
        <View style={{alignItems: 'center'}}>
          <CyclePic />
        </View>
        <OrderTrack icon={'Watch'} />
        <DrawVerticalLine />
        <OrderTrack icon={'OnWay'} />
        <DrawVerticalLine />
        <OrderTrack icon={'DeliveryExpected'} />
      </ScrollView>
      <View style={{paddingHorizontal: mvs(20)}}>
        <PrimaryButton
          label="Track your order"
          color={'white'}
          height={mvs(60)}
          style={styles.btn}
          onclick={() => navigation.navigate('OrderStatus')}
        />
      </View>
    </View>
  );
};
export default OrderNotificationCart;
