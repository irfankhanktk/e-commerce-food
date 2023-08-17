import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import Geocoder from 'react-native-geocoding';

import { SplashIcon } from 'assets/icons';
import { PrimaryButton } from 'components/atoms/buttons';
import { Checkbox } from 'components/atoms/checkbox';
import PrimaryInput from 'components/atoms/inputs';
import { Row } from 'components/atoms/row';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppDispatch, useAppSelector } from 'hooks/use-store';
import { navigate } from 'navigation/navigation-ref';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import { UTILS } from 'utils';
import { signupFormValidation } from 'validations';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
Geocoder.init('AIzaSyCbFQqjZgQOWRMuQ_RpXU0kGAUIfJhDw98');

type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = (props: props) => {
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const { t } = i18n;
  const { doctor, user } = useAppSelector(s => s);
  const { location } = user;
  const { spec_categories } = doctor;

  const dispatch = useAppDispatch();
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    confirm_password: '',
    password: '',
    token: '',
    doc_cat_id: '',
    city: '',
    state: '',
    country: '',
    zip_code: '',
    map_lat: '',
    map_lng: '',
    price: '',
    short_description: '',
    experience: 0,
    min_day_before_booking: 0,
    min_day_stays: 0,
    enable_service_fee: 0,
    // bio: null,
  };
  const [loading, setLoading] = React.useState(false);
  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: signupFormValidation,
      onSubmit: () => { },
    });

  React.useEffect(() => {
    (async () => {
      try {
        const addressComponent = await UTILS._returnAddress(
          location?.latitude,
          location?.longitude,
        );
        setFieldValue('map_lat', location?.latitude);
        setFieldValue('map_lng', location?.longitude);
        setFieldValue('city', addressComponent?.city);
        setFieldValue('state', addressComponent?.province);
        setFieldValue('country', addressComponent?.country);
      } catch (error) {
        console.log('error in location address', error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <SplashIcon style={{ alignSelf: 'center', marginTop: mvs(76) }} />
        <View style={styles.mainInnerContainer}>
          <View style={styles.inputContainer}>
            <Bold
              style={styles.loginTexhzologyContainer}
              label={'Sign up to techzology ecommerces'}
            />
            <PrimaryInput
              keyboardType={'email-address'}
              placeholder={t('name')}
              onChangeText={str => setFieldValue('name', str)}
              onBlur={() => setFieldTouched('name', true)}
              value={values.name}
              error={
                touched?.name && errors?.name ? `${t(errors?.name)}` : undefined
              }
            />
            <PrimaryInput
              keyboardType={'email-address'}
              placeholder={t('email')}
              onChangeText={str => setFieldValue('email', str)}
              onBlur={() => setFieldTouched('email', true)}
              value={values.email}
              error={
                touched?.email && errors?.email
                  ? `${t(errors?.email)}`
                  : undefined
              }
            />
            <PrimaryInput
              isPassword
              placeholder={t('new_password')}
              onChangeText={str => setFieldValue('password', str)}
              onBlur={() => setFieldTouched('password', true)}
              value={values.password}
              errorStyle={{ marginBottom: 0 }}
              error={
                touched?.password && errors?.password
                  ? `${t(errors?.password)}`
                  : undefined
              }
            />
            <PrimaryInput
              isPassword
              placeholder={t('confirm_pass')}
              onChangeText={str => setFieldValue('password', str)}
              onBlur={() => setFieldTouched('password', true)}
              value={values.password}
              errorStyle={{ marginBottom: 0 }}
              error={
                touched?.password && errors?.password
                  ? `${t(errors?.password)}`
                  : undefined
              }
            />
            <Row
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: mvs(16),
              }}>
              <Checkbox onPress={() => { }} />
              <View style={{ paddingLeft: mvs(10), flex: 1 }}>
                <Regular
                  color={colors.darkBlack}
                  fontSize={mvs(10)}
                  label={'I agree the'}>
                  <Medium
                    onPress={() => navigate('TermsAndConditions')}
                    label={' Terms and conditions, '}
                  />{' '}
                  <Medium onPress={() => navigate('PrivacyPolicy')} label={'Return Policy & Privacy Policy'} />
                </Regular>
              </View>
            </Row>

            <PrimaryButton
              title="Sign Up"
              onPress={() => navigate('Signup')}
              containerStyle={{
                marginTop: mvs(16),
              }}
            />

            <Regular
              style={{ marginTop: mvs(16), alignSelf: 'center' }}
              label={'Dont have an account? '}>
              <Bold onPress={() => navigate('Login')} label={'Login'} />
            </Regular>
          </View>
        </View>
      </View>
      {/* <Header1x2x title={t('signup')} /> */}
      {/* <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <PrimaryInput
          isRequired
          error={touched?.name && errors?.name ? t(errors?.name) : ''}
          label={t('name')}
          placeholder={t('name')}
          onChangeText={str => setFieldValue('name', str)}
          onBlur={() => setFieldTouched('name', true)}
          value={values.name}
        />
        <PrimaryInput
          isRequired
          keyboardType={'email-address'}
          error={touched?.email && errors?.email ? t(errors?.email) : ''}
          label={t('email')}
          placeholder={t('email')}
          onChangeText={str => setFieldValue('email', str)}
          onBlur={() => setFieldTouched('email', true)}
          value={values.email}
        />
        <PrimaryPhoneInput
          isRequired
          error={errors?.phone && touched?.phone ? `${t(errors?.phone)}` : ''}
          label={t('phone')}
          placeholder={t('phone_no')}
          onChangeText={str => {
            setFieldValue('phone', str);
            setFieldTouched('phone', true);
          }}
          onBlur={() => setFieldTouched('phone', true)}
          value={values.phone}
        />
        <PrimaryInput
          isRequired
          isPassword
          error={
            touched?.password && errors?.password
              ? t(errors?.password)
              : undefined
          }
          placeholder={'********'}
          label={t('password')}
          onChangeText={str => setFieldValue('password', str)}
          onBlur={() => setFieldTouched('password', true)}
          value={values.password}
        />
        <PrimaryInput
          isRequired
          isPassword
          error={
            touched?.confirm_password && errors?.confirm_password
              ? t(errors?.confirm_password)
              : undefined
          }
          placeholder={'********'}
          label={t('confirm_pass')}
          onChangeText={str => setFieldValue('confirm_password', str)}
          onBlur={() => setFieldTouched('confirm_password', true)}
          value={values.confirm_password}
        />
        <InputWithIcon
          isRequired
          label={t('choose_category')}
          error={
            errors?.doc_cat_id && touched?.doc_cat_id ? errors?.doc_cat_id : ''
          }
          items={spec_categories}
          onChangeText={str => {
            setFieldValue('doc_cat_id', str);
          }}
          onBlur={() => setFieldTouched('doc_cat_id', true)}
          id={values?.doc_cat_id}
          value={
            spec_categories?.find(x => x?.id === values?.doc_cat_id)?.title
          }
        />
        <PrimaryInput
          isRequired
          keyboardType={'numeric'}
          error={
            touched?.zip_code && errors?.zip_code ? t(errors?.zip_code) : ''
          }
          label={t('zip_code')}
          placeholder={t('zip_code')}
          onChangeText={str => setFieldValue('zip_code', str)}
          onBlur={() => setFieldTouched('zip_code', true)}
          value={`${values.zip_code}`}
        />
        <PrimaryInput
          isRequired
          error={touched?.city && errors?.city ? t(errors?.city) : ''}
          label={t('city')}
          placeholder={t('city')}
          onChangeText={str => setFieldValue('city', str)}
          onBlur={() => setFieldTouched('city', true)}
          value={`${values.city}`}
        />
        <PrimaryInput
          isRequired
          error={touched?.state && errors?.state ? t(errors?.state) : ''}
          label={t('state')}
          placeholder={t('state')}
          onChangeText={str => setFieldValue('state', str)}
          onBlur={() => setFieldTouched('state', true)}
          value={`${values.state}`}
        />
        <PrimaryInput
          isRequired
          error={touched?.country && errors?.country ? t(errors?.country) : ''}
          label={t('country')}
          placeholder={t('country')}
          onChangeText={str => setFieldValue('country', str)}
          onBlur={() => setFieldTouched('country', true)}
          value={`${values.country}`}
        />
        <PrimaryInput
          isRequired
          keyboardType={'numeric'}
          error={touched?.price && errors?.price ? t(errors?.price) : ''}
          label={t('price')}
          placeholder={t('price')}
          onChangeText={str => setFieldValue('price', str)}
          onBlur={() => setFieldTouched('price', true)}
          value={`${values.price}`}
        />
        <PrimaryInput
          isRequired
          keyboardType={'numeric'}
          error={
            touched?.experience && errors?.experience
              ? t(errors?.experience)
              : ''
          }
          label={t('experience')}
          placeholder={t('experience')}
          onChangeText={str => setFieldValue('experience', str)}
          onBlur={() => setFieldTouched('experience', true)}
          value={`${values.experience}`}
        />
        <PrimaryInput
          isRequired
          error={
            touched?.short_description && errors?.short_description
              ? t(errors?.short_description)
              : ''
          }
          label={t('short_description')}
          placeholder={t('short_description')}
          onChangeText={str => setFieldValue('short_description', str)}
          onBlur={() => setFieldTouched('short_description', true)}
          value={`${values.short_description}`}
        />
        <PrimaryInput
          keyboardType={'numeric'}
          error={
            touched?.min_day_before_booking && errors?.min_day_before_booking
              ? t(errors?.min_day_before_booking)
              : ''
          }
          label={t('min_day_before_booking')}
          placeholder={t('min_day_before_booking')}
          onChangeText={str => setFieldValue('min_day_before_booking', str)}
          onBlur={() => setFieldTouched('min_day_before_booking', true)}
          value={`${values.min_day_before_booking}`}
        />
        <PrimaryInput
          keyboardType={'numeric'}
          error={
            touched?.min_day_stays && errors?.min_day_stays
              ? t(errors?.min_day_stays)
              : ''
          }
          label={t('min_day_stays')}
          placeholder={t('min_day_stays')}
          onChangeText={str => setFieldValue('min_day_stays', str)}
          onBlur={() => setFieldTouched('min_day_stays', true)}
          value={`${values.min_day_stays}`}
        />
        <Medium
          style={styles.accountText}
          onPress={props?.navigation?.goBack}
          label={`${t('already_acc')}`}
        />
        <PrimaryButton
          loading={loading}
          disabled={
            Object.keys(errors)?.length > 0 ||
            Object.keys(touched)?.length === 0
          }
          title={t('signup')}
          // onPress={onSubmit}
          onPress={() => {
            messaging()
              .getToken()
              .then(fcmToken => {
                console.log('fcmToken=>', fcmToken);
                dispatch(
                  onSignup(
                    { ...values, token: fcmToken },
                    setLoading,
                    props,
                    setOtpModalVisible,
                  ),
                );
              })
              .catch(error => console.log(error));
          }}
          containerStyle={styles.button}
        />
        <OtpModalRenewPassword
          email={values?.email}
          onClose={() => setOtpModalVisible(false)}
          visible={otpModalVisible}
          setValue={setValue}
          value={value}
          {...props}
        />
      </KeyboardAvoidScrollview> */}
      {/* </ImageBackground> */}
    </View>
  );
};
export default Signup;
