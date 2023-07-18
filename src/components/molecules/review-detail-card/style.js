import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    // backgroundColor: colors.gray,
    borderRadius: mvs(15),
    padding: mvs(5),
    marginVertical: mvs(3),
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
    // borderRadius: mvs(10),
  },
  img: {
    height: mvs(44),
    width: mvs(44),
    borderRadius: mvs(50),
  },
  time: {
    borderWidth: mvs(1),
    alignItems: 'center',
    width: mvs(55),
    height: mvs(20),
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderRadius: mvs(10),
  },
  // description: { paddingLeft: mvs(45), marginTop: 8, }
});
export default styles;
