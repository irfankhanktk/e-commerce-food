import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    flex: 1,
  },
  lan: {
    height: mvs(120),
    marginTop: mvs(20),
    backgroundColor: colors.primary,
  },
  btnText: {
    fontSize: mvs(24),
  },
  backButton: {position: 'absolute', zIndex: 1, left: mvs(20), top: mvs(20)},
  header: {
    width: '100%',
    height: 60,
    backgroundColor: colors.mistyBlue,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: mvs(20),
  },

  bottomContainer: {
    height: mvs(400),
    width: '100%',
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    flex: 1,
    borderRadius: mvs(10),
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.placeholder,
    borderRadius: 0,
  },
  addressContainer: {
    paddingBottom: mvs(10),
    borderBottomColor: colors.placeholder,
    borderBottomWidth: mvs(1),
    bottom: mvs(10),
  },
  scrollViewContainer: {paddingHorizontal: mvs(15), marginTop: mvs(15)},
  addAddressBtn: {bottom: mvs(30), marginTop: mvs(50)},
});
export default styles;
