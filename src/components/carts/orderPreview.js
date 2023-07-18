import {Row} from 'components/atoms/row';
import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import Bold from 'components/carts/bold';
import Label from './Label';
import {mvs} from 'assets/metrices';
import {PlusButton} from 'components/atoms/buttons';
import {MinusSign, PlusSign} from 'assets/svgs';
import {colors} from 'config/colors';
import {useAppDispatch} from 'hooks/use-store';
import {setIncrementQtyCart} from 'store/reducers/cart-slice';
import {setDecrementQtyCart} from 'store/reducers/cart-slice';

const OrderPreview = ({
  onclickPlus,
  onclickMinus,
  description = '',
  pieces = '',
  price = '',
  count,
  item,
}) => {
  const dispatch = useAppDispatch();

  const [counter, setCounter] = useState(0);
  return (
    <Row style={{alignItems: 'center', marginVertical: mvs(10)}}>
      <Row style={{alignItems: 'center'}}>
        <Image
          style={styles.img}
          source={
            item?.imagePath
              ? {uri: item?.imagePath}
              : require('../../assets/images/oilOrder.png')
          }
        />

        <View style={{marginHorizontal: mvs(10)}}>
          <Bold label={description} color="black" />
          <Label color={colors.grey} label={pieces} />
          <Label color={colors.grey} label={'Rs ' + price} />
        </View>
      </Row>

      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => dispatch(setIncrementQtyCart(item))}>
          <PlusSign width={10} />
        </TouchableOpacity>
        <View style={styles.counter}>
          <Label label={item?.qty} color="white" />
        </View>
        <TouchableOpacity onPress={() => dispatch(setDecrementQtyCart(item))}>
          <MinusSign width={10} />
        </TouchableOpacity>
      </View>
    </Row>
  );
};
export default OrderPreview;

const styles = StyleSheet.create({
  img: {
    width: mvs(65),
    height: mvs(65),
  },
  mainContainer: {justifyContent: 'center', alignItems: 'center'},
  counter: {
    backgroundColor: colors.lightGreen,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
