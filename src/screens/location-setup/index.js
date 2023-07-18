import {CrossButton} from 'assets/icons';
import CustomMap from 'components/atoms/custom-map';
import ConformLocationBottomSheet from 'components/molecules/modals/location-conform-bottomsheet';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {setIsVisitedLocation} from 'store/reducers/user-reducer';
import i18n from 'translation';
import styles from './styles';
import {UTILS} from 'utils';
import {STORAGEKEYS} from 'config/constants';

const LocationSetup = props => {
  const {location} = useAppSelector(s => s?.user);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(setIsVisitedLocation('1'));
    UTILS.setItem(STORAGEKEYS.location_visited, '1');
  }, []);
  // console.log('location:::', location);

  const {t} = i18n;
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {/* <GoogleSearchBar /> */}
        <TouchableOpacity onPress={() => {}} style={styles.backButton}>
          <CrossButton />
        </TouchableOpacity>
        <CustomMap>
          {/* <Marker
            coordinate={region}
            title="Marker Title"
            description="Marker Description"
          /> */}
        </CustomMap>
        <ConformLocationBottomSheet
          address={location?.fulladdress?.slice(0, 20) || '-----'}
        />
      </View>
    </View>
  );
};
export default LocationSetup;
