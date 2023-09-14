import {TickTwo} from 'assets/icons';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';
import {colors} from 'config/colors';
import {useTheme} from '@react-navigation/native';
import {Loader} from 'components/atoms/loader';

const ShippingInfoCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;
  console.log('item check========>', item);

  return (
    <TouchableOpacity
      disabled={!!item?.set_default}
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: colors.downColor,
        borderWidth: item?.set_default == 1 ? mvs(1) : mvs(0),
        borderColor: item?.set_default == 1 ? colors.green : colors.white,
      }}>
      <View style={styles.innerContainer}>
        <Row>
          <View style={{flex: 1}}>
            <Row style={{justifyContent: 'flex-start'}}>
              <Regular
                style={{flex: 1}}
                fontSize={mvs(12)}
                label={t('address')}
              />
              <Regular
                color={colors.text}
                style={styles.yourAddress}
                label={item?.address}
              />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular style={{flex: 1}} fontSize={mvs(12)} label={t('city')} />
              <Regular
                color={colors.text}
                style={styles.yourCity}
                label={item?.city_name}
              />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular
                style={{flex: 1}}
                fontSize={mvs(12)}
                label={t('country')}
              />
              <Regular
                color={colors.text}
                style={styles.yourCountry}
                label={item?.country_name}
              />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular style={{flex: 1}} label={t('phone')} />
              <Regular
                color={colors.text}
                style={styles.phone}
                label={item?.phone}
              />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular
                style={{flex: 1}}
                fontSize={mvs(12)}
                label={t('postal_code ')}
              />
              <Regular
                color={colors.text}
                style={styles.passCode}
                label={item?.postal_code}
              />
            </Row>
            {loading && (
              <View
                style={{
                  position: 'absolute',
                  height: '100%',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Loader />
              </View>
            )}
          </View>
          {item?.set_default == 1 ? (
            <View style={styles.circle}>
              <TickTwo />
            </View>
          ) : (
            <></>
          )}
        </Row>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(ShippingInfoCard);
