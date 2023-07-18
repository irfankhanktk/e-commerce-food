import React from 'react';
import {Alert, View} from 'react-native';
import {PrimaryButton} from 'components/atoms/buttons';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {OtpInput} from 'components/atoms/otp-input';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import styles from './styles';

const VerifyEmail = props => {
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const {navigation, route} = props;
  const params = route?.params;
  const {t} = i18n;
  const {user} = useAppSelector(s => s);
  const {location} = user;
  console.log('location=>>>', location);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);
  console.log('params:::', params);
  const onSubmit = () => {
    if (value === params?.data) {
      props.navigation.navigate('ResetPassword', params);
    } else {
      Alert.alert('Otp Error', 'Verification Code is not matched');
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.contentContainerStyle}>
        <Bold
          label={'Verify your email'}
          fontSize={24}
          color={colors.black}
          style={styles.signupText}
        />
        <Regular
          label={'Enter OTP code here'}
          fontSize={14}
          color={colors.placeholder}
          style={[styles.signupText, {marginTop: mvs(1)}]}
        />
        <Row>
          <Regular
            label={'We sent you a verification code to your email address '}
            color={colors.placeholder}
            fontSize={9}
            style={styles.alreadyText}
          />
          <Regular
            label={'abc@123.com'}
            style={styles.signinText}
            color={colors.primary}
            fontSize={9}
            onPress={() => {}}
          />
        </Row>
        <OtpInput value={value} setValue={setValue} />
        <PrimaryButton
          loading={loading}
          title={t('Verify now')}
          onPress={onSubmit}
          containerStyle={styles.button}
          textStyle={{fontSize: mvs(18)}}
        />
        <Row>
          <Regular
            label={'Didn’t get the code?'}
            color={colors.placeholder}
            fontSize={11}
            style={styles.codetext}
          />
          <Bold
            label={' Resend '}
            style={styles.ortext}
            color={colors.placeholder}
            fontSize={12}
            onPress={() => {}}
          />
        </Row>

        {/* <SocialButton
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
        /> */}
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
export default VerifyEmail;
