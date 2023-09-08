import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SplashIcon } from 'assets/icons';
import { useAppDispatch } from 'hooks/use-store';
import React from 'react';
import { View } from 'react-native';
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
              dispatch(setUserInfo(JSON.parse(user)));
              screen = 'Drawer';

            } catch (error) {
              console.log('error', error);
            }
          }
          setTimeout(() => {
            navigation?.replace(screen);
          }, 2000);
        });
      } catch (error) { }
    })();
  }, []);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: colors.primary,
    }}>
      <SplashIcon />
    </View>
  );
};
export default Splash;
