import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemsContainer: {
    width: mvs(73),
    height: mvs(73),
    backgroundColor: colors.blueHalf,
    borderRadius: mvs(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: mvs(18),
    height: mvs(18),
    borderRadius: mvs(9),
    backgroundColor: 'green',
  },
  line: {
    height: mvs(5),
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: colors.halfWhite,
    top: mvs(7),
  },
});
export default styles;
