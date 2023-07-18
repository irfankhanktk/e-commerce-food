import {
  eye,
  inbox,
  left,
  orders,
  orders_plus,
  profile,
  profile_pic,
  setting,
} from 'assets/images';
import Line from 'components/atoms/line';
import MeCard from 'components/molecules/me-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import {onLogoutPress} from 'services/api/auth-api-actions';
import Bold from 'typography/bold-text';
import styles from './styles';

const Me = props => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;

  const data = [
    {
      screen: 'Profile',
      image: profile_pic,
      name: userInfo?.fullName || userInfo?.userName,
      title: 'Edit Profile',
      icon: eye,
    },
    {screen: 'Profile', image: profile, title: 'Profile', icon: left},
    {screen: 'ProfileInbox', image: inbox, title: 'Inbox', icon: left},
    {
      screen: 'ProfileOrderDetail',
      image: orders_plus,
      title: 'Orders',
      icon: left,
    },
    {screen: 'ProfileOrderDetail', image: orders, title: 'Orders', icon: left},
    {screen: 'Profile', image: setting, title: 'Setting', icon: left},
  ];
  const {navigation} = props;
  return (
    <View style={{...styles.container}}>
      {data.map((item, index) => (
        <>
          <MeCard
            item={item}
            key={index}
            onPress={() => navigate(item?.screen)}
          />
          <Line marginVertica={item?.icon === eye ? 25 : 13} />
        </>
      ))}
      <TouchableOpacity
        onPress={() => dispatch(onLogoutPress())}
        style={styles.logout}>
        <Bold label={'Log Out'} color={colors.primary} fontSize={mvs(15)} />
      </TouchableOpacity>
    </View>
  );
};
export default Me;
