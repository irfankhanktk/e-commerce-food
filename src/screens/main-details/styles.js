import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerView: {
    height: mvs(70),

    paddingHorizontal: mvs(20),
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cartNumberView: {
    width: mvs(20),
    height: mvs(20),
    borderRadius: mvs(100),
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: mvs(15),
    bottom: mvs(20),
  },

  content: {width: '70%', flex: 1, marginTop: mvs(5)},
  backGroundImage: {
    width: '100%',
    height: mvs(220),
  },
  innerImage: {width: '100%', height: '100%', borderRadius: mvs(10)},
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
    width: mvs(100),
    height: mvs(115),
    backgroundColor: 'white',
    borderRadius: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemContainer: {
    marginRight: mvs(15),
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
    flexGrow: 1,
    marginTop: mvs(10),
    paddingBottom: mvs(15),
    paddingHorizontal: mvs(20),
  },
});
export default styles;
