import React, { useRef, useState } from 'react';
import {
  I18nManager,
  Image,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { menue } from 'assets/images';
import DropdownModal from 'components/molecules/modals/dropdown-modal';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppSelector } from 'hooks/use-store';
import { t } from 'i18next';
import PhoneInput from 'react-native-phone-number-input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import { Row } from '../row';
type Item = { label: string; value: string };
type props = {
  isRequired?: boolean;
  close?: boolean;
  onChangeText: (text: string) => void;
  onPress?: () => void;
  onPressMinus?: () => void;
  handleMenue?: () => void;
  onPressIn?: () => void;
  getCallingCode?: (text: string) => void | undefined;
  value?: string;
  label?: string;
  items?: Item[];
  placeholder?: string;
  isIcon?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  mainContainer?: StyleProp<ViewStyle>;
  errorStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean | undefined;
  ref?: React.LegacyRef<PhoneInput> | undefined;
  defaultCode?: 'PK';
  layout?: 'first';
  isPassword?: boolean;
  editable?: boolean;
  disabledSearch?: boolean;
  error?: string;
  id?: any;
  mtop?: number;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?: (e?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};
export const InputPresciption = (props: props) => {
  const [secure, setSecure] = useState(true);
  const { language } = useAppSelector(s => s.user);
  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = 'type here',
    labelStyle,
    containerStyle,
    errorStyle,
    secureTextEntry,
    isPassword,
    keyboardType,
    error,
    editable = true,
    onBlur = () => { },
    onPressIn = () => { },
    onPressMinus = () => { },
    isRequired = false,
  } = props;
  return (
    <>
      <Row style={{ alignItems: 'center' }}>
        <Regular label={label} style={[styles.labelStyle, labelStyle]} />
        <TouchableOpacity onPress={onPressMinus}>
          <AntDesign name="minuscircle" color={colors.primary} size={mvs(14)} />
        </TouchableOpacity>
      </Row>
      <View style={[styles.Container, containerStyle]}>
        <TextInput
          editable={editable}
          onBlur={onBlur}
          onPressIn={onPressIn}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          value={value}
          placeholderTextColor={`${colors.lightGray}`}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            styles.textInput,
            style,
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
          ]}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}>
            <Feather
              size={25}
              name={secure ? 'eye' : 'eye-off'}
              color={colors.black}
            />
          </TouchableOpacity>
        )}
      </View>
      <Regular
        label={error ? error : ''}
        style={[styles.errorLabel, errorStyle]}
      />
    </>
  );
};
export const PrimaryInput = (props: props) => {
  const [secure, setSecure] = useState(true);
  const { language } = useAppSelector(s => s.user);
  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = 'type here',
    labelStyle,
    containerStyle,
    errorStyle,
    secureTextEntry,
    isIcon = true,
    isPassword,
    keyboardType,
    error,
    mainContainer,
    editable = true,
    onBlur = () => { },
    onPressIn = () => { },
    isRequired = false,
  } = props;
  return (
    <View style={[mainContainer]}>
      {
        <Regular label={label} style={[styles.labelStyle, labelStyle]}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      }
      <View style={[styles.Container, containerStyle]}>
        {isPassword ? (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}>
            <Feather
              size={20}
              name={secure ? 'lock' : 'unlock'}
              color={colors.placeholder}
            />
          </TouchableOpacity>
        ) : (isIcon &&
          <View style={styles.PasswordIcon}>
            <Feather size={20} name={'mail'} color={colors.placeholder} />
          </View>
        )}

        <TextInput
          editable={editable}
          onBlur={onBlur}
          onPressIn={onPressIn}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          value={value}
          placeholderTextColor={`${colors.placeholder}`}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            styles.textInput,
            style,
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
          ]}
        />
      </View>
      <Regular
        label={error ? error : ''}
        style={[styles.errorLabel, errorStyle]}
      />
    </View>
  );
};
export const ProfileInPut = (props: props) => {
  const [secure, setSecure] = useState(true);
  const { language } = useAppSelector(s => s.user);
  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = 'type here',
    labelStyle,
    containerStyle,
    errorStyle,
    secureTextEntry,
    isPassword,
    keyboardType,
    error,
    mainContainer,
    editable = true,
    onBlur = () => { },
    onPressIn = () => { },
    isRequired = false,
  } = props;
  return (
    <View style={[mainContainer]}>
      <TextInput
        editable={editable}
        onBlur={onBlur}
        onPressIn={onPressIn}
        keyboardType={keyboardType}
        secureTextEntry={isPassword && secure}
        value={value}
        placeholderTextColor={`${colors.placeholder}`}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[
          styles.textInput,
          style,
          { textAlign: I18nManager.isRTL ? 'right' : 'left' },
        ]}
      />
      {/* <Regular
        label={error ? error : ''}
        style={[styles.errorLabel, errorStyle]}
      /> */}
    </View>
  );
};
// export default React.memo(PrimaryInput);

export const CommentInput = (props: props) => {
  const {
    onChangeText,
    onPress = () => { },
    value,
    style,
    placeholder = 'Write Message',
    containerStyle,
    isPassword,
    keyboardType,
    error,
    onBlur = () => { },
  } = props;
  return (
    <>
      <View style={[styles.commentContainer, containerStyle]}>
        <TextInput
          onBlur={onBlur}
          keyboardType={keyboardType}
          value={value}
          placeholderTextColor={`${colors.black}50`}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.textInput, style]}
        />
        <TouchableOpacity style={styles.PasswordIcon} onPress={onPress}>
          <Feather
            size={20}
            name={value?.trim()?.length ? 'send' : 'mic'}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
      <Regular label={error ? error : ''} style={styles.errorLabel} />
    </>
  );
};
export const InputWithIcon = (props: props) => {
  const [visible, setVisible] = React.useState(false);
  const {
    items = [],
    onChangeText,
    onBlur = () => { },
    value,
    style,
    containerStyle,
    id,
    editable,
    error,
    label,
    isRequired = false,
  } = props;
  return (
    <>
      {label && (
        <Regular label={label} style={styles.labelStyle}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <TouchableOpacity
        disabled={editable}
        onPress={() => {
          setVisible(true);
          onBlur();
        }}
        style={[styles.dropDownContainer, containerStyle]}>
        <Medium label={value} />
        <Feather size={25} name={'chevron-down'} color={colors.black} />
      </TouchableOpacity>
      <Regular label={error ? `${t(error)}` : ''} style={styles.errorLabel} />
      <DropdownModal
        onClose={() => setVisible(false)}
        onChangeText={onChangeText}
        value={id}
        visible={visible}
        items={items}
      />
    </>
  );
};

export const PrimaryPhoneInput = (props: props) => {
  const phoneRef = useRef<PhoneInput>(null);
  const {
    onChangeText = t => { },
    getCallingCode = t => { },
    value,
    style,
    label,
    placeholder = 'Enter phone number',
    labelStyle,
    containerStyle,
    secureTextEntry,
    isPassword,
    keyboardType,
    error,
    ref,
    layout = 'first',
    defaultCode = 'PK',
    onBlur,
  } = props;
  return (
    <>
      <PhoneInput
        ref={phoneRef}
        value={value}
        defaultCode={defaultCode}
        layout={'first'}
        onChangeText={t => {
          onChangeText(t);
          const code = phoneRef.current?.getCallingCode();
          if (code) getCallingCode(code);
        }}
        placeholder={placeholder}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textContainerStyle}
        textInputStyle={styles.textInputStyle}
        codeTextStyle={styles.codeTextStyle}
      />
      <Regular label={error} style={styles.errorLabel} />
    </>
  );
};
export const SearchInput = (props: props) => {
  const [secure, setSecure] = useState(true);
  const {
    onChangeText,
    value,
    style,
    label,
    handleMenue,
    placeholder = t('search here'),
    labelStyle,
    containerStyle,
    secureTextEntry,
    keyboardType,
    error,
    onBlur,
    close = false,
    mtop = 0,
    editable,
    disabledSearch = true,
  } = props;
  return (
    <View
      style={[
        styles.searchContainer,
        { marginTop: mvs(mtop || 0) },
        containerStyle,
      ]}>
      <TouchableOpacity
        disabled={disabledSearch}
        style={styles.searchIcon}
        onPress={() => { }}>
        <Feather size={mvs(22)} name={'search'} color={colors.placeholder} />
      </TouchableOpacity>
      <TextInput
        editable={editable}
        onBlur={onBlur}
        keyboardType={keyboardType}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={`${colors.grey}`}
        onChangeText={onChangeText}
        style={[styles.searchTextInput, style]}
      />
      {!close && (
        <TouchableOpacity
          style={styles.searchIcon}
          onPress={handleMenue}>
          <Image source={menue} style={{ height: mvs(15), width: mvs(25) }} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: mvs(0.5),
    borderColor: colors.placeholder,
    height: mvs(50),
    paddingTop: mvs(5),
    borderRadius: mvs(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.white,
    ...colors.shadow,
  },
  profileContainer: {
    borderWidth: mvs(0.5),
    borderColor: 'green',
    height: mvs(50),
    paddingTop: mvs(5),
    borderRadius: mvs(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.white,
  },
  commentContainer: {
    alignItems: 'flex-start',
    borderWidth: mvs(0.7),
    // height: mvs(36),
    paddingVertical: mvs(7),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.secondary,
    marginTop: mvs(5),
  },
  dropDownContainer: {
    // borderWidth: mvs(0.7),
    height: mvs(50),
    alignItems: 'center',
    marginBottom: mvs(10),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.secondary,
  },
  phoneContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    height: mvs(56),
    borderRadius: mvs(10),
    overflow: 'hidden',
  },
  textContainerStyle: { backgroundColor: colors.white },
  textInput: {
    color: colors.black,
    textAlignVertical: 'center',
    fontSize: mvs(18),
    flex: 1,
    height: mvs(40),
    padding: mvs(5),
  },
  textInputStyle: {
    color: colors.primary,
    height: mvs(56),
    backgroundColor: colors.white,
    margin: 0,
    fontSize: mvs(17),
  },
  codeTextStyle: {
    color: colors.primary,
    fontSize: mvs(17),
  },
  labelStyle: {
    alignSelf: 'flex-start',
    color: colors.primary,
    marginBottom: mvs(3),
    paddingHorizontal: mvs(5),
  },
  PasswordIcon: {
    alignSelf: 'center',
    paddingHorizontal: mvs(5),
  },
  errorLabel: {
    // alignSelf: 'flex-start',
    color: colors.red,
    // backgroundColor: 'red',
    fontSize: mvs(10),
    marginBottom: mvs(5),
    height: mvs(15),
    marginHorizontal: mvs(5),
  },
  searchContainer: {
    height: mvs(40),
    borderRadius: mvs(15),
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(16.5),
    backgroundColor: colors.white,
    alignItems: 'center',
    // ...colors.shadow,
  },
  searchIcon: {
    // backgroundColor: colors.primary,
    borderRadius: mvs(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTextInput: {
    color: colors.black,
    textAlignVertical: 'center',
    height: mvs(36),
    fontSize: mvs(14),
    flex: 1,
    paddingHorizontal: mvs(10),
    padding: mvs(0),
  },
  secondaryErrorLabel: {
    alignSelf: 'flex-start',
    color: colors.primary,
    fontSize: mvs(10),
    marginBottom: mvs(10),
    marginHorizontal: mvs(5),
  },
});