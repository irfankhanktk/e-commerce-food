import {OrderStatusPic} from 'assets/svgs';
import Label from 'components/carts/Label';
import Bold from 'components/carts/bold';
import PrimaryButton from 'components/carts/button';
import Header from 'components/carts/header';
import StarRating from 'components/carts/starRating';
import TextArea from 'components/carts/textArea';
import {mvs} from 'config/metrices';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './style';

const OrderStatus = ({navigation}) => {
  const [rankingCount, setRankingCount] = useState(0);

  const handleCount = newRating => {
    setRankingCount(newRating);
  };
  return (
    <View style={styles.main}>
      <Header
        bgColor="#20D994"
        leftIcon="ArrowWhite"
        midLabel="Order Status"
        txtColor="white"
        midSecond="Invoice: 54321"
        onclickLeftIcon={() => navigation.navigate('OrderNotificationCart')}
      />
      <ScrollView style={styles.body}>
        <View style={{alignItems: 'center'}}>
          <OrderStatusPic />
          <Bold label={'Order received'} color={'black'} size={21} />
          <Label label="Order # 54228382" size={10} color="gray" />
        </View>
        <View style={styles.starsBox}>
          <Label label="Tell us your feedback" size={10} color="gray" />
          <Label
            label="Tell us how you feel about the restaurant’s food and service."
            size={14}
            style={{marginTop: mvs(10)}}
          />

          <StarRating
            initialRating={rankingCount}
            onRatingChange={handleCount}
          />
        </View>
        <View style={styles.lowerBox}>
          <Bold label="Write a review" color={'black'} />
          <TextArea style={styles.txtArea} />
        </View>
      </ScrollView>
      <View style={{paddingHorizontal: mvs(20)}}>
        <PrimaryButton
          label="Track your order"
          color={'white'}
          height={mvs(60)}
          style={styles.btn}
        />
      </View>
    </View>
  );
};
export default OrderStatus;
