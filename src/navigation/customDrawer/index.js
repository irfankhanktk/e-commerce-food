import * as React from 'react';
import {Alert, ImageBackground, View} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {
  Carttt,
  Heart,
  Location,
  LogOut,
  Refund,
  Shop,
  UserEdit,
  Wallet,
} from 'assets/icons';
import {IconButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {t} from 'i18next';
import {navigate, resetStack} from 'navigation/navigation-ref';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {logout} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';

const CustomDrawer = props => {
  const colors = useTheme().colors;

  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(s => s);
  const user = userInfo?.user?.userInfo;
  console.log('user check===>', user);

  const {navigation} = props;
  const [loading, setLoading] = React.useState(false);

  const logOut = async () => {
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
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo
          size={25}
          name="cross"
          color={colors.white}
          style={styles.cross}
        />
      </TouchableOpacity> */}

      <ImageBackground
        source={{
          uri: user?.avatar_original,
        }}
        style={styles.imageStyle}
        borderRadius={mvs(100)}>
        {/* <Image source={{uri: user?.profileImage}} style={styles.userImage} /> */}
      </ImageBackground>

      <Bold color={colors.text} label={user?.name} style={styles.userName} />
      <Regular
        color={colors.text}
        style={{alignSelf: 'center'}}
        label={user?.email}
      />
      <View style={styles.line} />
      <View style={styles.innerContainer}>
        <IconButton
          onPress={() => navigate('MyWallet')}
          title={t('my_wallet')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<Wallet />}
        />
        <IconButton
          onPress={() => navigate('OrderHistory')}
          title={t('orders')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<Carttt />}
        />
        <IconButton
          onPress={() => navigate('MyWishList')}
          title={t('my_wishlist')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<Heart />}
        />
        <IconButton
          onPress={() => navigate('RefundStatus')}
          title={t('refund_requests')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<Refund />}
        />
        <IconButton
          onPress={() => navigate('EditProfile')}
          title={t('edit_profile')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<UserEdit />}
        />
        <IconButton
          onPress={() => navigate('AddressDetails')}
          title={t('address')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<Location />}
        />
        <IconButton
          onPress={() => navigate('BrowseAllVenders')}
          title={t('browse_all_venders')}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<Shop />}
        />
        <IconButton
          onPress={logOut}
          title={t('log_out')}
          loading={loading}
          textStyle={{...styles.textStyle, color: colors.text}}
          containerStyle={{backgroundColor: colors.background}}
          Icon={<LogOut />}
        />
      </View>
    </View>
  );
};
export default CustomDrawer;
