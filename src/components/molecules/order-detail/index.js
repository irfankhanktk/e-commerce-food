import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { mvs, width } from 'config/metrices';
import { Row } from 'components/atoms/row';
import { colors } from 'config/colors';
import Regular from 'typography/regular-text';
import Bold from 'typography/bold-text';
import styles from './style';
import Line from 'components/atoms/line';
import { check_mark, dot } from 'assets/images';

OrderDetailCard = ({ item, index, onPress }) => {
  return (
    <View>
      <View
        key={index}
        style={[styles.cardContainer]}>
        <Row >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={[styles.img]}></View>
            <View style={{ marginLeft: mvs(16) }}>
              <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image source={check_mark} style={{ height: mvs(18), width: mvs(18), marginRight: mvs(10) }} />
                <Regular label={item?.status} fontSize={12} color={colors.primary} />
                <Image source={dot} style={styles.dot} />
                <Regular label={item?.items} fontSize={12} color={colors.placeholder} />

              </Row>
              <Bold label={item?.name} fontSize={14} />
            </View>
          </View>
          <View>
            <View
              style={styles.time}>
              <Regular fontSize={10} label={item?.time} />
            </View>
            <Bold fontSize={10} label={item?.price} style={{ marginLeft: mvs(17), marginTop: mvs(4) }} />

          </View>
        </Row>
      </View >
      <Line width={width} />
    </View>
  );
};
export default OrderDetailCard;
