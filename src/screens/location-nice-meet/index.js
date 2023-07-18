import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {GeoLocation} from 'assets/icons';
import Regular from 'typography/regular-text';
import {mvs} from 'config/metrices';
import {colors} from 'config/colors';
import Light from 'typography/light-text';
import {PrimaryButton} from 'components/atoms/buttons';
import {navigate} from 'navigation/navigation-ref';

const LocationNiceMeet = () => {
  return (
    <View style={styles.container}>
      <GeoLocation style={{marginTop: '30%'}} />
      <Regular
        color={colors.black}
        fontSize={mvs(24)}
        label={'Hi, nice to meet you'}
        style={{marginTop: mvs(52)}}
      />
      <Light
        fontSize={mvs(12)}
        label={'Set your location to start exploring restaurants around you'}
        numberOfLines={2}
        style={{textAlign: 'center', paddingHorizontal: mvs(50)}}
      />
      <PrimaryButton
        containerStyle={{borderRadius: mvs(30), marginTop: mvs(100)}}
        title={'Use Current Location'}
        onPress={() => navigate('LocationSetup')}
      />
    </View>
  );
};
export default LocationNiceMeet;
