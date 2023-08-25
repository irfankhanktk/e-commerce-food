import * as React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import Bold from 'typography/bold-text';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import Regular from 'typography/regular-text';
import {
  Carttt,
  Edit,
  Heart,
  Location,
  Refund,
  Shop,
  ShoppingBag,
  UserEdit,
  Wallet,
} from 'assets/icons';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';

const CustomDrawer = props => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(s => s);
  // console.log('userInfo me check====>', userInfo.user.userInfo);
  const user = userInfo?.user?.userInfo;
  const {navigation} = props;
  return (
    <View style={styles.container}>
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
          uri: 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
        }}
        style={styles.imageStyle}
        borderRadius={mvs(100)}>
        {/* <Image source={{uri: user?.profileImage}} style={styles.userImage} /> */}
      </ImageBackground>

      <Bold
        color={colors.darkBlack}
        label={'Paul K. Jrnsen'}
        style={styles.userName}
      />
      <Regular
        color={colors.darkBlack}
        style={{alignSelf: 'center'}}
        label={'customer@gmail.com'}
      />
      <View style={styles.line} />
      <View style={styles.innerContainer}>
        <IconButton
          onPress={() => navigate('MyWallet')}
          title={t('my_wallet')}
          textStyle={styles.textStyle}
          containerStyle={{backgroundColor: 'white'}}
          Icon={<Wallet />}
        />
        <IconButton
          onPress={() => navigate('OrderHistory')}
          title={t('orders')}
          textStyle={styles.textStyle}
          containerStyle={{backgroundColor: 'white'}}
          Icon={<Carttt />}
        />
        <IconButton
          onPress={() => navigate('MyWishList')}
          title={t('my_wishlist')}
          textStyle={styles.textStyle}
          containerStyle={{backgroundColor: 'white'}}
          Icon={<Heart />}
        />
        <IconButton
          onPress={() => navigate('RefundStatus')}
          title={t('refund_status')}
          textStyle={styles.textStyle}
          containerStyle={{backgroundColor: 'white'}}
          Icon={<Refund />}
        />
        <IconButton
          onPress={() => navigate('EditProfile')}
          title={t('edit_profile')}
          textStyle={styles.textStyle}
          containerStyle={{backgroundColor: 'white'}}
          Icon={<UserEdit />}
        />
        <IconButton
          onPress={() => navigate('AddressDetails')}
          title={t('address')}
          textStyle={styles.textStyle}
          containerStyle={{backgroundColor: 'white'}}
          Icon={<Location />}
        />
        <IconButton
          onPress={() => navigate('BrowseAllVenders')}
          title={t('browse_all_venders')}
          textStyle={styles.textStyle}
          containerStyle={{backgroundColor: 'white'}}
          Icon={<Shop />}
        />
      </View>
    </View>
  );
};
export default CustomDrawer;
