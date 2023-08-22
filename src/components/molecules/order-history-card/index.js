import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import Medium from 'typography/medium-text';
import styles from './styles';
import Regular from 'typography/regular-text';
import {Clander, CreaditCard, Delivery} from 'assets/icons';

const OrderHistoryCard = ({item, style, onPress, loading}) => {
  return (
    <Row onPress={onPress} style={styles.container}>
      <View style={styles.idContainer} />
      <View style={styles.contentContainer}>
        <Regular label={'202104002-050430'} fontSize={mvs(12)} />
        <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
          <Clander />
          <Regular
            style={{
              marginLeft: mvs(10),
              color: colors.darkBlack,
              fontSize: mvs(12),
            }}
            label={'01-08-2023'}
          />
        </Row>
        <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
          <CreaditCard />
          <Regular
            style={{
              marginLeft: mvs(10),
              color: colors.darkBlack,
              fontSize: mvs(12),
            }}
            label={'Payment Status - Paid'}
          />
        </Row>
        <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
          <Delivery />
          <Regular
            style={{
              marginLeft: mvs(10),
              color: colors.darkBlack,
              fontSize: mvs(12),
            }}
            label={'Delivery Status - Order Placed'}
          />
        </Row>
      </View>
      <View style={styles.priceContainer}>
        <Medium fontSize={mvs(12)} label={'$12.150'} />
      </View>
    </Row>
  );
};
export default React.memo(OrderHistoryCard);
