import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import {ModalWrapper} from 'components/atoms/modal-wrapper';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import React from 'react';
import {
  ImageBackground,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {mvs} from 'config/metrices';
import {HomeImage, ProfileImage} from 'assets/images';
import Bold from 'typography/bold-text';
import Light from 'typography/light-text';
import fonts from 'assets/fonts';

const BookingRideModal = ({
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
        <View style={{paddingHorizontal: mvs(15), marginTop: mvs(15)}}>
          <Bold label={'Arriving'} color={colors.placeholder} />
          <Row
            style={{
              width: '100%',
              marginTop: mvs(10),
              alignItems: 'center',
            }}>
            <Row
              style={{
                flex: 1,
                justifyContent: 'flex-start',
              }}>
              <ImageBackground
                borderRadius={mvs(100)}
                source={ProfileImage}
                style={styles.backGroundImage}>
                {/* <Image source={HomeImage} style={styles.innerImage} /> */}
              </ImageBackground>
              <View style={{padding: mvs(6), flex: 1}}>
                <Medium fontSize={12} label={'Cameron Williamson sd'} />
                <Bold
                  numberOfLines={2}
                  fontSize={12}
                  label={'Audi A58745'}
                  color={colors.placeholder}
                />
              </View>
            </Row>
            <Row>
              <View style={styles.iconView}>
                <Ionicons name={'call'} size={20} color={colors.primary} />
              </View>
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <AntDesign name={'message1'} size={20} color={colors.primary} />
              </View>
            </Row>
          </Row>
        </View>
      </View>
    </ModalWrapper>
  );
};
export default BookingRideModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: mvs(20),
    paddingBottom: mvs(20),
  },

  title: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: mvs(20),
    color: colors.primary,
  },

  rowRating: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: mvs(20),
  },
  rateTxt: {
    marginLeft: mvs(10),
    lineHeight: mvs(20),
    color: colors.black,
    fontSize: mvs(16),
  },
  container: {
    height: mvs(355),
    backgroundColor: colors.white,
    // padding: mvs(15),
    borderRadius: mvs(10),
  },
  backGroundImage: {
    width: mvs(65),
    height: mvs(65),
  },
  btn: {
    width: '48%',
    height: mvs(40),
    borderRadius: mvs(0),
  },
  innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
  btnText: {fontSize: mvs(14), fontFamily: fonts.bold},
  iconView: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
