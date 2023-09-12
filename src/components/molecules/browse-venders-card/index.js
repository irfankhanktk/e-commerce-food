import {ford} from 'assets/images';
import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './styles';

const BrowseAllVendersCard = ({item, style, onPress, loading}) => {
  return (
    <View onPress={onPress} style={styles.container}>
      <ImageBackground
        source={ford}
        style={{width: mvs(120), height: mvs(80)}}></ImageBackground>
    </View>
  );
};
export default React.memo(BrowseAllVendersCard);
