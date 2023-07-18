import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';

import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import OrderSwiperCard from 'components/atoms/swiper/order-swiper';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {goBack, navigate} from 'navigation/navigation-ref';
import Light from 'typography/light-text';
import Bold from './../../typography/bold-text';
import Regular from 'typography/regular-text';
const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => goBack()} style={{paddingLeft: 20}}>
          <Icon name="arrowleft" size={25} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={{paddingHorizontal: mvs(20)}}>
        <OrderSwiperCard />
        <View style={styles.lineContainer}></View>
        <Row style={{alignItems: 'center'}}>
          <Row style={styles.nameMainContainer}>
            <View style={styles.imageContainer}></View>
            <View style={styles.nameContainer}>
              <Bold
                numberOfLines={1}
                label={'By Adriana Andrei'}
                fontSize={mvs(14)}
              />
              <Light
                style={{bottom: mvs(5)}}
                label={'Passionate che'}
                fontSize={mvs(12)}
              />
            </View>
          </Row>
          <PrimaryButton
            containerStyle={styles.seaFoodContainer}
            textStyle={styles.seaFoodText}
            title="Sea Food"
          />
        </Row>
        <Regular
          style={{marginTop: mvs(15)}}
          numberOfLines={2}
          fontSize={mvs(12)}
          label={
            'This restaurant serves the most tasty veggie soup and favour of himmal spices….'
          }
        />
        <Row style={{marginTop: mvs(30)}}>
          <Row style={{alignItems: 'center', flex: 1}}>
            <View>
              <Regular
                color={colors.darkBlack}
                label={'Price :'}
                fontSize={mvs(12)}
              />
              <Bold numberOfLines={1} label={'Rs 999'} />
            </View>
          </Row>
          <IconButton
            onPress={() => navigate('DeliveryOrderScreen')}
            containerStyle={{width: '70%', justifyContent: 'flex-start'}}
            textStyle={{left: mvs(25)}}
            icon="shopping-cart"
            title="Add to cart "
          />
        </Row>
      </View>
    </View>
  );
};
export default OrderScreen;
