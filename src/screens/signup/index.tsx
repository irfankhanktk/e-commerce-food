import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik, useFormik } from 'formik';
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
import OtpModal from 'components/molecules/modals/otp-modal';
import { onSignup, resendVerifyOtp, verifyOtp } from 'services/api/auth-api-actions';
Geocoder.init('AIzaSyCbFQqjZgQOWRMuQ_RpXU0kGAUIfJhDw98');

type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = (props: props) => {
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [userId, setUserId] = React.useState('')

  const { t } = i18n;
  const initialValues = {
    name: '',
    email_or_phone: '',
    password: '',
    passowrd_confirmation: '',
    register_by: 'email',
    user_type: 'customer'

  };
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (values: any) => {
    try {
      setLoading(true)
      const res = await onSignup(values);
      setUserId(res?.user_id);
      setOtpModalVisible(true)
    } catch (error) {
      console.log('error=>', error);
    } finally {
      setLoading(false)
    }
  };
  const onVerifySubmit = async () => {
    try {
      const res = await verifyOtp({ user_id: userId, verification_code: value })
      console.log('otp verification res =====>', res);
      navigate('Login')
    } catch (error) {
      console.log('error=>', error);
    }
  }
  const onResendVerifyOtp = async () => {
    try {
      const res = await resendVerifyOtp({ user_id: userId, verify_by: 'email' })
      console.log('resend otp verification res =====>', res);

    } catch (error) {
      console.log('error=>', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <SplashIcon style={{ alignSelf: 'center', marginTop: mvs(76) }} />
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={signupFormValidation}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isValid,
            touched,
            errors,
          }) => (

            <View style={styles.mainInnerContainer}>
              <View style={styles.inputContainer}>
                <Bold
                  style={styles.loginTexhzologyContainer}
                  label={t('signup_up_to_techzology_ecommerces')}
                />
                <PrimaryInput
                  placeholder={t('name')}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  error={
                    touched?.name && errors?.name ? `${t(errors?.name)}` : undefined
                  }
                />
                <PrimaryInput
                  keyboardType={'email-address'}
                  placeholder={t('email')}
                  onChangeText={handleChange('email_or_phone')}
                  onBlur={handleBlur('email_or_phone')}
                  value={values.email_or_phone}
                  error={
                    touched?.email_or_phone && errors?.email_or_phone
                      ? `${t(errors?.email_or_phone)}`
                      : undefined
                  }
                />
                <PrimaryInput
                  isPassword
                  placeholder={t('new_password')}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
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
                  onChangeText={handleChange('passowrd_confirmation')}
                  onBlur={handleBlur('passowrd_confirmation')}
                  value={values.passowrd_confirmation}
                  errorStyle={{ marginBottom: 0 }}
                  error={
                    touched?.passowrd_confirmation && errors?.passowrd_confirmation
                      ? `${t(errors?.passowrd_confirmation)}`
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
                      label={t('i_agree_the')}>{' '}
                      <Medium
                        onPress={() => navigate('TermsAndConditions')}
                        label={t('terms_and_condition')}
                      />{' '}
                      <Medium onPress={() => navigate('PrivacyPolicy')} label={t('return_policy')} />
                    </Regular>
                  </View>
                </Row>

                <PrimaryButton

                  loading={loading}
                  // onPress={handleSubmit}
                  onPress={() => setOtpModalVisible(true)}
                  title={t("signup")}
                  containerStyle={{
                    marginTop: mvs(16),
                  }}
                />

                <Regular
                  style={{ marginTop: mvs(16), alignSelf: 'center' }}
                  label={t('dont_have_account')}>{' '}
                  <Bold onPress={() => navigate('Login')} label={t('login')} />
                </Regular>
              </View>
            </View>


          )}
        </Formik>
      </View>

      <OtpModal
        onClose={() => setOtpModalVisible(false)}
        visible={otpModalVisible}
        setValue={setValue}
        value={value}
        // onPress={onVerifySubmit}
        onPress={() => navigate('Drawer')}
        onResendOtpPress={onResendVerifyOtp}
      />
    </View>
  );
};
export default Signup;
