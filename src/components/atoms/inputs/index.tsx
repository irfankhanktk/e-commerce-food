import React, { useRef, useState } from 'react';
import {
  I18nManager,
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

import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppSelector } from 'hooks/use-store';
import PhoneInput from 'react-native-phone-number-input';
import Regular from 'typography/regular-text';
import { Row } from '../row';

// import DropdownModal from 'components/molecules/doctor/modals/dropdown-modal';
import { t } from 'i18next';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
type Item = { label: string; value: string };
type props = {
  isRequired?: boolean;
  onChangeText: (text: string) => void;
  onPress?: () => void;
  onPressMinus?: () => void;
  onPressIn?: () => void;
  getCallingCode?: (text: string) => void | undefined;
  value?: string;
  label?: string;
  items?: Item[];
  placeholder?: string;
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
const PrimaryInput = (props: props) => {
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
      {/* <Regular label={label} style={[styles.labelStyle, labelStyle]}>
        {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
      </Regular> */}
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
    </View>
  );
};
export default React.memo(PrimaryInput);

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
export const MessageInput = (props: props) => {
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
      <Row style={[styles.messageContainer, containerStyle]}>
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
          <Entypo
            size={20}
            name={'attachment'}
            color={colors.halfGray}
          />
        </TouchableOpacity>
      </Row>

    </>
  );
};
// export const InputWithIcon = (props: props) => {
//   const [visible, setVisible] = React.useState(false);
//   const {
//     items = [],
//     onChangeText,
//     onBlur = () => { },
//     value,
//     style,
//     containerStyle,
//     id,
//     editable,
//     error,
//     label,
//     isRequired = false,

//   } = props;
//   return (
//     <>
//       {label && (
//         <Regular label={label} style={styles.labelStyle}>
//           {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
//         </Regular>
//       )}
//       <TouchableOpacity
//         disabled={editable}
//         onPress={() => {
//           setVisible(true);
//           onBlur();
//         }}
//         style={[styles.dropDownContainer, containerStyle]}>
//         <Medium label={value} />
//         <Feather size={25} name={'chevron-down'} color={colors.black} />
//       </TouchableOpacity>
//       <Regular label={error ? `${t(error)}` : ''} style={styles.errorLabel} />
//       <DropdownModal
//         onClose={() => setVisible(false)}
//         onChangeText={(data: string) => {
//           onChangeText(data);
//           setVisible(false);
//         }}
//         value={id}
//         visible={visible}
//         items={items}
//       />
//     </>
//   );
// };

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
    placeholder = t('search_here'),
    labelStyle,
    containerStyle,
    secureTextEntry,
    keyboardType,
    error,
    onBlur,
    editable,
    disabledSearch = true,
  } = props;
  return (
    <View style={[styles.searchContainer, containerStyle]}>
      <TouchableOpacity
        disabled={disabledSearch}
        style={styles.searchIcon}
        onPress={() => { }}>
        <Feather size={mvs(22)} name={'search'} color={colors.lightGray} />
      </TouchableOpacity>
      <TextInput
        editable={editable}
        onBlur={onBlur}
        keyboardType={keyboardType}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={`${colors.border}`}
        onChangeText={onChangeText}
        style={[styles.searchTextInput, style]}
      />
      {/* <TouchableOpacity
        disabled={disabledSearch}
        style={styles.searchIcon}
        onPress={() => { }}>
        <MaterialIcons size={mvs(22)} name={'cancel'} color={colors.black} />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: mvs(1),
    // borderRadius: mvs(10),
    borderColor: colors.primary,
    height: mvs(50),
    paddingTop: mvs(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.white,
    borderRadius: mvs(15),
    borderStyle: 'solid',
    width: '100%',

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
  messageContainer: {
    alignItems: 'flex-start',
    paddingVertical: mvs(7),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.halfWhite,
    marginTop: mvs(5),
    flex: 1
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
    // width: mvs(275),
    padding: mvs(0),
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
    height: mvs(45),
    borderRadius: mvs(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width: '100%'
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
