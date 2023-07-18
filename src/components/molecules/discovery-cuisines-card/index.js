import {Burger} from 'assets/images';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Bold from 'typography/bold-text';
import styles from './style';

const DiscoveryCuisinesCard = ({item, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.innerContainer}>
        <ImageBackground
          borderRadius={mvs(10)}
          source={Burger}
          style={styles.backGroundImage}>
          {/* <Image source={HomeImage} style={styles.innerImage} /> */}
        </ImageBackground>
      </View>
      <Bold label={'Burger'} fontSize={mvs(18)} />
    </TouchableOpacity>
  );
};
export default React.memo(DiscoveryCuisinesCard);
