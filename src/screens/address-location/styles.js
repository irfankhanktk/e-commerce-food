import {mvs, width} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  body: {
    paddingVertical: mvs(30),
    paddingHorizontal: mvs(20),
  },
  lan: {
    height: mvs(120),
    marginTop: mvs(20),
    backgroundColor: colors.primary,
  },
  btnText: {
    fontSize: mvs(24),
  },
  icons: {
    paddingHorizontal: mvs(21),
    paddingVertical: mvs(20),
    width: '30%',
    // width: mvs(100),
    // height: mvs(115),
    backgroundColor: 'white',
    borderRadius: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
    ...colors.shadow,
  },
  itemContainer: {
    marginRight: mvs(10),
    padding: mvs(10),
    height: mvs(50),
    backgroundColor: 'white',
    borderRadius: mvs(10),
    marginBottom: mvs(10),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemText: {
    fontSize: mvs(16),
    color: colors.darkBlack,
  },
  selectedItem: {
    backgroundColor: colors.primary,
  },
  selectedItemText: {
    color: 'white',
  },
  contentContainerStyle: {
    paddingTop: mvs(50),
    flex: 0,
    paddingHorizontal: mvs(20),
  },
});
export default styles;
