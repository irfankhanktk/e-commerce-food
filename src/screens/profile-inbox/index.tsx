import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SplashIcon} from 'assets/icons';
import {
  eye,
  profile,
  left,
  profile_pic,
  orders_plus,
  orders,
  inbox,
  setting,
  mobile,
  lock,
  profile_mobile,
  menue,
} from 'assets/images';
import React from 'react';
import {ImageBackground, Image, View, Alert, ScrollView} from 'react-native';
import i18n from 'translation';
import {STORAGEKEYS} from '../../config/constants';
import {
  setLanguage,
  setLocation,
  setUserInfo,
} from '../../store/reducers/user-reducer';
import RootStackParamList from '../../types/navigation-types/root-stack';
import {UTILS} from 'utils';
import {useAppDispatch} from 'hooks/use-store';
import styles from './styles';
import Medium from 'typography/medium-text';
import Bold from 'typography/bold-text';
import {Row} from 'components/atoms/row';
import {mvs, width} from 'config/metrices';
import {colors} from 'config/colors';
import Regular from 'typography/regular-text';
import Line from 'components/atoms/line';
import MeCard from 'components/molecules/me-card';
import {insertBatch} from 'services/firebase';
import ProfileCard from 'components/molecules/profile-card';
import {PrimaryButton} from 'components/atoms/buttons';
import Headers from 'components/atoms/headers';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import HomeHeader from 'components/atoms/headers/home-header';
import ReactProfileInboxCard from 'components/molecules/profile-inbox-card';
import ProfileInboxCard from 'components/molecules/profile-inbox-card';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const ProfileInbox = (props: props) => {
  const data = [
    {
      name: 'Haris Rehmant',
      description:
        'Nulla pulvinar ex id orci tempor, id accumsan metus pretium. Proin mollis venenatis magn...',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
    },
    {
      name: 'Haris Rehmant',
      description:
        'Nulla pulvinar ex id orci tempor, id accumsan metus pretium. Proin mollis venenatis magn...',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
    },
    {
      name: 'Haris Rehmant',
      description:
        'Nulla pulvinar ex id orci tempor, id accumsan metus pretium. Proin mollis venenatis magn...',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
    },
    {
      name: 'Haris Rehmant',
      description:
        'Nulla pulvinar ex id orci tempor, id accumsan metus pretium. Proin mollis venenatis magn...',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
    },
    {
      name: 'Haris Rehmant',
      description:
        'Nulla pulvinar ex id orci tempor, id accumsan metus pretium. Proin mollis venenatis magn...',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
    },
    {
      name: 'Haris Rehmant',
      description:
        'Nulla pulvinar ex id orci tempor, id accumsan metus pretium. Proin mollis venenatis magn...',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
    },
    {
      name: 'Haris Rehmant',
      description:
        'Nulla pulvinar ex id orci tempor, id accumsan metus pretium. Proin mollis venenatis magn...',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
    },
    {
      name: 'Haris Rehmant',
      description:
        'Nulla pulvinar ex id orci tempor, id accumsan metus pretium. Proin mollis venenatis magn...',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
    },
  ];
  const {navigation} = props;
  return (
    <View style={{...styles.container}}>
      <Header1x2x title={''} close isSearch mtop={26} />
      <Row style={{paddingHorizontal: mvs(39), paddingTop: mvs(37)}}>
        <Regular label={'recent'} />
        <Image source={menue} style={{height: 15, width: 25}} />
      </Row>
      <View
        style={{
          paddingHorizontal: mvs(20),
          paddingTop: mvs(21),
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, paddingBottom: mvs(222)}}>
          {data.map((item, index) => (
            <ProfileInboxCard item={item} index={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default ProfileInbox;
