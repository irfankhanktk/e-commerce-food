import { StyleSheet } from 'react-native';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerImage: {
    position: 'absolute',
    // paddingHorizontal: mvs(140),
    top: mvs(45),
    alignSelf: 'center'
  },
  logout: {
    // position: 'absolute',
    // bottom: mvs(45),
  },

  pdhzntl: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: mvs(20),
    paddingBottom: mvs(45),
    paddingTop: mvs(100),
  },
});
export default styles;