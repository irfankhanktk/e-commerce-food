import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View, Image} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, forklift, silder} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';

const FeaturedProducts = ({item, style, onPress, loading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          borderRadius={mvs(10)}
          source={forklift}
          style={styles.backGroundImage}>
          <Image
            source={{uri: item?.thumbnail_image}}
            style={styles.innerImage}
          />
        </ImageBackground>

        <View style={{padding: mvs(5), alignItems: 'center'}}>
          <Regular
            color={colors.darkBlack}
            label={item?.name}
            numberOfLines={2}
            fontSize={mvs(12)}
          />

          <Regular label={item?.main_price} fontSize={mvs(12)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(FeaturedProducts);
