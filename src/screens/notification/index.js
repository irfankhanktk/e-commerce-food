import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import AppHeader from 'components/atoms/headers/app-header';
import {t} from 'i18next';
import CustomFlatList from 'components/atoms/custom-flatlist';

import {mvs} from 'config/metrices';
import {Row} from 'components/atoms/row';
import {Image} from 'react-native';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import moment from 'moment';
import {NOTIFICATION_LIST} from 'config/constants';

const Notification = () => {
  const colors = useTheme().colors;

  const renderAppointmentItem = ({item, index}) => (
    <View
      key={index}
      style={[
        styles.rendercontainer,
        // { backgroundColor: item?.is_read ? colors.white : colors?.blueHalf },
      ]}>
      {/* <View
        style={{
          alignSelf: 'flex-end',
        }}>
        <Image
          //   source={}
          resizeMode="cover"
          style={{width: mvs(25), height: mvs(25)}}
        />
      </View> */}
      <Row style={{justifyContent: 'flex-start'}}>
        <View style={styles.titleandtextview}>
          <Row>
            <Medium label={item.title} color={colors.black} />
          </Row>
          <Regular label={item?.desc} numberOfLines={3} />
        </View>
      </Row>
      <Regular
        label={moment(item.created_at).format('DD MMM, YYYY  hh:mm a')}
        style={{alignSelf: 'flex-end'}}
        fontSize={mvs(12)}
        color={colors.primary}
      />
    </View>
  );
  const itemSeparatorComponent = () => {
    return <View style={{paddingVertical: mvs(5)}}></View>;
  };
  return (
    <View style={styles.container}>
      <AppHeader back title={t('notification')} />
      <CustomFlatList
        // emptyList={<EmptyList label={t('no_notification')} />}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        data={NOTIFICATION_LIST}
        renderItem={renderAppointmentItem}
        ItemSeparatorComponent={itemSeparatorComponent()}
        keyExtractor={(_, index) => index?.toString()}
      />
    </View>
  );
};
export default Notification;
