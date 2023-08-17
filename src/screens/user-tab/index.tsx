import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { PrimaryButton } from 'components/atoms/buttons';
import { Loader } from 'components/atoms/loader';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppDispatch, useAppSelector } from 'hooks/use-store';
import { navigate } from 'navigation/navigation-ref';
import React from 'react';
import { Alert, Image, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  deletePermanentAccount,
  onLogoutPress,
  onUpdateProfile,
} from 'services/api/auth-api-actions';
import { postFileData } from 'services/api/hotel/api-actions';
import TabParamList from 'types/navigation-types/bottom-tab';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import { UTILS } from 'utils';
import i18n from '../../translation/index';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
import { KeyboardAvoidScrollview } from 'components/atoms/keyboard-avoid-scrollview';
type props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'UserTab'>,
  NativeStackScreenProps<RootStackParamList>
>;
const UserTab = (props: props) => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;

  const dispatch = useAppDispatch();
  const { t } = i18n;
  const [imagegallery, setImageGallery] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const ImageUpload = async () => {
    try {
      const img = await UTILS._returnImageGallery();
      const file = await postFileData({ file: img, type: 'image' });
      const data = { ...userInfo };
      delete data.roles;
      delete data.role;
      dispatch(
        onUpdateProfile(
          { ...data, avatar_id: file?.data?.data?.id },
          setLoading,
          props,
        ),
      );
    } catch (error) {
      Alert.alert('Error', UTILS?.returnError(error));
    }
  };
  const deleteAcc = async () => {
    Alert.alert(
      'Warning!',
      'Are you sure you want to Delete your account?. Your account will be deleted permanently and your all data will be deleted',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            dispatch(deletePermanentAccount());
          },
        },
      ],
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{ backgroundColor: colors.primary, paddingVertical: mvs(30) }}>

          <View style={{ ...styles.img }}>
            {loading ? (
              <Loader color={colors.white} />
            ) : (
              <Image
                source={
                  userInfo?.avatar_id ? { uri: `${userInfo?.avatar_id}` } : null
                }
                style={styles.imgUpload}
                resizeMode="contain"
              />
            )}
            {userInfo?.id && (
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  borderRadius: mvs(10),
                  position: 'absolute',
                  right: mvs(-10),
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => ImageUpload()}>
                <MaterialIcons name="edit" color={colors.black} size={mvs(20)} />
              </TouchableOpacity>
            )}
          </View>
          <Medium label={userInfo?.name || t('guest_mode')} style={styles.name} />
          <Regular
            label={`${userInfo?.email || 'guest@gmail.com'}`}
            style={styles.email}
          />

          <PrimaryButton
            containerStyle={styles.dashboardBtn}
            textStyle={{ color: colors.black }}
            onPress={() => navigate('Dashboard')}
            title={t('dashboard')}
          />
        </View>
        <KeyboardAvoidScrollview contentContainerStyle={styles.scrollview}>

          <View >
            {userInfo && (
              <TouchableOpacity
                style={styles.itemtabs}
                onPress={() => props?.navigation?.navigate('UpdatePassword')}>
                <FontAwesome name="key" size={mvs(22)} color={colors.primary} />
                <Regular
                  style={styles.itemText1}
                  label={`${t('update_password')}`}
                />
              </TouchableOpacity>
            )}
            {userInfo && (
              <TouchableOpacity
                style={styles.itemtabs}
                onPress={() => props?.navigation?.navigate('MyBookingList')}>
                <FontAwesome name="key" size={mvs(22)} color={colors.primary} />
                <Regular style={styles.itemText1} label={`${t('my_bookings')}`} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.itemtabs}
              onPress={() => props?.navigation?.navigate('LanguageScreen')}>
              <FontAwesome5 name="globe" size={mvs(22)} color={colors.primary} />
              <Regular
                style={styles.itemText1}
                label={`${t('choose_language')}`}
              />
            </TouchableOpacity>
            {userInfo && (
              <TouchableOpacity
                style={styles.itemtabs}
                onPress={() => navigate('UpdateProfile')}>
                <FontAwesome5
                  name="user-edit"
                  size={mvs(22)}
                  color={colors.primary}
                />
                <Regular
                  style={styles.itemText1}
                  label={`${t('update_profile')}`}
                />
              </TouchableOpacity>
            )}
            {userInfo?.role?.name === 'Doctor' ? (
              <TouchableOpacity
                style={styles.itemtabs}
                onPress={() => props?.navigation?.navigate('AvailabilityList')}>
                <Ionicons
                  name="timer-outline"
                  size={mvs(22)}
                  color={colors.primary}
                />
                <Regular
                  style={styles.itemText1}
                  label={`${t('availabilities')}`}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.itemtabs}
                onPress={() => navigate('Recovery')}>
                <Ionicons
                  name="timer-outline"
                  size={mvs(22)}
                  color={colors.primary}
                />
                <Regular style={styles.itemText1} label={`${t('recovery')}`} />
              </TouchableOpacity>
            )}
            {userInfo && (
              <TouchableOpacity
                style={styles.itemtabs}
                onPress={() => deleteAcc()}>
                <MaterialCommunityIcons
                  name="account-cancel"
                  size={mvs(28)}
                  color={colors.red}
                />
                <Regular
                  style={styles.itemText1}
                  label={`${t('delete_account')}`}
                />
              </TouchableOpacity>
            )}
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',

                width: '100%',
                paddingBottom: mvs(60),
              }}>
              <TouchableOpacity
                style={styles.logouttab}
                onPress={() =>
                  userInfo
                    ? dispatch(onLogoutPress(props))
                    : props?.navigation?.navigate('Login')
                }>
                <AntDesign
                  name={`${userInfo ? 'logout' : 'login'}`}
                  size={mvs(22)}
                  color={colors.red}
                />
                <Regular
                  style={styles.itemText1}
                  label={`${t(userInfo ? 'logout' : 'login')}`}
                />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidScrollview>
      </View>
    </View>
  );
};
export default UserTab;
