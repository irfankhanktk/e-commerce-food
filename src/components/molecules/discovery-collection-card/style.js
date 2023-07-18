import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: mvs(5),
    marginVertical: mvs(5),
    height: mvs(273),
    width: mvs(200),
    backgroundColor: colors.white,
    // backgroundColor: 'red',
    borderRadius: mvs(10),
    overflow: 'hidden',
  },
  backGroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'flex-end',
  },
  innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
});
export default styles;
