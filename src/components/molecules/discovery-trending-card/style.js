import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: mvs(10),
    marginVertical: mvs(5),
    height: mvs(310),
    backgroundColor: colors.white,
    width: mvs(250),
  },
  backGroundImage: {
    width: '100%',
    height: mvs(190),
  },
  innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
  menuImage: {
    height: mvs(150),
    width: mvs(100),
    position: 'absolute',
    bottom: mvs(1),
    left: mvs(50),
  },
  iconBtn: {
    width: mvs(120),
    height: mvs(40),
    backgroundColor: '#FCFCFE',
    borderRadius: mvs(13),
    marginLeft: mvs(20),
    alignItems: 'center',
    paddingHorizontal: mvs(10),
    marginTop: mvs(130),
  },
  rankText: {
    alignSelf: 'flex-end',
    marginRight: mvs(50),
    fontSize: mvs(12),
    marginTop: mvs(5),
  },
});
export default styles;
