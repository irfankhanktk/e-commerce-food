import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingHorizontal: mvs(10),
  },
  box: {
    width: '43%',
    height: mvs(120),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: mvs(5),
  },

  chart: {
    marginTop: mvs(10),
  },
});
export default styles;
