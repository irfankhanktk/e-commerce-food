import {useNavigation} from '@react-navigation/native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {I18nManager, StyleSheet, TouchableOpacity, View} from 'react-native';

import Medium from 'typography/medium-text';
import {Row} from '../row';
import Feather from 'react-native-vector-icons/Feather';
import Bold from 'typography/bold-text';
import {SearchInput} from '../inputs';
const SearchHeader = ({
  style = {},
  title,
  menu = true,
  onChangeText = t => {},
  isSearch = false,
  value = '',
  placeholder = 'Search here',
  location = 'Your location',
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, style]}>
      {menu && (
        <Row style={{alignItems: 'center', justifyContent: 'flex-start'}}>
          <TouchableOpacity onPress={() => navigation?.toggleDrawer()}>
            <Feather name={'menu'} size={mvs(35)} color={colors.white} />
          </TouchableOpacity>

          <View style={{marginLeft: mvs(20)}}>
            <Bold fontSize={mvs(20)} label={title} style={[styles.title]} />
            <Medium label={location} style={[styles.location]} />
          </View>
          <View style={styles.empty} />
        </Row>
      )}
      {isSearch && (
        <SearchInput
          containerStyle={{marginTop: mvs(15)}}
          onChangeText={onChangeText}
          placeholder={placeholder}
          value={value}
        />
      )}
    </View>
  );
};
export default React.memo(SearchHeader);
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
