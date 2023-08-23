import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {
  DeliveryThree,
  Like,
  Refund,
  RefundTwo,
  ShoppingBag,
  Tick,
  TickTwo,
} from 'assets/icons';
import Medium from 'typography/medium-text';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {PrimaryButton} from 'components/atoms/buttons';
import OrderConfirmationModal from 'components/molecules/modals/order-conformation-modal';

const OrderDetails = props => {
  const [orderConformationModal, setOrderConfirmationModal] =
    React.useState(false);

  return (
    <View style={styles.container}>
      <AppHeader back title={t('order_details')} />
      <KeyboardAvoidScrollview contentContainerStyle={{paddingBottom: mvs(20)}}>
        <Row style={{marginTop: mvs(25)}}>
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
        <View style={{paddingHorizontal: mvs(20), marginTop: mvs(20)}}>
          <View style={styles.line} />
          <Row>
            <View style={styles.circle}>
              <TickTwo />
            </View>
            <View style={styles.circle}>
              <TickTwo />
            </View>
            <View style={styles.circle}>
              <TickTwo />
            </View>
            <View style={styles.circle}>
              <TickTwo />
            </View>
          </Row>
        </View>

        <View style={styles.innerContainer}>
          <Row>
            <View style={{width: '45%'}}>
              <Regular style={styles.title} label={t('order_code')} />
              <Regular fontSize={mvs(12)} label={t('20210401-122325')} />
            </View>
            <View style={{width: '45%'}}>
              <Regular style={styles.title} label={t('shipping_method')} />
              <Regular fontSize={mvs(12)} label={'Home Delivery'} />
            </View>
          </Row>
          <Row>
            <View style={{width: '45%'}}>
              <Regular style={styles.title} label={t('order_date')} />
              <Regular fontSize={mvs(12)} label={t('04-08-2023')} />
            </View>
            <View style={{width: '45%'}}>
              <Regular style={styles.title} label={t('payment_method')} />
              <Regular fontSize={mvs(12)} label={'Cash On Delivery'} />
            </View>
          </Row>
          <Row>
            <View style={{width: '45%'}}>
              <Regular style={styles.title} label={t('payment_status')} />
              <Regular fontSize={mvs(12)} label={'Unpaid'} />
            </View>
            <View style={{width: '45%'}}>
              <Regular style={styles.title} label={t('delivery_status')} />
              <Regular fontSize={mvs(12)} label={'Order placed'} />
            </View>
          </Row>
          <Row>
            <View style={{width: '45%'}}>
              <Regular style={styles.title} label={t('shipping_address')} />
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('name')} />
                <Regular
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'kushal chavan'}
                />
              </Row>
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('email')} />
                <Regular
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'customer@example.com'}
                />
              </Row>
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('address')} />
                <Regular
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'your location'}
                />
              </Row>
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('country')} />
                <Regular
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'your country'}
                />
              </Row>
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('phone')} />
                <Regular
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'03448422399'}
                />
              </Row>
              <Row style={{justifyContent: 'flex-start'}}>
                <Regular fontSize={mvs(12)} label={t('postal_code')} />
                <Regular
                  style={styles.addressTitle}
                  fontSize={mvs(12)}
                  label={'31313'}
                />
              </Row>
            </View>
            <View style={{width: '45%'}}>
              <Regular style={styles.title} label={t('total_amount')} />
              <Regular fontSize={mvs(12)} label={'$130.00'} />
            </View>
          </Row>
        </View>
        <Medium
          style={{paddingVertical: mvs(10)}}
          label={t('ordered_product')}
        />
        <Row style={styles.orderContainer}>
          <View style={styles.idContainer} />
          <View style={styles.orderInnerContainer}>
            <Row>
              <Regular fontSize={mvs(12)} label={'Shipping Container'} />
              <Regular fontSize={mvs(12)} label={'$120.000'} />
            </Row>
            <Row style={{marginTop: mvs(5)}}>
              <Regular fontSize={mvs(12)} label={'2 x item'} />
              <TouchableOpacity>
                <Row>
                  <Regular fontSize={mvs(12)} label={t('ask_for_refund')} />
                  <RefundTwo />
                </Row>
              </TouchableOpacity>
            </Row>
          </View>
        </Row>
        <View style={styles.innerContainer}>
          <Row>
            <Regular fontSize={mvs(12)} label={t('sub_total')} />
            <Regular fontSize={mvs(12)} label={'$12000.00'} />
          </Row>
          <Row>
            <Regular fontSize={mvs(12)} label={t('tax')} />
            <Regular fontSize={mvs(12)} label={'$0.00'} />
          </Row>
          <Row>
            <Regular fontSize={mvs(12)} label={t('shipping_cost')} />
            <Regular fontSize={mvs(12)} label={'$12.00'} />
          </Row>
          <Row>
            <Regular fontSize={mvs(12)} label={t('discount')} />
            <Regular fontSize={mvs(12)} label={'$10.00'} />
          </Row>
          <View style={styles.innerLine} />
          <Row>
            <Regular fontSize={mvs(12)} label={t('grand_total')} />
            <Regular fontSize={mvs(12)} label={'$1300.00'} />
          </Row>
        </View>
        <PrimaryButton
          onPress={() => setOrderConfirmationModal(true)}
          containerStyle={{marginTop: mvs(25)}}
          title={t('cancle_order')}
        />
      </KeyboardAvoidScrollview>

      <OrderConfirmationModal
        onClose={() => setOrderConfirmationModal(false)}
        visible={orderConformationModal}
      />
    </View>
  );
};
export default OrderDetails;
