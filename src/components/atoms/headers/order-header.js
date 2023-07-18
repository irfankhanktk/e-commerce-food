import {useNavigation} from '@react-navigation/native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {goBack} from 'navigation/navigation-ref';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Bold from 'typography/bold-text';
import {Row} from '../row';
const OrderHeader = ({
  style = {},
  title,
  back = true,
  onChangeText = t => {},
  isSearch = false,
  placeholder = 'Search here',
  location = 'Your location',
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <Row style={[styles.container, style]}>
      {back ? (
        <TouchableOpacity onPress={() => goBack()}>
          <AntDesign name={'arrowleft'} size={mvs(20)} color={colors.white} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      <Bold fontSize={mvs(20)} label={title} style={[styles.title]} />
      <View></View>
    </Row>
  );
};
export default React.memo(OrderHeader);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: mvs(60),
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingLeft: mvs(20),
  },

  empty: {
    width: mvs(10),
  },
  title: {
    fontSize: mvs(16),
    color: colors.white,
  },
  location: {
    fontSize: mvs(12),
    color: colors.white,
  },
  back: {},
});
