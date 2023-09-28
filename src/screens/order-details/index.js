import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

import {useTheme} from '@react-navigation/native';
import {
  DeliveryThree,
  Like,
  LocationMarker,
  RefundTwo,
  ShoppingBag,
  Tick,
  TickTwo,
} from 'assets/icons';
import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import CustomMap from 'components/atoms/custom-map';
import MapDirections from 'components/atoms/custom-map-direction';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {Loader} from 'components/atoms/loader';
import OrderConfirmationModal from 'components/molecules/modals/order-conformation-modal';
import {navigate} from 'navigation/navigation-ref';
import {Alert, ImageBackground} from 'react-native';
import {Marker} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getDistance, ratingDeliveryBoy} from 'services/api/auth-api-actions';
import {orderDetails} from 'services/api/cart-api-actions';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import {UTILS} from 'utils';
import RatingModal from './../../components/molecules/modals/rating-modal';
const OrderDetails = props => {
  const colors = useTheme().colors;
  const [path, setPath] = React.useState([]);
  const [values, setValues] = React.useState({rating: '', comment: ''});
  // console.log('value me check===', values);

  const {status, order} = props?.route?.params || {};
  const data = order;
  const order_id = data?.id;
  const [orderConformationModal, setOrderConfirmationModal] =
    React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState({});
  const [totalDistance, setTotalDistance] = React.useState('');
  const [ratingModal, setRatingModal] = React.useState(false);
  const [ratingLoading, setRatingLoading] = React.useState(false);

  // const deliveryOrigin = {
  //   latitude: item?.DeliveryBoyPath[1]?.lat || 37.78825,
  //   longitude: item?.DeliveryBoyPath[1]?.lng || -122.4324,
  // };
  // console.log('delivery boy rating===>', item);
  const origin = {
    latitude: item?.warehouse?.latitude * 1 || 37.78825,
    longitude: item?.warehouse?.longitude * 1 || -122.4324,
  };
  const destination = {
    latitude: item?.customerLatLng?.latitude * 1 || 37.78825,
    longitude: item?.customerLatLng?.longitude * 1 || -122.4324,
  };
  const fetchData = async setLoading => {
    try {
      setLoading(true);
      const res = await orderDetails(data?.id);
      setItem(res);

      const pathTrack = res?.DeliveryBoyPath?.map(x => ({
        latitude: x?.lat * 1,
        longitude: x?.lng * 1,
      }));

      setPath(pathTrack || []);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    if (item) getTimeDistance();
  }, [item]);
  const getTimeDistance = async () => {
    try {
      const res = await getDistance(
        origin?.latitude,
        destination?.latitude,
        origin?.longitude,
        destination?.longitude,
      );
      setTotalDistance(res);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('get Directioin Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData(setLoading);
    const intervalId = setInterval(() => {
      fetchData(() => {});
    }, 25000); // 25 seconds in milliseconds
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const onPressRating = async () => {
    try {
      setRatingLoading(true);
      await ratingDeliveryBoy({
        ...values,
        order_id: order_id,
        delivery_boy: item?.deliveryBoy?.id,
      });

      setRatingModal(false);
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setRatingLoading(false);
    }
  };

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('order_details')} />
      {loading ? (
        <Loader />
      ) : (
        <KeyboardAvoidScrollview
          contentContainerStyle={{paddingBottom: mvs(20)}}>
          <Row style={{marginTop: mvs(25)}}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  ...styles.itemsContainer,
                  backgroundColor: colors.skyBlue,
                }}>
                <ShoppingBag />
              </View>
              <Regular
                color={colors.text}
                label={t('order_placed')}
                fontSize={mvs(10)}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  ...styles.itemsContainer,
                  backgroundColor: colors.skyBlue,
                }}>
                <Like />
              </View>
              <Regular
                color={colors.text}
                label={t('confirmed')}
                fontSize={mvs(10)}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  ...styles.itemsContainer,
                  backgroundColor: colors.skyBlue,
                }}>
                <Like />
              </View>
              <Regular
                color={colors.text}
                label={t('pickup')}
                fontSize={mvs(10)}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  ...styles.itemsContainer,
                  backgroundColor: colors.skyBlue,
                }}>
                <DeliveryThree />
              </View>
              <Regular
                color={colors.text}
                label={t('on_delivery')}
                fontSize={mvs(10)}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  ...styles.itemsContainer,
                  backgroundColor: colors.skyBlue,
                }}>
                <Tick />
              </View>
              <Regular
                color={colors.text}
                label={t('delivered')}
                fontSize={mvs(10)}
              />
            </View>
          </Row>
          <View style={{paddingHorizontal: mvs(20), marginTop: mvs(20)}}>
            <View style={styles.line} />
            <Row>
              <View
                style={[
                  styles.circle,
                  {
                    borderRadius: 9,
                    backgroundColor:
                      status >= 0 ? colors.green : colors.halfGray,
                  },
                ]}>
                {status >= 0 && <TickTwo />}
              </View>
              <View
                style={[
                  styles.circle,
                  {
                    borderRadius: 9,
                    backgroundColor:
                      status >= 1 ? colors.green : colors.halfGray,
                  },
                ]}>
                {status >= 1 && <TickTwo />}
              </View>
              <View
                style={[
                  styles.circle,
                  {
                    borderRadius: 9,
                    backgroundColor:
                      status >= 2 ? colors.green : colors.halfGray,
                  },
                ]}>
                {status >= 2 && <TickTwo />}
              </View>
              <View
                style={[
                  styles.circle,
                  {
                    borderRadius: 9,
                    backgroundColor:
                      status >= 3 ? colors.green : colors.halfGray,
                  },
                ]}>
                {status >= 3 && <TickTwo />}
              </View>
              <View
                style={[
                  styles.circle,
                  {
                    borderRadius: 9,
                    backgroundColor:
                      status >= 4 ? colors.green : colors.halfGray,
                  },
                ]}>
                {status >= 4 && <TickTwo />}
              </View>
            </Row>
          </View>
          <View
            style={{
              ...styles.innerContainer,
              backgroundColor: colors.downColor,
            }}>
            <Row>
              <View style={{width: '45%'}}>
                <Regular
                  color={colors.text}
                  style={styles.title}
                  label={t('order_code')}
                />
                <Regular fontSize={mvs(12)} label={item?.order_details?.code} />
              </View>
              <View style={{width: '45%'}}>
                <Regular
                  color={colors.text}
                  style={styles.title}
                  label={t('shipping_method')}
                />
                <Regular
                  fontSize={mvs(12)}
                  label={item?.order_details?.shipping_type}
                />
              </View>
            </Row>
            <Row>
              <View style={{width: '45%'}}>
                <Regular
                  color={colors.text}
                  style={styles.title}
                  label={t('order_date')}
                />
                <Regular fontSize={mvs(12)} label={item?.date_developer} />
              </View>
              <View style={{width: '45%'}}>
                <Regular
                  color={colors.text}
                  style={styles.title}
                  label={t('payment_method')}
                />
                <Regular
                  fontSize={mvs(12)}
                  label={item?.order_details?.payment_type}
                />
              </View>
            </Row>
            <Row>
              <View style={{width: '45%'}}>
                <Regular
                  color={colors.text}
                  style={styles.title}
                  label={t('payment_status')}
                />
                <Row>
                  <Regular
                    fontSize={mvs(12)}
                    label={item?.order_details?.payment_status}
                  />
                  <View
                    style={[
                      styles.paidContainer,
                      {
                        backgroundColor:
                          data?.payment_status === 'Paid'
                            ? colors.green
                            : colors.red,
                      },
                    ]}>
                    <TickTwo />
                  </View>
                </Row>
              </View>
              <View style={{width: '45%'}}>
                <Regular
                  color={colors.text}
                  style={styles.title}
                  label={t('delivery_status')}
                />
                <Regular
                  fontSize={mvs(12)}
                  label={item?.order_details?.delivery_status}
                />
              </View>
            </Row>
            <Row>
              <View style={{width: '45%'}}>
                <Regular
                  color={colors.text}
                  style={styles.title}
                  label={t('shipping_address')}
                />
                <Row style={{justifyContent: 'flex-start'}}>
                  <Regular fontSize={mvs(12)} label={t('name')} />
                  <Regular
                    color={colors.text}
                    style={styles.addressTitle}
                    fontSize={mvs(12)}
                    label={item?.shipping_adress_developer?.name}
                  />
                </Row>
                <Row style={{justifyContent: 'flex-start'}}>
                  <Regular fontSize={mvs(12)} label={t('email')} />
                  <Regular
                    color={colors.text}
                    style={styles.addressTitle}
                    fontSize={mvs(12)}
                    label={item?.shipping_adress_developer?.email}
                  />
                </Row>
                <Row style={{justifyContent: 'flex-start'}}>
                  <Regular fontSize={mvs(12)} label={t('address')} />
                  <Regular
                    color={colors.text}
                    style={styles.addressTitle}
                    fontSize={mvs(12)}
                    label={item?.shipping_adress_developer?.address}
                  />
                </Row>
                <Row style={{justifyContent: 'flex-start'}}>
                  <Regular fontSize={mvs(12)} label={t('country')} />
                  <Regular
                    color={colors.text}
                    style={styles.addressTitle}
                    fontSize={mvs(12)}
                    label={item?.shipping_adress_developer?.country}
                  />
                </Row>
                <Row style={{justifyContent: 'flex-start'}}>
                  <Regular fontSize={mvs(12)} label={t('phone')} />
                  <Regular
                    color={colors.text}
                    style={styles.addressTitle}
                    fontSize={mvs(12)}
                    label={item?.shipping_adress_developer?.phone}
                  />
                </Row>
                <Row style={{justifyContent: 'flex-start'}}>
                  <Regular fontSize={mvs(12)} label={t('postal_code')} />
                  <Regular
                    color={colors.text}
                    style={styles.addressTitle}
                    fontSize={mvs(12)}
                    label={item?.shipping_adress_developer?.postal_code}
                  />
                </Row>
              </View>
              <View style={{width: '45%'}}>
                <Regular
                  color={colors.text}
                  style={styles.title}
                  label={t('total_amount')}
                />
                <Regular
                  fontSize={mvs(12)}
                  label={`$ ${item?.order_details?.grand_total}`}
                />
                {status === '4' && (
                  <PrimaryButton
                    disabled={!!item?.deliveryBoyRating?.id}
                    onPress={() => {
                      setRatingModal(true);
                    }}
                    containerStyle={{
                      height: mvs(40),
                      borderRadius: mvs(5),
                      marginTop: mvs(45),
                    }}
                    title={t('rate_delivery_boy')}
                  />
                )}
              </View>
            </Row>
          </View>
          {status === '4' || status === '3' ? (
            <>
              <View style={styles.mapContainer}>
                <CustomMap>
                  <MapDirections
                    waypoints={path}
                    origin={origin}
                    destination={destination}
                  />

                  <Marker coordinate={origin} />
                  <Marker coordinate={destination}>
                    <ImageBackground
                      source={{
                        uri: 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
                      }}
                      borderRadius={mvs(100)}
                      style={{width: mvs(25), height: mvs(25)}}>
                      <Image
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: mvs(100),
                        }}
                        source={{uri: data?.customerDetails?.avatar_original}}
                      />
                    </ImageBackground>
                  </Marker>
                </CustomMap>
              </View>

              {status === '3' && (
                <>
                  <View style={styles.profileContainer}>
                    <Row style={{alignItems: 'center'}}>
                      <Row>
                        <ImageBackground
                          source={{
                            uri: item?.deliveryBoy?.avatar_original,
                          }}
                          borderRadius={mvs(100)}
                          style={styles.imageBackGround}></ImageBackground>
                        <View style={{marginLeft: mvs(10)}}>
                          <Regular
                            color={colors.darkBlack}
                            fontSize={mvs(12)}
                            label={item?.deliveryBoy?.name}
                          />
                          <Regular
                            color={colors.darkBlack}
                            fontSize={mvs(10)}
                            label={'( Delivery boy )'}
                          />
                          {/* <Stars size={10} />  */}
                        </View>
                      </Row>
                      <Row>
                        <IconButton
                          onPress={() =>
                            UTILS.dialPhone(item?.deliveryBoy?.phone || '')
                          }
                          Icon={
                            <Ionicons
                              name={'call-outline'}
                              size={13}
                              color={colors.white}
                              style={{marginRight: mvs(5)}}
                            />
                          }
                          textStyle={{fontSize: mvs(14)}}
                          containerStyle={styles.chatBtn}
                          title={t('call')}
                        />
                      </Row>
                    </Row>
                    <Row>
                      <View style={{flex: 1}}>
                        <Regular
                          label={t('phone')}
                          fontSize={mvs(12)}
                          color={colors.darkBlack}
                        />
                        <Regular
                          label={item?.deliveryBoy?.phone}
                          fontSize={mvs(12)}
                          color={colors.darkBlack}
                        />
                      </View>
                      {/* <View style={{flex: 1}}>
                        <Regular
                          label={t('email')}
                          fontSize={mvs(12)}
                          color={colors.darkBlack}
                        />
                        <Regular
                          label={item?.deliveryBoy?.email}
                          fontSize={mvs(12)}
                          color={colors.darkBlack}
                        />
                      </View> */}
                      <View style={{flex: 1}}>
                        <Regular
                          label={t('vehicle')}
                          fontSize={mvs(12)}
                          color={colors.darkBlack}
                        />
                        <Regular
                          label={item?.deliveryBoy?.vehicle_no}
                          fontSize={mvs(12)}
                          color={colors.darkBlack}
                        />
                      </View>
                      <View style={{flex: 1}}>
                        <Regular
                          label={t('reg_no')}
                          fontSize={mvs(12)}
                          color={colors.darkBlack}
                        />
                        <Regular
                          label={item?.deliveryBoy?.registration_no}
                          fontSize={mvs(12)}
                          color={colors.darkBlack}
                        />
                      </View>
                    </Row>
                  </View>
                  <View style={styles.trackContainer}>
                    <View style={styles.trackingTextContainer}>
                      <Regular color={colors.white} label={t('tracking')} />
                      <View style={styles.line} />
                    </View>
                    <View style={{padding: mvs(20)}}>
                      <View style={styles.distanceContainer}>
                        <Medium color={colors.white} label={t('distance')} />
                        <Bold
                          color={colors.white}
                          fontSize={mvs(18)}
                          label={`${totalDistance?.km} km`}
                        />
                      </View>
                    </View>
                    <View style={{paddingHorizontal: mvs(20)}}>
                      <Regular label={t('time_line')} />
                      <Row
                        style={{
                          justifyContent: 'flex-start',
                        }}>
                        <View>
                          <LocationMarker />
                        </View>
                        <View
                          style={{
                            paddingHorizontal: mvs(10),
                            paddingVertical: mvs(5),
                          }}>
                          <Regular label={t('on_the_way')} />
                          <Regular
                            style={{marginTop: mvs(85)}}
                            label={t('location')}
                          />
                        </View>
                        <View
                          style={{
                            paddingHorizontal: mvs(10),
                            paddingVertical: mvs(5),
                            flex: 1,
                          }}>
                          <View
                            style={{height: mvs(45), backgroundColor: 'red'}}>
                            <Regular
                              numberOfLines={2}
                              label={item?.shipping_adress_developer?.address}
                            />
                          </View>
                          <Regular label={t('distance')} />
                          <Row style={{justifyContent: 'flex-start'}}>
                            <Regular label={`${totalDistance?.km} km`} />
                            <Regular
                              style={{paddingHorizontal: mvs(20)}}
                              label={totalDistance?.time}
                            />
                          </Row>

                          <Regular
                            style={{marginTop: mvs(15)}}
                            label={item?.customerDetails?.address}
                          />
                        </View>
                      </Row>
                    </View>
                  </View>
                </>
              )}
            </>
          ) : (
            <>
              <Medium
                color={colors.text}
                style={{paddingVertical: mvs(10)}}
                label={t('ordered_product')}
              />
              <Row style={styles.orderContainer}>
                <View style={styles.idContainer} />
                <View
                  style={{
                    ...styles.orderInnerContainer,
                    backgroundColor: colors.downColor,
                  }}>
                  <Row>
                    <Regular
                      color={colors.text}
                      fontSize={mvs(12)}
                      label={item?.order_details?.order_customer?.product?.name}
                    />
                    <Regular fontSize={mvs(12)} label={'$120.000'} />
                  </Row>
                  <Row style={{marginTop: mvs(5)}}>
                    <Regular
                      color={colors.text}
                      fontSize={mvs(12)}
                      label={'2 x item'}
                    />
                    <TouchableOpacity>
                      <Row>
                        <Regular
                          fontSize={mvs(12)}
                          label={t('ask_for_refund')}
                        />
                        <RefundTwo />
                      </Row>
                    </TouchableOpacity>
                  </Row>
                </View>
              </Row>
              <View
                style={{
                  ...styles.innerContainer,
                  backgroundColor: colors.downColor,
                }}>
                <Row>
                  <Regular
                    color={colors.text}
                    fontSize={mvs(12)}
                    label={t('sub_total')}
                  />
                  <Regular fontSize={mvs(12)} label={'$12000.00'} />
                </Row>
                <Row>
                  <Regular
                    color={colors.text}
                    fontSize={mvs(12)}
                    label={t('tax')}
                  />
                  <Regular fontSize={mvs(12)} label={'$0.00'} />
                </Row>
                <Row>
                  <Regular
                    color={colors.text}
                    fontSize={mvs(12)}
                    label={t('shipping_cost')}
                  />
                  <Regular fontSize={mvs(12)} label={'$12.00'} />
                </Row>
                <Row>
                  <Regular
                    color={colors.text}
                    fontSize={mvs(12)}
                    label={t('discount')}
                  />
                  <Regular fontSize={mvs(12)} label={'$10.00'} />
                </Row>
                <View style={styles.innerLine} />
                <Row>
                  <Regular
                    color={colors.text}
                    fontSize={mvs(12)}
                    label={t('grand_total')}
                  />
                  <Regular fontSize={mvs(12)} label={'$1300.00'} />
                </Row>
              </View>
              <PrimaryButton
                onPress={() => {
                  status === '3'
                    ? navigate('Tracking')
                    : setOrderConfirmationModal(true);
                }}
                containerStyle={{marginTop: mvs(25)}}
                title={t(status === '3' ? 'tracking' : 'cancle_order')}
              />
            </>
          )}
        </KeyboardAvoidScrollview>
      )}

      <OrderConfirmationModal
        onClose={() => setOrderConfirmationModal(false)}
        visible={orderConformationModal}
      />

      <RatingModal
        onClose={() => setRatingModal(false)}
        visible={ratingModal}
        setValues={setValues}
        values={values}
        ratingLoading={ratingLoading}
        onSubmit={() => onPressRating()}
      />
    </View>
  );
};
export default OrderDetails;
