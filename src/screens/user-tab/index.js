import {
  Carttt,
  Currency,
  Heart,
  Language,
  Location,
  Message,
  Pc,
  Refund,
  Shop,
  UserEdit,
  Wallet,
} from 'assets/icons';
import {user} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, ImageBackground, TouchableOpacity, View} from 'react-native';
import {
  deletePermanentAccount,
  getCounters,
  logout,
  onLogoutPress,
} from 'services/api/auth-api-actions';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {UTILS} from 'utils';
import styles from './styles';
import {useIsFocused, useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import AntDesign from 'react-native-vector-icons/AntDesign';

const UserTab = props => {
  const colors = useTheme().colors;
  const {dashboard_counters, userInfo} = useAppSelector(s => s?.user);
  const dispatch = useAppDispatch();
  const isFocus = useIsFocused();
  const [loading, setLoading] = React.useState(false);
  const LogOut = async () => {
    try {
      setLoading(true);
      const res = await logout();
      Alert.alert(res?.message);
      await UTILS.clearStorage();
      resetStack('Login');
    } catch (error) {
      console.log('Error===>', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  const getDashboard = async () => {
    dispatch(getCounters());
  };
  React.useEffect(() => {
    if (isFocus) getDashboard();
  }, [isFocus]);
  const deleteAccount = async () => {
    Alert.alert(
      'Warning',
      'Are you sure you want to Delete your account?. Your account will be deleted permanently and your all data will be deleted"',
      [
        {
          text: t('Cancel'),
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: t('Delete'),
          onPress: () => {
            dispatch(deletePermanentAccount());
          },
        },
      ],
    );
  };
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <View style={{...styles.topContainer, backgroundColor: colors.primary}}>
        <Row style={{marginTop: mvs(25), justifyContent: 'flex-start'}}>
          <ImageBackground
            source={
              userInfo?.avatar_original
                ? {uri: userInfo?.avatar_original}
                : user
            }
            imageStyle={{borderRadius: mvs(51 / 2)}}
            style={styles.backgroudImage}></ImageBackground>
          <View style={{flex: 1, paddingHorizontal: mvs(10)}}>
            <Regular color={colors.white} label={userInfo?.name} />
            <Regular
              fontSize={mvs(12)}
              numberOfLines={1}
              color={colors.white}
              label={userInfo?.email}
            />
          </View>
          <PrimaryButton
            loading={loading}
            onPress={() => LogOut()}
            textStyle={{color: colors.text}}
            title={t('log_out')}
            containerStyle={{
              ...styles.loginBtn,
              backgroundColor: colors.background,
            }}
          />
        </Row>
        <Row style={{marginTop: mvs(25)}}>
          <View
            style={{
              ...styles.boxContainer,
              backgroundColor: colors.background,
            }}>
            <Bold
              color={colors.text}
              label={dashboard_counters?.cart_item_count || '0'}
            />
            <Regular
              fontSize={mvs(10)}
              color={colors.text}
              label={t('in_your_cart')}
            />
          </View>
          <View
            style={{
              ...styles.boxContainer,
              backgroundColor: colors.background,
            }}>
            <Bold
              color={colors.text}
              label={dashboard_counters?.wishlist_item_count || '0'}
            />
            <Regular
              fontSize={mvs(10)}
              color={colors.text}
              label={t('in_your_wishlist')}
            />
          </View>
          <View
            style={{
              ...styles.boxContainer,
              backgroundColor: colors.background,
            }}>
            <Bold
              color={colors.text}
              label={dashboard_counters?.order_count || '0'}
            />
            <Regular
              fontSize={mvs(10)}
              color={colors.text}
              label={t('your_ordered')}
            />
          </View>
        </Row>
        <Row style={{marginTop: mvs(25)}}>
          <TouchableOpacity
            onPress={() => navigate('LanguageScreen')}
            style={{alignItems: 'center'}}>
            <View
              style={{
                ...styles.itemsContainer,
                borderRadius: mvs(56),
                backgroundColor: colors.background,
              }}>
              <Language />
            </View>
            <Regular
              color={colors.white}
              label={t('language')}
              fontSize={mvs(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <View
              style={{
                ...styles.itemsContainer,
                backgroundColor: colors.background,
              }}>
              <Currency />
            </View>
            <Regular
              color={colors.white}
              label={t('currency')}
              fontSize={mvs(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('EditProfile')}
            style={{alignItems: 'center'}}>
            <View
              style={{
                ...styles.itemsContainer,
                borderRadius: mvs(56),
                backgroundColor: colors.background,
              }}>
              <UserEdit />
            </View>
            <Regular
              color={colors.white}
              label={t('user_edit')}
              fontSize={mvs(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('AddressDetails')}
            style={{alignItems: 'center'}}>
            <View
              style={{
                ...styles.itemsContainer,
                backgroundColor: colors.background,
                borderRadius: mvs(56),
              }}>
              <Location />
            </View>
            <Regular
              color={colors.white}
              label={t('address')}
              fontSize={mvs(10)}
            />
          </TouchableOpacity>
        </Row>
        <View
          style={{...styles.boxContainer1, backgroundColor: colors.background}}>
          <Row style={{marginTop: mvs(10)}}>
            <TouchableOpacity
              onPress={() => navigate('MyWallet')}
              style={{alignItems: 'center'}}>
              <View style={styles.innerItems}>
                <Wallet />
              </View>
              <Regular
                color={colors.text}
                style={{marginTop: mvs(5)}}
                label={t('my_wallet')}
                fontSize={mvs(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('OrderHistory')}
              style={{alignItems: 'center'}}>
              <View style={styles.innerItems}>
                <Carttt />
              </View>

              <Regular
                color={colors.text}
                style={{marginTop: mvs(5)}}
                label={t('orders')}
                fontSize={mvs(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('MyWishList')}
              style={{alignItems: 'center'}}>
              <View style={styles.innerItems}>
                <Heart />
              </View>

              <Regular
                color={colors.text}
                style={{marginTop: mvs(5)}}
                label={t('my_wishlist')}
                fontSize={mvs(10)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate('RefundStatus')}
              style={{alignItems: 'center'}}>
              <View style={styles.innerItems}>
                <Refund />
              </View>

              <Regular
                color={colors.text}
                style={{marginTop: mvs(5)}}
                numberOfLines={2}
                label={t('refund_requests')}
                fontSize={mvs(10)}
              />
            </TouchableOpacity>
          </Row>
          <Row style={{marginTop: mvs(10)}}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <View style={styles.innerItems}>
                <Message />
              </View>
              <Regular
                color={colors.text}
                style={{marginTop: mvs(5)}}
                label={t('messages')}
                fontSize={mvs(10)}
              />
            </TouchableOpacity>
          </Row>
        </View>
      </View>
      <View style={{paddingHorizontal: mvs(20), marginTop: mvs(30)}}>
        <TouchableOpacity onPress={() => navigate('BrowseAllVenders')}>
          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Shop />
            <Regular
              color={colors.text}
              style={{marginLeft: mvs(20)}}
              label={t('browse_all_vendors')}
            />
          </Row>
        </TouchableOpacity>
        <Row
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: mvs(20),
          }}>
          <Pc />
          <Regular
            color={colors.text}
            style={{marginLeft: mvs(20)}}
            label={t('followed_vendors')}
          />
        </Row>
        <TouchableOpacity onPress={() => deleteAccount()}>
          <Row
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: mvs(20),
            }}>
            <AntDesign name="delete" size={25} color={colors.primary} />
            <Regular
              color={colors.text}
              style={{marginLeft: mvs(20)}}
              label={t('delete_account')}
            />
          </Row>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default UserTab;
