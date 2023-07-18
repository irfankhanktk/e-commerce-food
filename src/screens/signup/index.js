import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFormik} from 'formik';
import React from 'react';
import {Alert, View} from 'react-native';
import Geocoder from 'react-native-geocoding';

import {PrimaryButton, SocialButton} from 'components/atoms/buttons';
import {PrimaryInput} from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {
  onForgotPassword,
  onSendCodeToEmail,
} from 'services/api/auth-api-actions';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {UTILS} from 'utils';
import {signupFormValidation} from 'validations';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
Geocoder.init('AIzaSyCbFQqjZgQOWRMuQ_RpXU0kGAUIfJhDw98');

type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const Signup = (props: props) => {
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const {navigation} = props;
  const {t} = i18n;
  const {user} = useAppSelector(s => s);
  const {location} = user;
  const forget = props?.route?.params?.forget;
  const dispatch = useAppDispatch();
  const initialValues = {
    email: '',
  };
  const [loading, setLoading] = React.useState(false);
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: signupFormValidation,
      onSubmit: () => {},
    });
  const onSubmit = async () => {
    try {
      if (isValid && Object.keys(touched).length > 0) {
        try {
          setLoading(true);
          const data = {email: values?.email};
          let res = null;
          if (forget) {
            res = await onForgotPassword(data);
          } else {
            res = await onSendCodeToEmail(data);
            props.navigation.navigate('VerifyEmail', {
              email: values?.email,
              ...res,
            });
          }
          Alert.alert('Success', res?.message);
        } catch (error) {
          console.log(error);
        }
      } else {
        setFieldTouched('email', true);
      }
    } catch (error) {
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Header1x2x title={t('signup')} /> */}
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <Bold
          label={forget ? 'Forget Password' : 'Sign up'}
          fontSize={24}
          color={colors.black}
          style={styles.signupText}
        />
        {forget ? (
          <Regular
            label={'Retrieve your password'}
            color={colors.placeholder}
            style={{alignSelf: 'center', marginBottom: mvs(70)}}
          />
        ) : (
          <Row>
            <Regular
              label={'Already have an account?'}
              color={colors.placeholder}
              style={styles.alreadyText}
            />
            <Regular
              label={'Sign in'}
              style={styles.signinText}
              color={colors.primary}
              onPress={() => props.navigation.navigate('Login')}
            />
          </Row>
        )}
        <PrimaryInput
          keyboardType={'email-address'}
          error={touched?.email && errors?.email ? t(errors?.email) : ''}
          placeholder={t('Enter your email')}
          onChangeText={str => setFieldValue('email', str)}
          onBlur={() => setFieldTouched('email', true)}
          value={values.email}
        />
        <PrimaryButton
          loading={loading}
          title={forget ? 'Recover password' : 'Create account'}
          onPress={onSubmit}
          containerStyle={styles.button}
          textStyle={{fontSize: mvs(18)}}
        />
        {!forget ? (
          <>
            <Bold
              label={'or'}
              fontSize={24}
              color={colors.black}
              style={styles.ortext}
            />

            <SocialButton
              facebook
              title={t('Continue with facebook')}
              onPress={() => {}}
              containerStyle={[
                styles.socialbutton,
                {backgroundColor: `${colors.blue}`},
              ]}
              textStyle={styles.textstyle}
            />
            <SocialButton
              icon={'facebook'}
              title={t('Continue with google')}
              onPress={() => {}}
              containerStyle={styles.socialbutton}
              textStyle={styles.textstyle}
            />
          </>
        ) : (
          <View />
        )}
        {/* <PrimaryInput
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
        /> */}

        {/* <OtpModalRenewPassword
          email={values?.email}
          onClose={() => setOtpModalVisible(false)}
          visible={otpModalVisible}
          setValue={setValue}
          value={value}
          {...props}
        /> */}
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default Signup;
