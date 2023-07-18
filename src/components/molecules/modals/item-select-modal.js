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
import Icon from 'react-native-vector-icons/AntDesign';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {mvs} from 'config/metrices';
import {HomeImage} from 'assets/images';
import Bold from 'typography/bold-text';
import Light from 'typography/light-text';
import fonts from 'assets/fonts';

const ItemSelectModal = ({
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
        <TouchableOpacity onPress={() => onClose()} style={styles.bar} />
        <ImageBackground
          borderRadius={mvs(20)}
          source={HomeImage}
          style={styles.backGroundImage}>
          <Image source={HomeImage} style={styles.innerImage} />
        </ImageBackground>
        <View style={{paddingHorizontal: mvs(15), marginTop: mvs(15)}}>
          <Bold label={'Olive Oil-Fried Egg'} />
          <Light
            style={{marginTop: mvs(5)}}
            numberOfLines={2}
            label={
              'A fried egg is a cooked dish made from one or more eggs whic...'
            }
            fontSize={mvs(10)}
          />
          <Row style={{marginTop: mvs(20)}}>
            <IconButton
              onPress={onPressBookRide}
              containerStyle={styles.btn}
              icon="car"
              title="Book a ride"
              textStyle={styles.btnText}
            />
            <IconButton
              onPress={onPressAddCart}
              containerStyle={styles.btn}
              icon="shopping-cart"
              title="Add to cart"
              textStyle={styles.btnText}
            />
          </Row>
        </View>
      </View>
    </ModalWrapper>
  );
};
export default ItemSelectModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: mvs(20),
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
    width: '100%',
    height: mvs(190),
  },
  btn: {
    width: '48%',
    height: mvs(40),
    borderRadius: mvs(0),
  },
  innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
  btnText: {fontSize: mvs(14), fontFamily: fonts.bold},
});
