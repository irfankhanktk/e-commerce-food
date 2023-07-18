import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { mvs, width } from 'config/metrices';
import { Row } from 'components/atoms/row';
import { colors } from 'config/colors';
import Regular from 'typography/regular-text';
import Bold from 'typography/bold-text';
import styles from './style';
import Line from 'components/atoms/line';
import { check_mark, dot, green_stars, profile, profile_pic, stars } from 'assets/images';

ReviewDetailCard = ({ item, index, onPress }) => {
  return (
    <View>
      <View
        key={index}
        style={[styles.cardContainer]}>
        <Row >
          <View style={{ flexDirection: 'row' }}>

            <Image source={profile_pic} style={[styles.img]} />

            <View style={{ marginLeft: mvs(16) }}>
              <Bold label={item?.name} fontSize={12} color={colors.black} />
              <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Image source={green_stars} style={{ height: mvs(10), width: mvs(70), marginRight: mvs(10) }} />
                <Regular label={item?.rating} fontSize={12} color={colors.grey} />

              </View>
              <Regular label={item?.description} numberOfLines={3} fontSize={10} style={{ width: mvs(178) }} />
            </View>
          </View>
          <View>

            <Regular fontSize={10} label={item?.time} />


          </View>
        </Row>
      </View >
    </View>
  );
};
export default ReviewDetailCard;
