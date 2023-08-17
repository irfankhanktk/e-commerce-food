import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Geocoder from 'react-native-geocoding';

import { SplashIcon } from 'assets/icons';
import { PrimaryButton } from 'components/atoms/buttons';
import { mvs } from 'config/metrices';
import { navigate } from 'navigation/navigation-ref';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
Geocoder.init('AIzaSyCbFQqjZgQOWRMuQ_RpXU0kGAUIfJhDw98');

type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const SucessfullyChangePassword = (props: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <SplashIcon style={{ alignSelf: 'center', marginTop: mvs(76) }} />
        <View style={styles.mainInnerContainer}>

          <View style={styles.inputContainer}>
            <Bold
              style={styles.paswordChangedTxt}
              label={'Password Changed'}
            />
            <Bold
              style={styles.congraTxt}
              label={'Congratulations!!'}
            />
            <Regular style={styles.contentTxt} label={'You Have Successfully Changed Your Password'} />


            <PrimaryButton
              title="Back to login"
              onPress={() => navigate('Login')}
              containerStyle={{
                marginTop: mvs(200),
              }}
            />


          </View>

        </View>
      </View>

    </View>
  );
};
export default SucessfullyChangePassword;
