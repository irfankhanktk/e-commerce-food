import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import Header from 'components/carts/header';
import Label from 'components/carts/Label';
import {Row} from 'components/atoms/row';
import OrderPreview from 'components/carts/orderPreview';
import Bold from 'components/carts/bold';
import {ForwardSign, Line, Location} from 'assets/svgs';
import {mvs} from 'config/metrices';
import PrimaryButton from '../../../components/carts/button';
import DrawHorizentalLine from 'components/carts/drawHorizentalLine';
import {goBack} from 'navigation/navigation-ref';
import {useAppSelector} from 'hooks/use-store';

const CartPreview = ({navigation}) => {
  const {cart} = useAppSelector(s => s);
  const total = cart?.cart?.reduce(
    (res, item) => (res += item?.qty * (item?.discountedPrice || item?.price)),
    0,
  );
  return (
    <ScrollView style={styles.main}>
      <Header
        bgColor="#F9F9F9"
        leftIcon="BackArrow"
        onclickLeftIcon={() => goBack()}
      />
      <View style={styles.body}>
        <Bold label="Order Preview" size={20} color="#20D994" />
        {cart?.cart?.map((item, index) => (
          <OrderPreview
            item={item}
            key={index}
            description={item?.name}
            pieces={`${item?.qty} pcs`}
            price={`${item?.qty * (item?.discountedPrice || item?.price)}`}
          />
        ))}

        <DrawHorizentalLine />
        <Row>
          <Label label="Shipping fee" />
          <Label label="Rs 0" />
        </Row>

        <Row style={{marginVertical: mvs(10)}}>
          <Bold label="Total Payment" color={'black'} />
          <Bold label={`Rs ${total}`} color={'black'} />
        </Row>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('CartProceed')}>
          <Location />
          <Label
            size={14}
            label="Please add your shipping address"
            color="white"
          />
          <ForwardSign />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default CartPreview;
