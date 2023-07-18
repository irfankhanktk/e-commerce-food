import CustomMap from 'components/atoms/custom-map';
import MapDirections from 'components/atoms/custom-map-direction';
import OrderHeader from 'components/atoms/headers/order-header';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {Marker} from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import styles from './styles';
import Regular from 'typography/regular-text';
import Medium from 'typography/medium-text';
import Light from 'typography/light-text';
import {PrimaryButton} from 'components/atoms/buttons';
import {CarOne, CarTwo} from 'assets/images';

const DeliveryOrderScreen = props => {
  const {user, location} = useAppSelector(s => s?.user);
  const origin = {latitude: 37.78825, longitude: -122.4324};
  const destination = {latitude: 37.7749, longitude: -122.4194};
  const [visible, setVisible] = React.useState(false);
  const [steps, setSteps] = useState(0);
  const [selectedCar, setSelectedCar] = useState(0);
  console.log('selected car===>', selectedCar);
  const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [count, setCount] = useState(2);
  return (
    <View style={styles.container}>
      <OrderHeader title={'Free Ride'} />

      <View style={styles.body}>
        <CustomMap>
          <Marker
            // coordinate={{latitude: 37.78825, longitude: -122.4324}}
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
            title="Marker Title"
            description="Marker Description"
          />
          <MapDirections
            origin={origin}
            destination={destination}
            strokeWidth={3}
            strokeColor="blue"
          />
        </CustomMap>
      </View>

      {steps == 0 ? (
        <View style={styles.bottomContainer}>
          <View style={styles.innerContainer}>
            <Bold label={'Select Car'} style={styles.selectText} />
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1, paddingVertical: mvs(10)}}>
              {data?.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{paddingVertical: mvs(5)}}
                    onPress={() => setSelectedCar(item)}
                    key={index}>
                    <Row
                      style={[
                        styles.carItemContainer,
                        selectedCar &&
                          selectedCar.id === item.id &&
                          styles.selectedCarItem,
                      ]}>
                      <ImageBackground
                        source={CarTwo}
                        style={styles.carImage}></ImageBackground>
                      <View style={{marginLeft: mvs(10), flex: 1}}>
                        <Bold label={'Audi A5'} />
                        <Light
                          numberOfLines={1}
                          label={'Ride location xyz'}
                          fontSize={mvs(12)}
                        />
                      </View>
                    </Row>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <PrimaryButton
            title="Select Car"
            onPress={() => setSteps(steps + 1)}
          />
        </View>
      ) : steps == 1 ? (
        // Delivery order screen 1  bottom container }
        <View style={styles.orderBottomContainer}>
          <Row style={styles.bottomOrderInnerContainer}>
            <View style={{flex: 1, paddingRight: mvs(10)}}>
              <View style={{height: 90}}>
                <Bold
                  numberOfLines={3}
                  label={'To 89 palmspring Way , Rosevilla, CA 38949   '}
                  color={colors.primary}
                />
              </View>
              <Row style={{paddingVertical: 20}}>
                <View style={{flex: 1}}>
                  <Regular label={'Time'} color={colors.gray2} />
                  <Bold
                    numberOfLines={1}
                    label={'25 min'}
                    color={colors.primary}
                  />
                </View>
                <View style={{flex: 1}}>
                  <Regular label={'Distance'} color={colors.gray2} />
                  <Bold
                    numberOfLines={1}
                    label={'7 KM'}
                    color={colors.primary}
                  />
                </View>
                <View style={{flex: 1}}>
                  <Regular label={'Method'} color={colors.gray2} />
                  <Bold
                    numberOfLines={1}
                    label={'Car'}
                    color={colors.primary}
                  />
                </View>
              </Row>
            </View>
            <TouchableOpacity
              onPress={() => setSteps(steps + 1)}
              style={styles.nextOrderBtn}>
              <AntDesign name="arrowright" size={25} color={colors.primary} />
            </TouchableOpacity>
          </Row>
        </View>
      ) : (
        // Delivery /  Order Screen-2 bottom container
        <View style={styles.deliveryBottomContainer}>
          <Row style={styles.innerDeliveryContainer}>
            <View style={{flex: 1, paddingRight: mvs(10)}}>
              <Medium numberOfLines={1} label={'To 89 palmspring Way  '} />
              <Light
                numberOfLines={2}
                label={'4.1 Km via Washington blvd Arrival time: 8: 50 AM  '}
              />
            </View>
            <TouchableOpacity style={styles.nextDeliveryBtn}>
              <AntDesign name="arrowright" size={25} color={colors.primary} />
            </TouchableOpacity>
          </Row>
        </View>
      )}
    </View>
  );
};
export default DeliveryOrderScreen;
