import CustomMap from 'components/atoms/custom-map';
import MapDirections from 'components/atoms/custom-map-direction';
import HomeHeader from 'components/atoms/headers/home-header';
import BookingDriverModal from 'components/molecules/modals/booking-driver-modal';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React, {useState} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {Marker} from 'react-native-maps';
import i18n from 'translation';
import styles from './styles';
import {PrimaryInput} from 'components/atoms/inputs';
import {colors} from 'config/colors';
import {PrimaryButton} from 'components/atoms/buttons';
import Regular from 'typography/regular-text';
import {Row} from 'components/atoms/row';
import {LocationPin} from 'assets/icons';
import Medium from 'typography/medium-text';
import Light from 'typography/light-text';
import {addUserAddress} from 'services/api/api-actions';
import {UTILS} from 'utils';

const AddNewAddress = props => {
  const {route} = props;
  const {address} = route?.params || {};
  const {user, location} = useAppSelector(s => s?.user);
  const origin = {latitude: 37.78825, longitude: -122.4324};
  const destination = {latitude: 37.7749, longitude: -122.4194};
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    addressId: address?.id || '',
    name: '',
    title: '',
    address: '',
    description: '',
    note: '',
    ...address,
  });
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const addAddress = async () => {
    try {
      setLoading(true);
      const newAddress = {
        addressId: payload?.addressId || '',
        title: payload?.title,
        address: payload?.address,
        latitude: payload?.coordinate?.latitude,
        longitude: payload?.coordinate?.longitude,
      };
      const res = await addUserAddress(newAddress);
      console.log('res:::', res);
      setPayload({
        ...payload,
        addressId: payload?.addressId ? res?.data?.id : res?.data,
      });
      Alert.alert('Success', 'Save Successfully');
    } catch (error) {
      Alert.alert('Error', UTILS._returnAddress(error));
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <HomeHeader title={'Add new address'} />
      <View style={styles.body}>
        <CustomMap
          onPress={res => {
            setPayload({
              address: res?.fulladdress,
              title: res?.city,
              coordinate: res?.coordinate,
            });
          }}></CustomMap>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView style={styles.scrollViewContainer}>
          <PrimaryInput
            isIcon={false}
            label={'Name'}
            placeholder="Enter Name"
            value={payload?.name}
            onChangeText={t => setPayload({...payload, name: t})}
            labelStyle={{color: colors.placeholder}}
            style={{color: colors.black}}
            containerStyle={styles.inputContainerStyle}
          />

          <View style={styles.addressContainer}>
            <Regular color={colors.black} label={'Address'} />
            <Row style={{justifyContent: 'flex-start'}}>
              <LocationPin />
              <View style={{marginLeft: mvs(10), flex: 1}}>
                <Medium fontSize={mvs(12)} label={payload?.title} />
                <Light fontSize={mvs(10)} label={payload?.address} />
              </View>
            </Row>
          </View>
          <PrimaryInput
            value={payload?.description}
            isIcon={false}
            label={'Address details'}
            placeholder="Enter address details"
            labelStyle={{color: colors.placeholder}}
            containerStyle={styles.inputContainerStyle}
            style={{color: colors.black}}
            onChangeText={t => setPayload({...payload, description: t})}
          />
          <PrimaryInput
            isIcon={false}
            label={'Note for driver'}
            placeholder="Enter note for driver"
            labelStyle={{color: colors.placeholder}}
            containerStyle={styles.inputContainerStyle}
            style={{color: colors.black}}
            value={payload?.note}
            onChangeText={t => setPayload({...payload, note: t})}
          />
          <PrimaryButton
            onPress={addAddress}
            loading={loading}
            containerStyle={styles.addAddressBtn}
            title={`${payload?.addressId ? 'Update' : 'Add'} address`}
          />
        </ScrollView>
      </View>
      <BookingDriverModal visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
};
export default AddNewAddress;
