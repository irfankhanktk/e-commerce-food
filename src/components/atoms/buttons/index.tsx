import * as BTN_ICONS_SVG from 'assets/icons/button-icon';
import { FaceBook, Google } from 'assets/images';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import Regular from '../../../typography/regular-text';
import { Loader } from '../loader';
import { Row } from '../row';

type props = {
  onPress: () => void
  title: string
  icon?: string,
  disabled?: boolean
  loading?: boolean
  textStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<ViewStyle>,
  left?: 'HomeIcon' | 'Clock' | 'Company' | 'MapPlus' | 'Pen' | 'RightArrow' | undefined,
  right?: 'HomeIcon' | 'Clock' | 'Company' | 'MapPlus' | 'Pen' | 'RightArrow' | undefined,
}
export const PlusButton = (props: props) => {
  const { onPress, title, containerStyle } = props;
  return (
    <TouchableOpacity
      style={[styles.plusContainer, containerStyle]}
      onPress={onPress}>
      <Regular style={styles.plusText} label={'+'} />
    </TouchableOpacity>
  );
};
export const ButtonArrow = (props: props) => {
  const {
    onPress,
    title,
    containerStyle,
  } = props;
  return (
    <TouchableOpacity style={[styles.btnArrow, containerStyle]} onPress={onPress}>
      <Row>
        <Medium fontSize={mvs(12)} color={colors.black} label={title} />
        <Icon size={mvs(20)} color={colors.darkBlack} name={'angle-right'} />
      </Row>
    </TouchableOpacity>
  )
};
export const ButtonIcons = (props: props) => {
  const {
    onPress,
    title,
    subTitle,
    containerStyle,
    left = undefined,
    right = undefined,
  } = props;
  const LeftIcon = BTN_ICONS_SVG[left as keyof typeof BTN_ICONS_SVG];
  const RightIcon = BTN_ICONS_SVG[right as keyof typeof BTN_ICONS_SVG];
  return (
    <TouchableOpacity style={[styles.btnIcons, containerStyle]} onPress={onPress}>
      <Row style={{ alignItems: 'center' }}>
        {left && <LeftIcon height={mvs(20)} width={mvs(20)} />}
        <View style={{ flex: 1, marginHorizontal: mvs(20) }}>
          <Medium fontSize={mvs(12)} color={colors.black} label={title} />
          <Regular style={{ lineHeight: mvs(16) }} fontSize={mvs(12)} color={colors.placeholder} label={subTitle} />
        </View>
        {right && <RightIcon height={mvs(15)} width={mvs(15)} />}
      </Row>
    </TouchableOpacity>
  )
};
export const PrimaryButton = (props: props) => {
  const { onPress, title, disabled, loading, textStyle, containerStyle } = props;
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[
        styles.primaryContainer,
        { backgroundColor: `${colors.primary}${disabled ? '50' : ''}` },
        containerStyle,
      ]}
      onPress={onPress}>
      {loading ? (
        <Loader color={colors.white} />
      ) : (
        <Bold style={[styles.primaryText, textStyle]} label={title} />
      )}
    </TouchableOpacity>
  );
};
export const SocialButton = (props: props) => {
  const { onPress, title, facebook, loading, textStyle, containerStyle } = props;
  return (
    <TouchableOpacity
      style={[styles.socialContainer, containerStyle]}
      onPress={onPress}>
      {facebook ? (
        <Image source={FaceBook} style={styles.svgIcon} />
      ) : (
        <Image source={Google} style={styles.svgIcon} />
      )}
      <Bold style={[styles.primaryText, textStyle]} label={title} />
    </TouchableOpacity>
  );
};
export const IconButton = (props: props) => {
  const {
    onPress,
    title,
    disabled,
    loading,
    textStyle,
    icon = 'user',
    containerStyle,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[
        styles.iconContainer,
        { backgroundColor: `${colors.primary}${disabled ? '50' : ''}` },
        containerStyle,
      ]}
      onPress={onPress}>
      <Icon color={colors.white} name={icon} size={20} />
      {loading ? (
        <Loader color={colors.white} />
      ) : (
        <Bold style={[styles.iconText, textStyle]} label={title} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  plusContainer: {
    position: 'absolute',
    bottom: mvs(40),
    ...colors.shadow,
    backgroundColor: colors.primary,
    right: mvs(20),
    justifyContent: 'center',
    alignItems: 'center',
    width: mvs(50),
    height: mvs(50),
    borderRadius: mvs(50 / 2),
  },
  plusText: {
    color: colors.white,
    fontSize: mvs(25),
    alignSelf: 'center',
  },
  primaryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: '100%',
    height: mvs(54),
    borderRadius: mvs(7),
  },
  socialContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: '100%',
    height: mvs(54),
    flexDirection: 'row',
    paddingLeft: mvs(20),
    borderRadius: mvs(7),
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    height: mvs(80),
    paddingHorizontal: mvs(15),
    width: '49%',
    borderRadius: mvs(10),
  },
  primaryText: {
    color: colors.white,
  },
  svgIcon: {
    width: mvs(30),
    height: mvs(30),
  },
  iconText: {
    color: colors.white,
    marginHorizontal: mvs(10),
    fontSize: mvs(18),
    lineHeight: mvs(22),
  },
  btnArrow: {
    paddingVertical: mvs(18),
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
  btnIcons: {

    paddingVertical: mvs(13),
    borderColor: colors.border,
    borderBottomWidth: 1,
  },
});
