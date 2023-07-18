import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Button} from 'react-native';
import styles from './style';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import Header from 'components/carts/header';
import Label from 'components/carts/Label';
import {Row} from 'components/atoms/row';
import OrderPreview from 'components/carts/orderPreview';
import Bold from 'components/carts/bold';
import {ForwardSign, Line, Location, PlusGreen} from 'assets/svgs';
import {mvs} from 'config/metrices';
import PrimaryButton from '../../../components/carts/button';
import DrawHorizentalLine from 'components/carts/drawHorizentalLine';
import Modal from 'react-native-modal';
import PaymentComponent from 'components/carts/paymentComponent';
import {goBack} from 'navigation/navigation-ref';

const CartProceed = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [select, setSelect] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const nextScreen = () => {
    setModalVisible(!isModalVisible);
    navigation.navigate('AddNewPayment');
  };
  return (
    <ScrollView style={styles.main}>
      <Header
        bgColor="#F9F9F9"
        rightIcon="LocationGreen"
        RightLabel="Alqaim town, isb"
        leftIcon="BackArrow"
        onclickLeftIcon={() => goBack()}
      />
      <View style={styles.body}>
        <Bold label="Order Preview" size={20} color="#20D994" />
        <OrderPreview
          description="Olive Oil-Fried Egg"
          pieces="3 pcs"
          price="300"
        />
        <OrderPreview
          description="Olive Oil-Fried Egg"
          pieces="3 pcs"
          price="300"
        />
        <OrderPreview
          description="Olive Oil-Fried Egg"
          pieces="3 pcs"
          price="300"
        />
        <DrawHorizentalLine />
        <Row>
          <Label label="Shipping fee" />
          <Label label="Rs 0" />
        </Row>

        <Row style={{marginVertical: mvs(10)}}>
          <Bold label="Total Payment" color={'black'} />
          <Bold label="Rs 900" color={'black'} />
        </Row>
        <PrimaryButton
          label="proceed"
          color={'white'}
          height={mvs(50)}
          onclick={toggleModal}
        />
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalView}>
          <PaymentComponent
            title="Master card"
            AccountNumber="xxxx xxxx xxxx 4321"
            leftIcon="MasterCardLogo"
            rightIcon="RadioUnSelected"
          />
          <PaymentComponent
            title="Cash"
            AccountNumber="xxxx xxxx xxxx 4321"
            leftIcon="Cash"
            rightIcon="RadioSelected"
          />

          <DrawHorizentalLine />

          <TouchableOpacity style={styles.btn} onPress={nextScreen}>
            <PlusGreen width={15} style={{marginRight: 20}} />
            <Label label="Add new payment" />
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};
export default CartProceed;
