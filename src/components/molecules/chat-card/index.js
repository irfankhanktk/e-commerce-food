import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';
import {featured, forklift, silder} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Bold from 'typography/bold-text';
import {useTheme} from '@react-navigation/native';
import moment from 'moment';
import {DATE_FORMAT} from 'config/constants';
import {Image} from 'react-native';

const ChatCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.background}}>
      <Row style={styles.InnerContainer}>
        <View style={{...styles.imageContainer, borderColor: colors.primary}}>
          <Image
            source={item?.shop_logo ? {uri: item?.shop_logo} : forklift}
            style={styles.backGroundImage}
          />
        </View>
        <View style={{paddingHorizontal: mvs(10), flex: 1}}>
          <Bold color={colors.text} label={item?.title} numberOfLines={1} />
          <Regular
            color={colors.text}
            numberOfLines={1}
            label={moment(item?.date).format(DATE_FORMAT.mmm_dd_yyyy)}
          />
        </View>
        <Regular
          color={colors.text}
          label={moment(item?.date).format('HH:mm:a')}
        />
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(ChatCard);
