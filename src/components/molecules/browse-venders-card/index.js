import {ford} from 'assets/images';
import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';

const BrowseAllVendersCard = ({item, style, onPress, loading}) => {
  console.log('item check===>', item);
  return (
    <View onPress={onPress} style={styles.container}>
      <ImageBackground
        source={{uri: item?.logo}}
        style={{width: mvs(120), height: mvs(80)}}></ImageBackground>
      <Regular style={{marginTop: mvs(10)}} label={item?.name} />
    </View>
  );
};
export default React.memo(BrowseAllVendersCard);
