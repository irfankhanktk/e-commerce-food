import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  smallImageContainer: {
    width: mvs(53),
    height: mvs(53),
    borderColor: colors.primary,
    borderWidth: mvs(1),
    marginBottom: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigImageContainer: {
    height: mvs(154),
    margin: mvs(25),
    flex: 1,
    marginVertical: mvs(20),
  },
  productName: {
    marginTop: mvs(20),

    fontSize: mvs(12),
  },
  brand: {
    marginTop: mvs(15),

    fontSize: mvs(12),
  },
  brandName: {
    marginTop: mvs(15),
    marginLeft: mvs(20),
    fontSize: mvs(12),
  },
  reviewsText: {marginLeft: mvs(10), fontSize: mvs(10)},
  inquiryText: {
    marginTop: mvs(13),
    fontSize: mvs(12),
  },
  reviewContainer: {justifyContent: 'flex-start', marginTop: mvs(11)},
  messageContainer: {
    height: null,
    marginLeft: mvs(20),
    backgroundColor: colors.blueHalf,
    borderRadius: mvs(15),
    padding: mvs(8),
    borderWidth: mvs(1),
    borderColor: colors.primary,
  },
  messageTextStyle: {
    fontSize: mvs(12),
    color: colors.primary,
    marginLeft: mvs(5),
    lineHeight: mvs(16),
  },
  messageMainContainer: {
    justifyContent: 'flex-start',
    marginTop: mvs(15),
    alignItems: 'center',
  },
  subQuantity: {
    width: mvs(26),
    height: mvs(26),
    backgroundColor: colors.blueHalf,
    borderWidth: mvs(1),
    borderColor: colors.primary,
    borderRadius: mvs(0),
  },
  buynowBtn: {
    width: '48%',
    backgroundColor: colors.white,
    borderWidth: mvs(1),
    borderColor: colors.primary,
  },
});
export default styles;
