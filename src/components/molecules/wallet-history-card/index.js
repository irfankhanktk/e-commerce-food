import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import Medium from 'typography/medium-text';
import styles from './styles';

const WalletHistoryCard = ({item, style, onPress, loading}) => {
  return (
    <Row onPress={onPress} style={styles.container}>
      <View style={styles.idContainer}>
        <Medium color={colors.white} label={'#'} />
        <Medium color={colors.white} label={'01'} />
      </View>
      <View style={styles.contentContainer}>
        <Medium color={colors.darkBlack} label={'02-08-2023'} />
        <Medium color={colors.darkBlack} label={'Payment Method Refund'} />
      </View>
      <View style={styles.priceContainer}>
        <Medium fontSize={mvs(12)} label={'$12.150'} />
        {/* <Medium label={'01'} /> */}
      </View>
    </Row>
  );
};
export default React.memo(WalletHistoryCard);
