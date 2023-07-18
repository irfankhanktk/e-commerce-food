import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SplashIcon } from 'assets/icons';
import { splash_bg } from 'assets/images';
import React from 'react';
import { Alert, ImageBackground, View } from 'react-native';
import i18n from 'translation';
import { STORAGEKEYS } from '../../config/constants';
import { setIsVisitedLocation, setLanguage, setLocation, setUserInfo } from '../../store/reducers/user-reducer';
import RootStackParamList from '../../types/navigation-types/root-stack';
import { UTILS } from 'utils';
import { useAppDispatch, useAppSelector } from 'hooks/use-store';
import styles from './styles';
import { mvs, width } from 'config/metrices';
import { getUserWishlist } from 'services/api/api-actions';
type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = (props: props) => {
  const { navigation } = props;
  const { userInfo } = useAppSelector(s => s?.user);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (userInfo?.id)
      dispatch(getUserWishlist((state) => { }));
  }, [userInfo?.id])
  React.useEffect(() => {

    (async () => {
      try {
        let screen: any = 'Login';
        UTILS.get_current_location((position) => {
          dispatch(setLocation({
            latitude: position?.coords?.latitude,
            longitude: position?.coords?.longitude
          }))

        }, (error) => {

        })
        UTILS.getItem(STORAGEKEYS.lang).then((lang: any) => {
          i18n.changeLanguage(lang);
          dispatch(setLanguage(lang ?? 'en'));
        })
        UTILS.getItem(STORAGEKEYS.location_visited).then((bool: any) => {
          dispatch(setIsVisitedLocation(bool));
        })

        //
        const isVisit = await UTILS.getItem(STORAGEKEYS.onboarding)
        if (!isVisit)
          screen = 'Onboarding';
        else {
          const data = await UTILS.getItem(STORAGEKEYS.user);
          console.log('data:::', data);

          if (data) {
            const user = JSON.parse(data);
            screen = 'Drawer';
            dispatch(setUserInfo(user));
          }
        }
        setTimeout(() => {
          navigation?.replace(screen);
        }, 2000);


      } catch (error) {

      }
    })()
  }, []);


  return (
    <View style={{ ...styles.container }}>
      <SplashIcon width={width - mvs(60)} />
    </View>
  );
};
export default Splash;