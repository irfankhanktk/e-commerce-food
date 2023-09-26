import {useTheme} from '@react-navigation/native';
import {featured} from 'assets/images';
import {Row} from 'components/atoms/row';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

const AllFeaturedCategories = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.downColor}}>
      <Row style={{justifyContent: 'flex-start'}}>
        <View style={styles.imageMainContainer}>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ImageBackground
              source={
                item?.thumbnail_image ? {uri: item?.thumbnail_image} : featured
              }
              style={styles.backGroundImage}></ImageBackground>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Regular numberOfLines={2} label={item?.name} />
          {/* <Regular
            numberOfLines={2}
            fontSize={mvs(10)}
            color={colors.text}
            label={item?.name}
          /> */}
          <Regular color={colors.text} label={item?.stroked_price} />
        </View>
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(AllFeaturedCategories);
