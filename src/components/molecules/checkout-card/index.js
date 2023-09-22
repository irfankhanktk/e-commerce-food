import {useTheme} from '@react-navigation/native';
import {TickTwo} from 'assets/icons';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

const CheckOutCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: colors.downColor,
        borderWidth: item?.selected ? mvs(1) : mvs(0),
        borderColor: item?.selected ? colors.green : colors.white,
      }}>
      <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={{backgroundColor: colors.white, borderRadius: mvs(5)}}>
          <Image
            style={{width: mvs(50), height: mvs(50)}}
            source={{uri: item?.image}}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: mvs(10),
          }}>
          <Regular color={colors.text} label={item?.title} />
        </View>

        <View>
          <Regular fontSize={mvs(12)} color={colors.text} label={item?.price} />
        </View>
      </Row>
      {item?.selected ? (
        <View style={styles.circle}>
          <TickTwo />
        </View>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};
export default React.memo(CheckOutCard);
