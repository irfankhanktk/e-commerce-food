import {useFormik} from 'formik';
import React from 'react';
import {View} from 'react-native';

import {PrimaryButton} from 'components/atoms/buttons';
import {PrimaryInput} from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {Row} from 'components/atoms/row';
import SuccessModal from 'components/molecules/modals/success-modal';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {renewpasswordFormValidation} from 'validations';
import styles from './styles';
import {onSignup} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';

const ResetPassword = props => {
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const {navigation, route} = props;
  const params = route?.params;
  const {t} = i18n;
  const {user} = useAppSelector(s => s);
  const {location} = user;
  console.log('location=>>>', location);

  const dispatch = useAppDispatch();
  const initialValues = {
    password: '',
    confirmPassword: '',
  };
  const [loading, setLoading] = React.useState(false);
  const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      validationSchema: renewpasswordFormValidation,
      onSubmit: () => {},
    });

  const onSubmit = async () => {
    try {
      if (isValid && Object.keys(touched).length > 0) {
        try {
          const data = {email: params?.email, ...values};
          dispatch(onSignup(data, setLoading, setOtpModalVisible));
        } catch (error) {
          console.log(error);
        }
      } else {
        setFieldTouched('password', true);
        setFieldTouched('confirmPassword', true);
      }
    } catch (error) {
      console.log(UTILS.returnError(error));
    }
  };
  const handleClose = () => {
    setOtpModalVisible(false), navigate('Login');
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <Bold
          label={'Sign up'}
          fontSize={24}
          color={colors.black}
          style={styles.signupText}
        />
        <Regular
          label={'Set a new Password'}
          fontSize={14}
          color={colors.placeholder}
          style={[
            styles.signupText,
            {marginTop: mvs(1), marginBottom: mvs(30)},
          ]}
        />
        <PrimaryInput
          isPassword
          keyboardType={'email-address'}
          error={
            touched?.password && errors?.password ? t(errors?.password) : ''
          }
          placeholder={t('Enter new password')}
          onChangeText={str => setFieldValue('password', str)}
          onBlur={() => setFieldTouched('password', true)}
          value={values.password}
        />
        <PrimaryInput
          isPassword
          keyboardType={'email-address'}
          error={
            touched?.confirmPassword && errors?.confirmPassword
              ? t(errors?.confirmPassword)
              : ''
          }
          placeholder={t('Confirm password')}
          onChangeText={str => setFieldValue('confirmPassword', str)}
          onBlur={() => setFieldTouched('confirmPassword', true)}
          value={values.confirmPassword}
        />
        <PrimaryButton
          loading={loading}
          title={t('Sign up')}
          onPress={onSubmit}
          containerStyle={styles.button}
          textStyle={{fontSize: mvs(18)}}
        />
        <Row>
          <Regular
            label={'Already a member? '}
            color={colors.placeholder}
            fontSize={11}
            style={styles.codetext}
          />
          <Bold
            label={' Sign in '}
            style={styles.ortext}
            color={colors.primary}
            fontSize={14}
            onPress={() => navigate('Login')}
          />
        </Row>

        <SuccessModal
          onClose={() => handleClose()}
          visible={otpModalVisible}
          setValue={setValue}
          value={value}
          // {...props}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default ResetPassword;
