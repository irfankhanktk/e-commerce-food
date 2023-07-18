import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: mvs(5),
    marginVertical: mvs(5),
    height: mvs(300),
    width: mvs(200),
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
    resizeMode: 'contain',
  },
  innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
  heartIcon: {
    alignSelf: 'flex-end',
    paddingRight: mvs(15),
    marginTop: mvs(15),
  },
  footer: {paddingHorizontal: mvs(10), marginTop: mvs(10)},
});
export default styles;
