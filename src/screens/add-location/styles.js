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
  errorLabel: {
    // alignSelf: 'flex-start',
    color: colors.red,
    // backgroundColor: 'red',
    fontSize: mvs(10),
    marginBottom: mvs(5),
    height: mvs(15),
    marginHorizontal: mvs(5),
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
    width: '100%',
    paddingTop: mvs(30),
    flex: 1,
    borderTopLeftRadius: mvs(10),
    borderTopRightRadius: mvs(10),
    paddingHorizontal: mvs(20),
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.placeholder,
    borderRadius: 10,
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
