import {useTheme} from '@react-navigation/native';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

const ShippingCostCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;
  const product = item?.cart_items[0];
  console.log('shipping item check====>', product);
  return (
    <View
      style={{...styles.container, backgroundColor: colors.downColor}}
      onPress={onPress}>
      <Row>
        <View style={styles.idContainer} />

        <View
          style={{
            width: 100,
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ImageBackground
            source={{uri: product?.product_thumbnail_image}}
            style={{width: mvs(100), height: mvs(80)}}></ImageBackground>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: mvs(10),
          }}>
          <Regular label={product?.product_name} />
          <Regular
            color={colors.text}
            fontSize={mvs(12)}
            numberOfLines={3}
            label={`${product?.currency_symbol} ${product?.price}`}
          />
        </View>
      </Row>
    </View>
  );
};
export default React.memo(ShippingCostCard);
