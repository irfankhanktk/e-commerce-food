import {PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {Formik} from 'formik';
import {useAppDispatch} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {SplashIcon} from 'assets/icons';
import PrimaryInput from 'components/atoms/inputs';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {onLogin} from 'services/api/auth-api-actions';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {signinFormValidation} from 'validations';
import styles from './styles';
import {UTILS} from 'utils';
const LoginScreen = props => {
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const initialValues = {
    email: '',
    password: '',
  };
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async values => {
    try {
      // await dispatch(onLogin(values, setLoading, props));
      navigate('Drawer');
    } catch (error) {
      console.log('error=>', UTILS.returnError(error));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <SplashIcon style={{alignSelf: 'center', marginTop: mvs(76)}} />
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={signinFormValidation}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View style={styles.mainInnerContainer}>
              <View style={styles.inputContainer}>
                <Bold
                  style={styles.loginTexhzologyContainer}
                  label={t('login_in_to_techzology_ecommerces')}
                />
                <PrimaryInput
                  keyboardType={'email-address'}
                  placeholder={t('email')}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
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
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
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
                  loading={loading}
                  onPress={handleSubmit}
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
                  label={t('login_with')}
                  fontSize={mvs(10)}
                  style={{alignSelf: 'center', marginTop: mvs(12)}}
                />
                <Row style={{paddingHorizontal: mvs(35), marginTop: mvs(12)}}>
                  <TouchableOpacity>
                    <Regular label={t('Google')} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Regular label={t('Facebook')} />
                  </TouchableOpacity>
                </Row>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
export default LoginScreen;

// //  <KeyboardAvoidScrollview
// // contentContainerStyle={styles.contentContainerStyle}>
// //  <TouchableOpacity
// //       style={{alignSelf: 'center', marginTop: mvs(20)}}
// //       onPress={() => navigate('Signup')}>
// //       <Medium
// //         label={t('dont_have_account')}
// //         style={{textDecorationLine: 'underline'}}
// //       />
// //     </TouchableOpacity>
// // <OtpModal
// //   onClose={() => setOtpModalVisible(false)}
// //   visible={otpModalVisible}
// //   setValue={setValue}
// //   value={value}
// // />
// // </KeyboardAvoidScrollview>
