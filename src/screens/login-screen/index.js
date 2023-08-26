import {PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {useFormik} from 'formik';
import {useAppDispatch} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {SplashIcon} from 'assets/icons';
import PrimaryInput from 'components/atoms/inputs';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {signinFormValidation} from 'validations';
import styles from './styles';
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
      // messaging()
      //   .getToken()
      //   .then(fcmToken => {
      //     console.log('fcmToken=>', fcmToken);
      //     dispatch(onLogin({...values, token: fcmToken}, setLoading, props));
      //   })
      //   .catch(error => console.log(error));
      navigate('Drawer');
    } catch (error) {
      console.log('error=>', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <SplashIcon style={{alignSelf: 'center', marginTop: mvs(76)}} />
        <View style={styles.mainInnerContainer}>
          <View style={styles.inputContainer}>
            <Bold
              style={styles.loginTexhzologyContainer}
              label={t('login_in_to_techzology_ecommerces')}
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
              placeholder={t('password')}
              onChangeText={str => setFieldValue('password', str)}
              onBlur={() => setFieldTouched('password', true)}
              value={values.password}
              errorStyle={{marginBottom: 0}}
              error={
                touched?.password && errors?.password
                  ? `${t(errors?.password)}`
                  : undefined
              }
            />
            <TouchableOpacity
              style={{alignSelf: 'flex-end', marginBottom: mvs(15)}}
              onPress={() => navigate('ForgotPassword')}>
              <Bold label={t('Forgot Password?')} />
            </TouchableOpacity>
            <PrimaryButton
              // disabled={
              //   Object.keys(errors).length > 0 ||
              //   Object.keys(touched).length === 0
              // }
              loading={loading}
              onPress={onSubmit}
              title={t('login')}
            />
            <Regular
              label={t('or_create_a_new_account')}
              fontSize={mvs(10)}
              style={{alignSelf: 'center', marginTop: mvs(12)}}
            />
            <PrimaryButton
              title={t('signup')}
              onPress={() => navigate('Signup')}
              containerStyle={{
                backgroundColor: colors.green,
                marginTop: mvs(12),
              }}
            />
            <Regular
              label={'Login with'}
              fontSize={mvs(10)}
              style={{alignSelf: 'center', marginTop: mvs(12)}}
            />
            <Row style={{paddingHorizontal: mvs(35), marginTop: mvs(12)}}>
              <TouchableOpacity>
                <Regular label={'Google'} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Regular label={'Facebook'} />
              </TouchableOpacity>
            </Row>
          </View>
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

//  <KeyboardAvoidScrollview
// contentContainerStyle={styles.contentContainerStyle}>
//  <TouchableOpacity
//       style={{alignSelf: 'center', marginTop: mvs(20)}}
//       onPress={() => navigate('Signup')}>
//       <Medium
//         label={t('dont_have_account')}
//         style={{textDecorationLine: 'underline'}}
//       />
//     </TouchableOpacity>
// <OtpModal
//   onClose={() => setOtpModalVisible(false)}
//   visible={otpModalVisible}
//   setValue={setValue}
//   value={value}
// />
// </KeyboardAvoidScrollview>
