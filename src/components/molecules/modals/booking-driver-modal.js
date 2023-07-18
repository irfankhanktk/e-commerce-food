import fonts from 'assets/fonts';
import {DoneMark} from 'assets/icons';
import {ModalWrapper} from 'components/atoms/modal-wrapper';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Medium from 'typography/medium-text';

const BookingDriverModal = ({
  style,
  value,
  visible = false,
  onClose = () => {},
  onPressBookRide = () => {},
  onPressAddCart = () => {},
  onChangeText,
}) => {
  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>
        <DoneMark />
        <Medium
          style={{marginTop: mvs(20)}}
          color={colors.black}
          label={'Your driver is on the way.'}
        />
      </View>
    </ModalWrapper>
  );
};
export default BookingDriverModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: mvs(20),
  },

  container: {
    height: mvs(300),
    backgroundColor: colors.white,
    // padding: mvs(15),
    borderRadius: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
