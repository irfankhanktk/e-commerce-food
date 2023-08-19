import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  balanceContainer: {
    width: '48%',
    height: mvs(110),
    borderRadius: mvs(10),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rechargeContainer: {
    width: '48%',
    height: mvs(110),
    borderRadius: mvs(10),
    backgroundColor: colors.blueHalf,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
