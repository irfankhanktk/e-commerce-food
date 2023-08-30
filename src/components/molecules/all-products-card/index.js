import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, forklift, silder} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';

const AllProductsCard = ({item, style, onPress, loading}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          borderRadius={mvs(10)}
          source={forklift}
          style={styles.backGroundImage}>
          {/* <Image source={{uri: item?.image}} style={styles.innerImage} /> */}
        </ImageBackground>
        <PrimaryButton
          onPress={onPress}
          containerStyle={styles.btnAddtoCart}
          title="Add To Cart"
        />
        <View style={{padding: mvs(5), alignItems: 'center'}}>
          <Regular
            color={colors.darkBlack}
            label={'shipping container'}
            fontSize={mvs(12)}
          />
          <Regular
            color={colors.darkBlack}
            numberOfLines={2}
            label={
              'The 20ft dry container is ideal for moving smaller shipments of dry goods.'
            }
            fontSize={mvs(12)}
          />
          <Regular label={'$120.000'} fontSize={mvs(12)} />
        </View>
      </View>
    </View>
  );
};
export default React.memo(AllProductsCard);
