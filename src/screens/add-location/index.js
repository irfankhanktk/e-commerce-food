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
  // console.log('payload::::', payload);
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const colors = useTheme().colors;
  React.useEffect(() => {
    dispatch(getCountries());
    dispatch(getCities());
    dispatch(getStates());
  }, []);
  React.useEffect(() => {}, []);

  const onSubmit = async values => {
    try {
      console.log('values me check====>', values);
      Alert.alert('check data');
      return;
      setLoading(true);

      console.log('values address===>', values);
      const res = await addAddress(values);
      console.log('res:::>>>>>', res);
      Alert.alert('Success', 'Save Successfully');
    } catch (error) {
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <View style={{}}>
        <Row
          style={{
            position: 'absolute',
            zIndex: 1,
            alignItems: 'center',
            top: mvs(30),
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
        </Row>
      </View>
      <View style={{flex: 1}}>
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
                backgroundColor: colors.downColor,
                flex: 1,
              }}>
              <CustomMap
                style={{height: mvs(250)}}
                onPress={res => {
                  console.log('res>>>>', res);
                  setFieldValue('latitude', res?.coordinate?.latitude);
                  setFieldValue('longitude', res?.coordinate?.longitude);
                }}></CustomMap>
              <KeyboardAvoidScrollview
                contentContainerStyle={{paddingHorizontal: 0}}>
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
                    id={values?.country_id}
                    placeholder={t('country')}
                    value={
                      countries?.find(x => x?.id === values?.country_id)?.name
                    }
                    onChangeText={data => {
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
                      x => x?.country_id === values?.country_id,
                    )}
                    placeholder={t('state')}
                    // value={selectedState?.name}
                    id={values?.state_id}
                    value={states?.find(x => x?.id === values?.state_id)?.name}
                    // selectedItem={selectedState}
                    onChangeText={data => {
                      const find = data?.find(x => x?.selected);
                      setFieldValue('state_id', find?.id || '');
                      setFieldValue('city_id', '');
                    }}
                    error={touched?.state_id && errors?.state_id}
                  />
                  <InputWithIcon
                    onPress={() => setTouched('city_id', true)}
                    items={cities?.filter(
                      x => x?.state_id === values?.state_id,
                    )}
                    placeholder={t('city')}
                    id={values?.city_id}
                    value={cities?.find(x => x?.id === values?.city_id)?.name}
                    onChangeText={data => {
                      const find = data?.find(x => x?.selected);
                      setFieldValue('city_id', find?.id || '');
                    }}
                    error={touched?.city_id && errors?.city_id}
                  />
                  <PrimaryInput
                    value={values?.address}
                    placeholder={t('address')}
                    onChangeText={handleChange('address')}
                    error={touched?.address && errors?.address}
                    // onBlur={handleBlur('address')}
                  />
                  <PrimaryInput
                    value={values?.postal_code}
                    placeholder={t('postal_code')}
                    onChangeText={handleChange('postal_code')}
                    error={touched?.postal_code && errors?.postal_code}
                    // onBlur={handleBlur('postal_code')}
                  />
                  <PrimaryInput
                    value={values?.phone}
                    placeholder={t('phone')}
                    onChangeText={handleChange('phone')}
                    error={touched?.phone && errors?.phone}
                    // onBlur={handleBlur('phone')}
                  />
                  <PrimaryButton
                    onPress={handleSubmit}
                    loading={loading}
                    containerStyle={styles.addAddressBtn}
                    title={`${payload?.id ? t('update') : t('add')} ${t(
                      'address',
                    )}`}
                  />
                </View>
              </KeyboardAvoidScrollview>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
export default AddLocation;
