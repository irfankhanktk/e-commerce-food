import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: (width - 80) / 3,
    height: mvs(109),
    marginHorizontal: mvs(10),
  },
  backGroundImage: {
    width: mvs(77),
    height: mvs(56),
    marginTop: mvs(10),
  },
  // innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
});
export default styles;
