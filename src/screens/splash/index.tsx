import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SplashIcon } from 'assets/icons';
import { useAppDispatch } from 'hooks/use-store';
import React from 'react';
import { Image, View } from 'react-native';
import { getNotifications, getUserInfo } from 'services/api/auth-api-actions';
import i18n from 'translation';
import { UTILS } from 'utils';
import { STORAGEKEYS } from '../../config/constants';
import {
  setLanguage,
  setLocation,
  setUserInfo,
} from '../../store/reducers/user-reducer';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
import { useTheme } from '@react-navigation/native';
import { logo } from 'assets/images';
import { mvs } from 'config/metrices';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = (props: props) => {
  const colors = useTheme().colors;

  const { navigation } = props;
  const dispatch = useAppDispatch();
  const loadNotifications = async () => {
    try {
      dispatch(getNotifications());
    } catch (error) {
      console.log('error=>', error);
    }
  };
  React.useEffect(() => {
    (async () => {
      try {
        let screen: any = 'Login';
        UTILS.get_current_location(
          position => {
            dispatch(
              setLocation({
                latitude: position?.coords?.latitude,
                longitude: position?.coords?.longitude,
              }),
            );
          },
          error => { },
        );
        UTILS.getItem(STORAGEKEYS.lang).then((lang: any) => {
          i18n.changeLanguage(lang);
          dispatch(setLanguage(lang ?? 'en'));
        });

        UTILS.getItem(STORAGEKEYS.user).then(async (user: any) => {
          if (user) {
            try {
              const dataUser = JSON.parse(user)
              // console.log('data user check============>', dataUser);
              dispatch(setUserInfo(dataUser));
              if (dataUser?.type === 'customer') {
                screen = 'Drawer';
              } else {
                screen = 'AdminDashBoard'
              }

            } catch (error) {
              console.log('error', error);
            }
          }
          setTimeout(() => {
            navigation?.replace(screen);
          }, 12000);
        });
      } catch (error) { }
    })();
  }, []);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: colors.white,
    }}>
      {/* <SplashIcon /> */}
      <Image source={logo}/>
    </View>
  );
};
export default Splash;
