import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {flexGrow: 1, paddingHorizontal: mvs(20)},
  btn: {
    marginBottom: mvs(10),
  },
});
export default styles;
