import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerImage: {
    position: 'absolute',
    paddingHorizontal: mvs(140),
    paddingTop: mvs(51),
  },
  logout: {
    position: 'absolute',
    bottom: mvs(45),
  },

  pdhzntl: {
    flex: 1,
    marginHorizontal: mvs(20),
  },
});
export default styles;
