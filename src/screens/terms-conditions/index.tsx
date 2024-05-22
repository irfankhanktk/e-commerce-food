import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Geocoder from 'react-native-geocoding';

import { SplashIcon } from 'assets/icons';
import { PrimaryButton } from 'components/atoms/buttons';
import { mvs } from 'config/metrices';
import { goBack, navigate } from 'navigation/navigation-ref';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
Geocoder.init('AIzaSyC4lnIdJpGeIXhvicsbuhAR3FF29zzuEsI');

type props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const TermsAndConditions = (props: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <SplashIcon style={{ alignSelf: 'center', marginTop: mvs(76) }} />
        <View style={styles.mainInnerContainer}>
          <View style={styles.inputContainer}>
            <Bold
              style={styles.paswordChangedTxt}
              label={'Terms And Conditions'}
            />

            <Regular
              style={styles.contentTxt}
              label={
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
              }
            />
            <PrimaryButton
              title="Back"
              onPress={() => goBack()}
              containerStyle={{
                marginTop: mvs(10),
              }}
            />

          </View>
        </View>
      </View>
    </View>
  );
};
export default TermsAndConditions;
