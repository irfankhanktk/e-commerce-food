import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SplashIcon } from 'assets/icons';
import { PrimaryButton } from 'components/atoms/buttons';
import PrimaryInput from 'components/atoms/inputs';
import { mvs } from 'config/metrices';
import { Formik, useFormik } from 'formik';
import { useAppDispatch } from 'hooks/use-store';
import { navigate } from 'navigation/navigation-ref';
import React from 'react';
import { View } from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';

import { renewpasswordFormValidation } from 'validations';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'RenewPassword'>;

const RenewPassword = (props: props) => {
  const { navigation } = props;
  const { t } = i18n;
  const dispatch = useAppDispatch();
  const initialValues = {
    confirm_password: '',
    password: '',
  };
  const [loading, setLoading] = React.useState(false);


  const onSubmit = async () => {
    try {

      navigate('SucessfullyChangePassword')

    }
    catch (error) {
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
              <View style={styles.inputContainer}>
                <Bold
                  style={styles.loginTexhzologyContainer}
                  label={'reset your Password'}
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
                <PrimaryInput
                  isPassword
                  placeholder={t('confirm_pass')}
                  onChangeText={handleChange('confirm_password')}
                  onBlur={handleBlur('confirm_password')}
                  value={values.confirm_password}
                  errorStyle={{ marginBottom: 0 }}
                  error={
                    touched?.confirm_password && errors?.confirm_password
                      ? `${t(errors?.confirm_password)}`
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


              </View>

            </View>
          )}
        </Formik>

      </View>

      {/* <ImageBackground source={auth_bg} style={{
        height: height,
        width: width,
      }}>
        <KeyboardAvoidScrollview contentContainerStyle={styles.contentContainerStyle}>
          <RenewLogo style={{ alignSelf: 'center', marginBottom: mvs(15), }} />
          <Bold label={`${t('renew_pass')}`} style={styles.txt} />
          <PrimaryInput
            isPassword
            error={
              touched?.password && errors?.password
                ? t(errors?.password)
                : undefined
            }
            placeholder={'********'}
            label={t('password')}
            onChangeText={(str) => setFieldValue('password', str)}
            onBlur={() => setFieldTouched('password', true)}
            value={values.password} />
          <PrimaryInput
            isPassword
            error={
              touched?.confirm_password && errors?.confirm_password
                ? t(errors?.confirm_password)
                : undefined
            }
            placeholder={'********'}
            label={t('confirm_pass')}
            onChangeText={(str) => setFieldValue('confirm_password', str)}
            onBlur={() => setFieldTouched('confirm_password', true)}
            value={values.confirm_password} />

          <PrimaryButton
            loading={loading}
            disabled={Object.keys(errors)?.length > 0 || Object.keys(touched)?.length === 0}
            title={t('set_password')}
            onPress={() => dispatch(onSignup(values, setLoading, props))}
            containerStyle={styles.button} />
        </KeyboardAvoidScrollview>
      </ImageBackground> */}
    </View>

  );
};
export default RenewPassword;
