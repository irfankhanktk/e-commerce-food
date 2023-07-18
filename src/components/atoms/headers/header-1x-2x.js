import {useNavigation} from '@react-navigation/native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {I18nManager, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Medium from 'typography/medium-text';
import {Row} from '../row';
import {goBack} from 'navigation/navigation-ref';
const HeaderX = ({
  style = {},
  title,
  back = true,
  onChangeText = t => {},
  isSearch = false,
  placeholder = 'Search here',
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <Row style={{alignItems: 'center'}}>
        {back ? (
          <TouchableOpacity style={{}} onPress={() => goBack()}>
            <Icon
              name={I18nManager.isRTL ? 'right' : 'left'}
              size={mvs(20)}
              color={colors.black}
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <Medium fontSize={mvs(20)} label={title} style={[styles.title]} />
        <View style={styles.empty} />
      </Row>
      {/* {isSearch && <SearchInput onChangeText={onChangeText} placeholder={placeholder} />} */}
    </View>
  );
};
export default React.memo(HeaderX);
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingHorizontal: mvs(22),
    paddingTop: mvs(15),
    paddingBottom: mvs(15),
  },
  empty: {
    width: mvs(10),
  },
  title: {
    fontSize: mvs(18),
    color: colors.white,
  },
  back: {},
});
