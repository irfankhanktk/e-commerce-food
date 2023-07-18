import {useNavigation} from '@react-navigation/native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {I18nManager, StyleSheet, TouchableOpacity, View} from 'react-native';

import Medium from 'typography/medium-text';
import {Row} from '../row';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Bold from 'typography/bold-text';
import {SearchInput} from '../inputs';
import {goBack} from 'navigation/navigation-ref';
const HomeHeader = ({
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
    <View style={[styles.container, style]}>
      <Row style={{alignItems: 'center', justifyContent: 'flex-start'}}>
        {back ? (
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign name={'arrowleft'} size={mvs(20)} color={colors.white} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <View style={{marginLeft: mvs(20)}}>
          <Bold fontSize={mvs(20)} label={title} style={[styles.title]} />
        </View>
        <View style={styles.empty} />
      </Row>
      {isSearch && (
        <SearchInput
          containerStyle={{marginTop: mvs(20)}}
          onChangeText={onChangeText}
          placeholder={placeholder}
          close={true}
        />
      )}
    </View>
  );
};
export default React.memo(HomeHeader);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: mvs(22),
    paddingVertical: mvs(15),
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
