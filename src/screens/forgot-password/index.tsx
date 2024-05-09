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
import { forgotPassword } from 'services/api/auth-api-actions';
import { UTILS } from 'utils';
import LottieAnimation from 'components/atoms/animation';
import { fotgotJson } from 'assets/lottie';
import { useTheme } from '@react-navigation/native';
type props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

const ForgotPassword = (props: props) => {
  const colors = useTheme().colors;

  const { navigation } = props;
  const { t } = i18n;
  const dispatch = useAppDispatch();
  const initialValues = {
    email_or_phone: '',
    send_code_by: 'email'

  };
  const [loading, setLoading] = React.useState(false);
  // const [otpModal, setOtpModal] = React.useState(false);

  const onSubmit = async (values: any) => {
    try {
      setLoading(true)
      const res = await forgotPassword(values)
      navigate('RenewPassword', { email_or_phone: values?.email_or_phone })
    } catch (error) {
      console.log('error=>', UTILS.returnError(error));
    } finally {
      setLoading(false)
    }
  };
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>

      <View style={{ ...styles.backgroundContainer, backgroundColor: colors.primary }}>
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
              <View style={{ ...styles.inputContainer, backgroundColor: colors.background }}>
                <LottieAnimation style={styles.lottie} src={fotgotJson} />

                <Bold
                  color={colors.text}
                  style={styles.loginTexhzologyContainer}
                  label={t('forgot_password')}
                />
                <PrimaryInput
                  keyboardType={'email-address'}
                  placeholder={t('email')}
                  onChangeText={handleChange('email_or_phone',)}
                  onBlur={handleBlur('email_or_phone',)}
                  value={values.email_or_phone}
                  error={
                    touched?.email_or_phone && errors?.email_or_phone
                      ? `${t(errors?.email_or_phone)}`
                      : undefined
                  }
                />

                <PrimaryButton
                  loading={loading}
                  title={t("send")}
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
