import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SplashIcon } from 'assets/icons';
import { PrimaryButton } from 'components/atoms/buttons';
import PrimaryInput from 'components/atoms/inputs';

import { mvs } from 'config/metrices';
import { Formik, useFormik } from 'formik';
import { useAppDispatch } from 'hooks/use-store';
import React from 'react';
import { View } from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import { forgotemailFormValidation } from 'validations';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
import { navigate } from 'navigation/navigation-ref';
type props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

const ForgotPassword = (props: props) => {
  const { navigation } = props;
  const { t } = i18n;
  const dispatch = useAppDispatch();
  const initialValues = {
    email: '',
  };
  const [loading, setLoading] = React.useState(false);
  // const [otpModal, setOtpModal] = React.useState(false);
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');

  const onSubmit = async () => {
    try {

      navigate('RenewPassword')

    } catch (error) {
      console.log('error=>', error);

    } finally {
      setLoading(false)
    }
  };
  return (
    <View style={styles.container}>

      <View style={styles.backgroundContainer}>
        <SplashIcon style={{ alignSelf: 'center', marginTop: mvs(76) }} />
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={forgotemailFormValidation}>
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
                  label={'Forgot Password'}
                />
                <PrimaryInput
                  keyboardType={'email-address'}
                  placeholder={t('email')}
                  onChangeText={handleChange('email',)}
                  onBlur={handleBlur('email',)}
                  value={values.email}
                  error={
                    touched?.email && errors?.email
                      ? `${t(errors?.email)}`
                      : undefined
                  }
                />

                <PrimaryButton
                  title="Send"
                  onPress={handleSubmit}
                  containerStyle={{
                    marginTop: mvs(12),
                  }}
                />
              </View>

            </View>
          )}
        </Formik>


      </View>




      {/* <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <RenewLogo style={styles.renew} />
        <Bold label={`${t('forgot_password')}`} style={styles.txt} />
        <PrimaryInput
          keyboardType={'email-address'}
          error={touched?.email && errors?.email ? t(errors?.email) : ''}
          label={t('email')}
          placeholder={t('email')}
          onChangeText={str => setFieldValue('email', str)}
          onBlur={() => setFieldTouched('email', true)}
          value={values.email}
        />
        <PrimaryButton
          loading={loading}
          // disabled={Object.keys(errors)?.length > 0 || Object.keys(touched)?.length === 0}
          title={t('send_email')}
          // onPress={() => dispatch(onSignup(values, setLoading, props))}
          onPress={onSubmit}
          containerStyle={styles.button}
        />
      </KeyboardAvoidScrollview> */}
      {/* <OtpModalRenewPassword
        email={values?.email}
        value={value}
        setValue={setValue}
        visible={otpModalVisible}
        onClose={() => setOtpModalVisible(false)}
        {...props}
        isSignup={false}
      /> */}
    </View>
  );
};
export default ForgotPassword;
