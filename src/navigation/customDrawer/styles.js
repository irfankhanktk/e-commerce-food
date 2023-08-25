import {StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import fonts from '../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    // alignItems: 'center',
  },
  cross: {
    marginTop: mvs(20),
    alignSelf: 'flex-end',
    right: mvs(10),
  },
  logout: {
    color: colors.white,
  },
  imageStyle: {
    width: mvs(150),
    height: mvs(150),
    alignSelf: 'center',
    marginTop: mvs(50),
  },
  userImage: {width: '100%', height: '100%', borderRadius: mvs(100)},
  userName: {alignSelf: 'center', marginTop: mvs(10), fontSize: mvs(14)},
  profilebutton: {
    backgroundColor: colors.primary,
    width: mvs(190),
    height: mvs(40),
    marginTop: mvs(70),
    alignSelf: 'center',
  },
  textbtn: {fontSize: mvs(12), fontFamily: fonts.bold},
  textLogoutBtn: {fontSize: mvs(12), fontFamily: fonts.bold, color: 'red'},
  termBtn: {
    backgroundColor: colors.primary,
    width: mvs(190),
    height: mvs(40),
    marginTop: mvs(20),
    alignSelf: 'center',
  },
});
export default styles;
