import {useTheme} from '@react-navigation/native';
import {Clander, CreaditCard, Delivery} from 'assets/icons';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import moment from 'moment';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {t} from 'i18next';

const OrderHistoryCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity onPress={onPress}>
      <Row style={{...styles.container, backgroundColor: colors.background}}>
        <View style={styles.idContainer} />
        <View style={styles.contentContainer}>
          <Regular label={item?.code} fontSize={mvs(12)} />
          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Clander />
            <Regular
              style={{
                marginLeft: mvs(10),
                color: colors.text,
                fontSize: mvs(12),
              }}
              label={moment(item?.created_at).format('MM-DD-YYYY')}
            />
          </Row>
          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <CreaditCard />
            <Regular
              style={{
                marginLeft: mvs(10),
                color: colors.text,
                fontSize: mvs(12),
              }}
              label={`${t('payment_statuss')} ${item?.payment_status}`}
            />
          </Row>
          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Delivery />
            <Regular
              style={{
                marginLeft: mvs(10),
                color: colors.text,
                fontSize: mvs(12),
              }}
              label={`${t('deliver_status')} ${item?.delivery_status}`}
            />
          </Row>
        </View>
        <View style={styles.priceContainer}>
          <Medium fontSize={mvs(12)} label={`$ ${item?.grand_total}`} />
        </View>
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(OrderHistoryCard);
