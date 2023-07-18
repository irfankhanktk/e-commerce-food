import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: mvs(4),
    marginVertical: mvs(5),
    height: mvs(330),
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: mvs(10),
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
});
export default styles;
