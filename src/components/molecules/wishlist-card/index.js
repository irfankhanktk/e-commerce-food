import {useTheme} from '@react-navigation/native';
import {forklift} from 'assets/images';
import {mvs} from 'config/metrices';
import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

const WishlistCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.downColor}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: item?.product?.thumbnail_image}}
          style={styles.backGroundImage}
        />

        <View style={{padding: mvs(5), alignItems: 'center'}}>
          <Regular
            style={{textAlign: 'center'}}
            color={colors.text}
            label={item?.product?.name}
            numberOfLines={2}
            fontSize={mvs(12)}
          />

          <Regular
            color={colors.text}
            label={item?.product?.base_price}
            fontSize={mvs(12)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(WishlistCard);
