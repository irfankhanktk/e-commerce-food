import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { mvs } from 'config/metrices';
import { Row } from 'components/atoms/row';
import { colors } from 'config/colors';
import Regular from 'typography/regular-text';
import Bold from 'typography/bold-text';
import styles from './style';

ProfileInboxCard = ({ item, index, onPress }) => {
  return (
    <View
      key={index}
      style={[styles.cardContainer, { backgroundColor: index === 0 ? colors.gray : colors.white }]}>
      <Row >
        <View style={{ flexDirection: 'row' }}>
          <View
            style={[styles.img, { backgroundColor: index === 0 ? colors.grey : colors.gray, }]}></View>
          <View style={{ marginLeft: mvs(10) }}>
            <Regular label={item?.date} fontSize={10} />
            <Bold label={item?.name} fontSize={14} />
          </View>
        </View>
        <View
          style={styles.time}>
          <Regular fontSize={10} label={item?.time} />
        </View>
      </Row>
      <Regular
        style={styles.description}
        fontSize={10}
        numberOfLines={2}
        label={item?.description}
      />
    </View >
  );
};
export default ProfileInboxCard;
