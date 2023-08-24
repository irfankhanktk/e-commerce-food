import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, forklift, silder} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import {Paypal, Select, TickTwo} from 'assets/icons';

const CheckOutCard = ({item, style, onPress, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          borderWidth: item?.selected ? mvs(1) : mvs(0),
          borderColor: item?.selected ? colors.green : colors.white,
        },
      ]}>
      <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
        <View>
          <Paypal />
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: mvs(10),
          }}>
          <Regular color={colors.darkBlack} label={item?.title} />
        </View>

        <View>
          <Regular
            fontSize={mvs(12)}
            color={colors.darkBlack}
            label={item?.price}
          />
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
