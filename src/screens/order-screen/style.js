import fonts from 'assets/fonts';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerContainer: {
    width: '100%',
    height: mvs(70),
    shadowColor: '#000',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
    backgroundColor: colors.white,
  },
  lineContainer: {borderWidth: mvs(1), marginTop: mvs(20)},
  imageContainer: {
    width: mvs(60),
    height: mvs(60),
    borderWidth: mvs(10),
    borderColor: colors.placeholder1,
  },
  nameMainContainer: {justifyContent: 'flex-start', flex: 1},
  nameContainer: {
    justifyContent: 'center',
    marginLeft: mvs(10),
    flex: 1,
  },
  seaFoodContainer: {
    width: mvs(100),
    height: mvs(28),
    backgroundColor: colors.gray1,
  },
  seaFoodText: {
    fontFamily: fonts.regular,
    fontSize: mvs(12),
    color: colors.black,
  },
});
export default styles;
