import messaging from '@react-native-firebase/messaging';
import {PrimaryButton, SocialButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {useFormik} from 'formik';
import {useAppDispatch} from 'hooks/use-store';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {PrimaryInput} from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import {signinFormValidation} from 'validations';
import styles from './styles';
import {colors} from 'config/colors';
import Regular from 'typography/regular-text';
import {Row} from 'components/atoms/row';
import {onLogin} from 'services/api/auth-api-actions';
const LoginScreen = props => {
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const initialValues = {
    email: '',
    password: '',
  };
  const [loading, setLoading] = React.useState(false);
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: signinFormValidation,
      onSubmit: () => {},
    });
  const onSubmit = async () => {
    try {
      if (isValid && Object.keys(touched).length > 0) {
        try {
          messaging()
            .getToken()
            .then(fcmToken => {
              console.log('fcmToken=>', fcmToken);
              // resetStack('LocationNiceMeet');
              dispatch(
                onLogin({...values, token: fcmToken}, setLoading, props),
              );
            })
            .catch(error => console.log(error));
        } catch (error) {
          console.log(error);
        }
      } else {
        setFieldTouched('email', true), setFieldTouched('password', true);
      }
    } catch (error) {
      console.log('error=>', error);
    }
  };
  return (
    <View>
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <Bold
          label={'Welcome to your desired Places'}
          fontSize={20}
          color={colors.black}
          style={styles.signupText}
        />
        <Regular
          label={'Sign in to continue'}
          fontSize={16}
          color={colors.placeholder}
          style={styles.signupText}
        />
        <PrimaryInput
          keyboardType={'email-address'}
          error={
            touched?.email && errors?.email ? `${t(errors?.email)}` : undefined
          }
          placeholder={t('Email')}
          onChangeText={str => setFieldValue('email', str)}
          onBlur={() => setFieldTouched('email', true)}
          value={values.email}
          containerStyle={{marginTop: mvs(40)}}
        />
        <PrimaryInput
          isPassword
          error={
            touched?.password && errors?.password
              ? `${t(errors?.password)}`
              : undefined
          }
          placeholder={'Password'}
          onChangeText={str => setFieldValue('password', str)}
          onBlur={() => setFieldTouched('password', true)}
          value={values.password}
          containerStyle={{marginBottom: 0}}
          errorStyle={{marginBottom: 0}}
        />

        <PrimaryButton
          title={t('Login')}
          onPress={onSubmit}
          loading={loading}
          containerStyle={styles.button}
          textStyle={{fontSize: mvs(18)}}
        />
        <TouchableOpacity
          style={styles.forgetContainer}
          onPress={() => navigate('Signup', {forget: true})}>
          <Medium
            label={t('Forgot Password')}
            color={colors.primary}
            style={{textDecorationLine: 'underline'}}
          />
        </TouchableOpacity>
        <Regular
          label={'Or'}
          fontSize={20}
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
        <Row
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: mvs(25),
          }}>
          <Regular
            label={'New Member? '}
            color={colors.placeholder}
            fontSize={11}
            style={styles.codetext}
          />
          <Bold
            label={' Signup'}
            style={styles.signup}
            color={colors.primary}
            fontSize={14}
            onPress={() => navigate('Signup')}
          />
        </Row>
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default LoginScreen;
