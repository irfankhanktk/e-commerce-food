import { Loader } from 'components/atoms/loader';
import { ModalWrapper } from 'components/atoms/modal-wrapper';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppDispatch } from 'hooks/use-store';
import { t } from 'i18next';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Medium from 'typography/medium-text';
import { OtpInput } from '../../atoms/otp-input';
import { CrossModal } from 'assets/icons';
const OtpModalRenewPassword = ({
  disabled = false,
  style = {},
  email,
  visible = false,
  value,
  setValue,
  isSignup = true,
  onClose = item => { },
  onPress = () => { },
  ...props
}) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);
  const verifyOtp = () => {

  };
  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>
        <View style={styles.header} />
        <TouchableOpacity onPress={() => onClose()} style={styles.cross}>
          <CrossModal height={mvs(30)} width={mvs(30)} />
        </TouchableOpacity>
        <Medium
          numberOfLines={2}
          label={t('verification-otp')}
          style={{
            fontSize: mvs(20),
            color: colors.primary,
            width: mvs(120),
            alignSelf: 'center',
            textAlign: 'center',
          }}
        />
        <Medium
          numberOfLines={3}
          style={styles.msg}
          label={`${t('verfication_desc')} ${email || '@email'}`}
        />
        <View style={styles.otp}>
          <OtpInput setValue={setValue} value={value} />
        </View>
        <TouchableOpacity
          disabled={disabled}
          onPress={() => {
            verifyOtp();
          }}
          style={{
            backgroundColor: colors.blueHalf,
            alignSelf: 'center',
            height: mvs(60),
            width: mvs(60),
            borderRadius: mvs(30),
            marginTop: mvs(15),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {loading ? (
            <Loader />
          ) : (
            <Icon color={colors.primary} size={25} name={'arrowright'} />
          )}
        </TouchableOpacity>
      </View>
    </ModalWrapper>
  );
};
export default OtpModalRenewPassword;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: mvs(20),
  },
  container: {
    // height: mvs(300),
    backgroundColor: colors.white,
    paddingVertical: mvs(15),
    borderRadius: mvs(20),
  },
  otp: { paddingHorizontal: mvs(20), marginTop: mvs(20) },
  header: {
    height: mvs(3),
    borderRadius: mvs(5),
    width: mvs(104),
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    marginBottom: mvs(20),
  },
  msg: {
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.primary,
    marginHorizontal: mvs(20),
    fontSize: mvs(14),
  },
  button: {
    paddingHorizontal: mvs(30),
    marginBottom: mvs(20),
  },
  cross: { padding: mvs(20), alignSelf: 'flex-end', position: 'absolute' },
});
