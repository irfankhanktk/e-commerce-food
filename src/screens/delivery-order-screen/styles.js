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

  /* Delivery order screen 1  bottom container */
  orderBottomContainer: {
    height: mvs(230),
    width: '100%',
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    flex: 1,
  },
  nextOrderBtn: {
    width: mvs(56),
    height: mvs(56),
    borderRadius: mvs(100),
    backgroundColor: colors.mistyBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: mvs(120),
  },
  bottomOrderInnerContainer: {
    paddingHorizontal: mvs(15),
    marginTop: mvs(30),
  },

  // Delivery /  Order Screen-2 bottom container
  deliveryBottomContainer: {
    height: mvs(150),
    width: '90%',
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flex: 1,
  },
  nextDeliveryBtn: {
    width: mvs(60),
    height: mvs(60),
    backgroundColor: colors.hlafwhit,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerDeliveryContainer: {flex: 1, padding: mvs(15), alignItems: 'center'},

  bottomContainer: {
    width: '90%',
    // backgroundColor: colors.white,
    position: 'absolute',
    bottom: mvs(10),
    alignSelf: 'center',
    flex: 1,
  },
  innerContainer: {
    width: '100%',
    height: mvs(200),
    backgroundColor: colors.white,
    bottom: mvs(20),
    borderRadius: mvs(15),
    paddingHorizontal: mvs(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    flexGrow: 1,
    paddingBottom: mvs(10),
  },
  carImage: {width: mvs(70), height: mvs(45)},
  selectText: {paddingTop: mvs(10), color: colors.grey, fontSize: mvs(16)},
  carItemContainer: {justifyContent: 'center'},
  selectedCarItem: {backgroundColor: colors.gray},
});
export default styles;
