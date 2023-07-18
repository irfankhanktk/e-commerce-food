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
    height: mvs(380),
    width: '90%',
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flex: 1,
    borderRadius: mvs(10),
  },
  iconView: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  backGroundImage: {
    width: mvs(65),
    height: mvs(65),
    resizeMode: 'contain',
  },
  innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
  messageIcon: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  yourLocation: {
    justifyContent: 'flex-start',
    marginTop: mvs(30),
    alignItems: 'center',
  },
  locationText: {marginLeft: mvs(30), flex: 1},
  fromLocation: {
    justifyContent: 'flex-start',
    marginTop: mvs(20),
  },
  noOfPassanger: {
    alignSelf: 'center',
    marginTop: mvs(10),
    color: colors.placeholder1,
    fontSize: mvs(14),
  },
  passangerAddContainer: {
    width: '70%',
    backgroundColor: colors.secondary,
    height: mvs(40),
    alignSelf: 'center',
    alignItems: 'center',
  },
  addSubBtn: {
    width: mvs(35),
    height: mvs(35),
    backgroundColor: colors.white,
    borderRadius: mvs(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  minPersonText: {
    fontSize: mvs(10),
    color: colors.red,
    alignSelf: 'center',
    marginTop: mvs(2),
  },
});
export default styles;
