import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemsContainer: {
    width: mvs(56),
    height: mvs(56),
    backgroundColor: colors.blueHalf,
    borderRadius: mvs(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  newAddressContainer: {
    width: '100%',
    paddingVertical: mvs(20),
    backgroundColor: colors.blueHalf,

    marginTop: mvs(20),
    borderRadius: mvs(10),
    alignItems: 'center',
  },
  backGroundImage: {
    width: mvs(77),
    height: mvs(56),
    marginTop: mvs(10),
  },
});
export default styles;
