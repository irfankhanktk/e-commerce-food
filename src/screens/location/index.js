import CustomMap from 'components/atoms/custom-map';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import i18n from 'translation';
import Regular from 'typography/regular-text';
import styles from './styles';
import Medium from 'typography/medium-text';

// import {addUserAddress} from 'services/api/api-actions';
import {UTILS} from 'utils';
import {PrimaryInput, SearchInput} from 'components/atoms/inputs';

const Location = props => {
  const {route} = props;
  const {address} = route?.params || {};
  const {user} = useAppSelector(s => s?.user);
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
      <SearchInput />
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
    </View>
  );
};
export default Location;
