import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SplashIcon } from 'assets/icons';
import { PrimaryButton } from 'components/atoms/buttons';
import PrimaryInput from 'components/atoms/inputs';
import { mvs } from 'config/metrices';
import { Formik } from 'formik';
import { navigate } from 'navigation/navigation-ref';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';

import { renewpasswordFormValidation } from 'validations';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';

import { fotgotJson } from 'assets/lottie';
import LottieAnimation from 'components/atoms/animation';
import { resendPasswordCode } from 'services/api/auth-api-actions';
import Regular from 'typography/regular-text';
import { UTILS } from 'utils';
import { useTheme } from '@react-navigation/native';
type props = NativeStackScreenProps<RootStackParamList, 'RenewPassword'>;

const RenewPassword = (props: props) => {
  const colors = useTheme().colors;

  const emailcheck = props?.route?.params?.email_or_phone;
  const { t } = i18n;
  const initialValues = {
    verification_code: '',
    password: '',
  };
  const [loading, setLoading] = React.useState(false);


  const onSubmit = async (values: any) => {

    try {

      setLoading(true)
      // const res = await changePassword(values)


      navigate('SucessfullyChangePassword')
    }
    catch (error) {
      console.log('error=>', error);

    } finally {
      setLoading(false)
    }
  };
  const onResendCode = async () => {
    try {
      await resendPasswordCode({ verify_by: 'email', email_or_phone: emailcheck })
    } catch (error) {
      console.log('error====>', UTILS.returnError(error));
    }

  }
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <View style={{ ...styles.backgroundContainer, backgroundColor: colors.primary }}>
        <SplashIcon style={{ alignSelf: 'center', marginTop: mvs(76) }} />
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={renewpasswordFormValidation}>
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
                  label={`${t('reset_your_password')}`}
                />
                <PrimaryInput
                  placeholder={t('verification_code')}
                  onChangeText={handleChange('verification_code')}
                  onBlur={handleBlur('verification_code')}
                  value={values.verification_code}
                  errorStyle={{ marginBottom: 0 }}
                  error={
                    touched?.verification_code && errors?.verification_code
                      ? `${t(errors?.verification_code)}`
                      : undefined
                  }
                />
                <PrimaryInput
                  isPassword
                  placeholder={t('New Password')}
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

                <PrimaryButton
                  title="Confirm"
                  onPress={handleSubmit}
                  containerStyle={{
                    marginTop: mvs(12),
                  }}
                />
                <TouchableOpacity onPress={() => onResendCode()} style={{ alignItems: "center", marginTop: mvs(10) }}>
                  <Regular color={colors.text} fontSize={mvs(12)} label={`${t('resend_code')}`} />
                </TouchableOpacity>
              </View>

            </View>
          )}
        </Formik>
      </View>
    </View>

  );
};
export default RenewPassword;
