import {StyleSheet} from 'react-native';
import {mvs} from 'config/metrices';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(30),
  },
  contentContainerStyle: {
    paddingVertical: mvs(30),
    paddingHorizontal: mvs(20),
  },
  button: {
    marginTop: mvs(16),
    borderRadius: mvs(30),
  },
  socialbutton: {
    marginTop: mvs(15),
    borderRadius: mvs(30),
    backgroundColor: colors.blueHalf,
  },
  textstyle: {fontSize: mvs(18), paddingLeft: mvs(20)},
  accountText: {
    color: colors.primary,
    alignSelf: 'center',
    marginTop: mvs(20),
  },
  signupText: {textAlign: 'center', marginTop: mvs(100)},
  alreadyText: {marginLeft: mvs(32)},
  signinText: {flex: 1, marginLeft: mvs(3), marginBottom: mvs(70)},
  ortext: {textAlign: 'center', marginTop: mvs(50)},
});
export default styles;
