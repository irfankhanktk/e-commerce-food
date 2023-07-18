import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(20),
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingTop: '20%',
  },
  forgetContainer: {
    alignSelf: 'flex-end',
    marginTop: mvs(3),
    marginRight: mvs(6),
  },
  txt: {marginBottom: mvs(10), fontSize: mvs(20)},
  button: {
    marginTop: mvs(16),
    borderRadius: mvs(30),
  },
  socialbutton: {
    marginTop: mvs(15),
    borderRadius: mvs(30),
    backgroundColor: colors.blueHalf,
  },
  textstyle: {fontSize: mvs(15), paddingLeft: mvs(20)},
  accountText: {
    color: colors.primary,
    alignSelf: 'center',
    marginTop: mvs(20),
  },
  signupText: {textAlign: 'center'},
  alreadyText: {marginLeft: mvs(32)},
  signinText: {flex: 1, marginLeft: mvs(3), marginBottom: mvs(70)},
  ortext: {textAlign: 'center', marginTop: mvs(20)},
  // codetext: {marginVertical: mvs(50)},
  // signup: {flex: 1, marginTop: mvs(40)},
});
export default styles;
