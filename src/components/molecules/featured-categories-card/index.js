import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, silder} from 'assets/images';

const FeaturedCategories = ({item, style, onPress, loading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          borderRadius={mvs(10)}
          source={featured}
          style={styles.backGroundImage}>
          <Image source={{uri: item?.banner}} style={styles.innerImage} />
        </ImageBackground>
        <Regular
          label={item?.name}
          fontSize={mvs(10)}
          style={{marginTop: mvs(15)}}
        />
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(FeaturedCategories);
