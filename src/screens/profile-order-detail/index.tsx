import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CrossModal, SplashIcon} from 'assets/icons';
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
import React, {useState} from 'react';
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
import OrderDetailCard from 'components/molecules/order-detail';
import {ModalWrapper} from 'components/atoms/modal-wrapper';
import ProfileReviewCard from 'components/molecules/modals/profile-review-modal';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const ProfileOrderDetail = (props: props) => {
  const [modal, setModal] = useState(false);
  console.log('🚀 ~ file: index.tsx:49 ~ ProfileOrderDetail ~ modal:', modal);
  const data = [
    {
      name: 'Haris Rehmant',
      status: 'Delivered',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
      price: 'Rs 999',
      items: '2 items',
    },
    {
      name: 'Haris Rehmant',
      status: 'Delivered',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
      price: 'Rs 999',
      items: '2 items',
    },
    {
      name: 'Haris Rehmant',
      status: 'Delivered',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
      price: 'Rs 999',
      items: '2 items',
    },
    {
      name: 'Haris Rehmant',
      status: 'Delivered',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
      price: 'Rs 999',
      items: '2 items',
    },
    {
      name: 'Haris Rehmant',
      status: 'Delivered',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
      price: 'Rs 999',
      items: '2 items',
    },
    {
      name: 'Haris Rehmant',
      status: 'Delivered',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
      price: 'Rs 999',
      items: '2 items',
    },
    {
      name: 'Haris Rehmant',
      status: 'Delivered',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
      price: 'Rs 999',
      items: '2 items',
    },
    {
      name: 'Haris Rehmant',
      status: 'Delivered',
      time: '3:30 PM',
      date: 'Mar 26, 2023',
      price: 'Rs 999',
      items: '2 items',
    },
  ];
  const {navigation} = props;
  return (
    <View style={{...styles.container}}>
      <Header1x2x
        title={''}
        close
        isSearch
        mtop={26}
        order={true}
        setModal={v => setModal(v)}
        modal={modal}
      />
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
            <OrderDetailCard item={item} index={index} />
          ))}
        </ScrollView>
      </View>
      <ProfileReviewCard onClose={() => setModal(false)} visible={modal} />
    </View>
  );
};
export default ProfileOrderDetail;
