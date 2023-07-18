import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: mvs(10),
    marginVertical: mvs(5),
    height: mvs(160),
    backgroundColor: colors.white,
    width: mvs(120),
    alignItems: 'center',
  },
  backGroundImage: {
    width: mvs(120),
    height: mvs(120),
  },
  innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
  innerContainer: {
    width: mvs(120),
    height: mvs(120),
    backgroundColor: colors.placeholder1,
    borderRadius: mvs(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
