import { CrossModal } from 'assets/icons';
import { Loader } from 'components/atoms/loader';
import { ModalWrapper } from 'components/atoms/modal-wrapper';
import { colors } from 'config/colors';
import { t } from 'i18next';
import { navigate } from 'navigation/navigation-ref';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Medium from 'typography/medium-text';
import { mvs, width } from 'config/metrices';
import { OtpInput } from 'components/atoms/otp-input';
import Line from 'components/atoms/line';
import { Row } from 'components/atoms/row';
import Regular from 'typography/regular-text';
import Bold from 'typography/bold-text';
import { success_check_mark } from 'assets/images';
const SuccessModal = ({
  disabled,
  loading,
  style = {},
  email,
  visible = false,
  value,
  setValue,
  onClose = item => { },
  onPress = () => { },
}) => {
  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>

        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <Image source={success_check_mark} style={{ height: mvs(95), width: mvs(95), marginTop: mvs(50) }} />
          <Bold
            label={'Account created successfully'}
            fontSize={15} color={colors.black}
            style={{ marginTop: mvs(30) }}
          />
          <Regular
            label={'Click here to edit your profile '}
            fontSize={12} color={colors.placeholder}
            style={{ marginVertical: mvs(18), marginBottom: mvs(100) }}
            onPress={() => { }}
          />
        </View>


        <View
          disabled={disabled}
          onPress={onPress}
          style={{
            marginTop: mvs(15),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Line width={width - 37} marginVertica={10} />
          <Row>
            <Regular
              label={'Already a member? '}
              color={colors.placeholder}
              fontSize={14}
            />
            <Bold
              label={' Sign in '}
              color={colors.primary}
              fontSize={14}
              onPress={() => onClose()}
            />
          </Row>

        </View>
      </View>
    </ModalWrapper>
  );
};
export default SuccessModal;
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
