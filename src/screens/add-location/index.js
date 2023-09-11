import {PrimaryButton} from 'components/atoms/buttons';
import CustomMap from 'components/atoms/custom-map';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React from 'react';
import {
  Alert,
  I18nManager,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';

// import {addUserAddress} from 'services/api/api-actions';
import {useTheme} from '@react-navigation/native';
import PrimaryInput, {
  InputWithIcon,
  SearchInput,
} from 'components/atoms/inputs';
import {goBack} from 'navigation/navigation-ref';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  addAddress,
  getCities,
  getCountries,
  getStates,
} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';
import {setCountries} from 'store/reducers/user-reducer';
import {setStates} from 'store/reducers/user-reducer';
import {setCities} from 'store/reducers/user-reducer';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import GoogleSearchBar from 'components/atoms/google-search';
import {Formik} from 'formik';
import {addressFormValidation, signinFormValidation} from 'validations';

const AddLocation = props => {
  const {route} = props;
  const {address} = route?.params || {};
  const {userInfo, states, countries, cities} = useAppSelector(s => s?.user);
  const [loading, setLoading] = React.useState(false);
  const [stateCities, setStateCities] = React.useState([]);
  const [countryStates, setCountryStates] = React.useState([]);
  const payload = {
    address: '',
    postal_code: '',
    phone: '',
    latitude: '',
    longitude: '',
    country_id: '',
    state_id: '',
    city_id: '',
    ...address,
  };

  const dispatch = useAppDispatch();
  const {t} = i18n;
  const colors = useTheme().colors;
  React.useEffect(() => {
    dispatch(getCountries());
    dispatch(getCities());
    dispatch(getStates());
  }, []);
  React.useEffect(() => {}, []);

  const addAddressPress = async () => {
    try {
      setLoading(true);
      const newAddress = {
        user_id: userInfo?.id,
        address: payload?.address,
        country: 'Bangladesh',
        city: 'Comilla',
        postal_code: '64643213456',
        phone: '8765461215464',
      };
      console.log('check nre address===>', newAddress);
      const res = await addAddress(newAddress);
      console.log('res:::>>>>>', res);
      Alert.alert('Success', 'Save Successfully');
    } catch (error) {
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  const onSubmit = values => {};
  const selectedCity = stateCities?.find(x => x?.selected);
  const selectedState = countryStates?.find(x => x?.selected);
  const selectedCountry = countries?.find(x => x?.selected);

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
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
              color={colors.text}
            />
          </TouchableOpacity>

          <GoogleSearchBar
            countrySlug={selectedCountry?.code?.toLowerCase()}
            style={{width: '86%', marginLeft: mvs(20)}}
          />
        </Row>
      </View>
      <View style={{flex: 1}}>
        <KeyboardAvoidScrollview contentContainerStyle={{paddingHorizontal: 0}}>
          <Formik
            onSubmit={onSubmit}
            initialValues={payload}
            validationSchema={addressFormValidation}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setTouched,
              setFieldValue,
              values,
              touched,
              errors,
            }) => (
              <View
                style={{
                  // ...styles.bottomContainer,
                  backgroundColor: colors.downColor,
                }}>
                <CustomMap
                  style={{height: mvs(300)}}
                  onPress={res => {
                    console.log('res>>>>', res);
                    // setFieldValue('address', res?.fulladdress);
                    setFieldValue('latitude', res?.geoCode.lat);
                    setFieldValue('longitude', res?.geoCode?.lng);
                    // setPayload({
                    //   address: res?.fulladdress,
                    //   title: res?.city,
                    //   coordinate: res?.coordinate,
                    // });
                  }}></CustomMap>
                <View style={styles.bottomContainer}>
                  <Regular
                    label={
                      touched?.latitude && errors?.latitude
                        ? `${t(errors?.latitude)}`
                        : ''
                    }
                    style={styles.errorLabel}
                  />
                  <InputWithIcon
                    onPress={() => setTouched('country_id', true)}
                    items={countries}
                    placeholder={t('country')}
                    selectedItem={selectedCountry}
                    value={selectedCountry?.name}
                    onChangeText={data => {
                      setCountryStates([]);
                      setStateCities([]);
                      dispatch(setCountries(data));
                      const find = data?.find(x => x?.selected);
                      setFieldValue('country_id', find?.id || '');
                      setFieldValue('state_id', '');
                      setFieldValue('city_id', '');
                    }}
                    error={touched?.country_id && errors?.country_id}
                  />
                  <InputWithIcon
                    onPress={() => setTouched('state_id', true)}
                    items={states?.filter(
                      x => x?.country_id === selectedCountry?.id,
                    )}
                    placeholder={t('state')}
                    value={selectedState?.name}
                    selectedItem={selectedState}
                    onChangeText={data => {
                      setStateCities([]);
                      setCountryStates(data);
                      const find = data?.find(x => x?.selected);
                      setFieldValue('state_id', find?.id || '');
                    }}
                    error={touched?.state_id && errors?.state_id}
                  />
                  <InputWithIcon
                    onPress={() => setTouched('city_id', true)}
                    items={cities?.filter(
                      x => x?.state_id === selectedState?.id,
                    )}
                    placeholder={t('city')}
                    value={selectedCity?.name}
                    selectedItem={selectedCity}
                    onChangeText={data => {
                      const find = data?.find(x => x?.selected);
                      setFieldValue('city_id', find?.id || '');
                      setStateCities(data);
                    }}
                    error={touched?.city_id && errors?.city_id}
                  />
                  <PrimaryInput
                    placeholder={t('address')}
                    onChangeText={handleChange('address')}
                    error={touched?.address && errors?.address}
                    onBlur={handleBlur('address')}
                  />
                  <PrimaryInput
                    placeholder={t('postal_code')}
                    onChangeText={handleChange('postal_code')}
                    error={touched?.postal_code && errors?.postal_code}
                    onBlur={handleBlur('postal_code')}
                  />
                  <PrimaryInput
                    placeholder={t('phone')}
                    onChangeText={handleChange('phone')}
                    error={touched?.phone && errors?.phone}
                    onBlur={handleBlur('phone')}
                  />
                  <PrimaryButton
                    onPress={handleSubmit}
                    loading={loading}
                    containerStyle={styles.addAddressBtn}
                    title={`${payload?.addressId ? 'Update' : 'Add'} address`}
                  />
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAvoidScrollview>
      </View>
    </View>
  );
};
export default AddLocation;
