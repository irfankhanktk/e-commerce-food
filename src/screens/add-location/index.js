import CustomMap from 'components/atoms/custom-map';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React from 'react';
import {
  Alert,
  I18nManager,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import i18n from 'translation';
import Regular from 'typography/regular-text';
import styles from './styles';
import Medium from 'typography/medium-text';

// import {addUserAddress} from 'services/api/api-actions';
import {UTILS} from 'utils';
import PrimaryInput, {SearchInput} from 'components/atoms/inputs';
import {goBack} from 'navigation/navigation-ref';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {addAddress} from 'services/api/auth-api-actions';

const AddLocation = props => {
  const {route} = props;
  const {address} = route?.params || {};
  const {user} = useAppSelector(s => s?.user);
  const origin = {latitude: 37.78825, longitude: -122.4324};
  const destination = {latitude: 37.7749, longitude: -122.4194};
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    addressId: address?.id || '',
    postal_code: '',
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
  const addAddressPress = async () => {
    try {
      setLoading(true);
      const newAddress = {
        addressId: payload?.addressId || '',
        title: payload?.title,
        address: payload?.address,
        latitude: payload?.coordinate?.latitude,
        longitude: payload?.coordinate?.longitude,
        postal_code: payload?.postal_code,
        phone: payload?.note,
      };
      console.log('check nre address===>', newAddress);
      return;
      const res = await addAddress(newAddress);
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
      <View style={{}}>
        <Row
          style={{
            position: 'absolute',
            zIndex: 1,
            alignItems: 'center',
            marginTop: mvs(30),
            justifyContent: 'flex-start',
            paddingHorizontal: mvs(20),
          }}>
          <TouchableOpacity onPress={() => goBack()}>
            <FontAwesome5
              name={I18nManager.isRTL ? 'arrow-right' : 'arrow-left'}
              size={mvs(20)}
              color={colors.primary}
            />
          </TouchableOpacity>

          <SearchInput containerStyle={{width: '86%', marginLeft: mvs(20)}} />
        </Row>
      </View>

      <CustomMap
        onPress={res => {
          setPayload({
            address: res?.fulladdress,
            title: res?.city,
            coordinate: res?.coordinate,
          });
        }}></CustomMap>
      <View style={styles.bottomContainer}>
        <ScrollView style={styles.scrollViewContainer}>
          <PrimaryInput
            isIcon={false}
            placeholder="Enter Postal Code"
            value={payload?.postal_code}
            onChangeText={t => setPayload({...payload, postal_code: t})}
            labelStyle={{color: colors.placeholder}}
            style={{color: colors.black}}
            containerStyle={styles.inputContainerStyle}
          />

          <View style={styles.addressContainer}>
            <Regular color={colors.black} label={'Address'} />
            <Row style={{justifyContent: 'flex-start'}}>
              <View style={{marginLeft: mvs(10), flex: 1}}>
                <Medium fontSize={mvs(12)} label={payload?.title} />
                <Regular fontSize={mvs(10)} label={payload?.address} />
              </View>
            </Row>
          </View>

          <PrimaryInput
            isIcon={false}
            placeholder={t('phone')}
            labelStyle={{color: colors.placeholder}}
            containerStyle={styles.inputContainerStyle}
            style={{color: colors.black}}
            value={payload?.note}
            onChangeText={t => setPayload({...payload, note: t})}
          />
          <PrimaryButton
            onPress={addAddressPress}
            loading={loading}
            containerStyle={styles.addAddressBtn}
            title={`${payload?.addressId ? 'Update' : 'Add'} address`}
          />
        </ScrollView>
      </View>
    </View>
  );
};
export default AddLocation;
