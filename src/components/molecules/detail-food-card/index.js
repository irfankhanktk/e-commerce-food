import {HomeImage} from 'assets/images';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React, {useState} from 'react';
import {Alert, ImageBackground, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Bold from 'typography/bold-text';
import Light from 'typography/light-text';
import styles from './style';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {setAddToCart} from 'store/reducers/cart-slice';
import {setRemoveFromCart} from 'store/reducers/cart-slice';
import {UTILS} from 'utils';
import {addOrRemoveWishlist} from 'services/api/api-actions';

const DetailFoodCard = ({item, style, onPress}) => {
  const dispatch = useAppDispatch();
  const {cart, user} = useAppSelector(x => x);
  const {wishlist} = user;
  const isAdded = cart?.cart?.some(x => x?.id === item?.id);

  const isLiked = wishlist?.some(x => x?.id === item?.id);
  const onAddRemove = () => {
    try {
      dispatch(isAdded ? setRemoveFromCart(item) : setAddToCart(item));
      Alert.alert(
        'Success',
        `Item is ${isAdded ? 'removed' : 'added'} successfully in cart`,
      );
    } catch (error) {
      Alert.alert('Cart Error', UTILS.returnError(error));
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          borderRadius={mvs(10)}
          source={HomeImage}
          style={styles.backGroundImage}>
          {/* <Image source={HomeImage} style={styles.innerImage} /> */}
          <TouchableOpacity
            onPress={() => dispatch(addOrRemoveWishlist(item))}
            style={styles.heartIcon}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={30}
              color={'red'}
            />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Bold style={{color: colors.black}} label={item?.name} />
        <Light
          style={{marginTop: mvs(5)}}
          numberOfLines={1}
          fontSize={mvs(10)}
          label={item?.description}
        />
        <Row style={{marginTop: mvs(10)}}>
          <Bold label={`Rs ${item?.discountedPrice || item?.price}`} />
          <TouchableOpacity onPress={onAddRemove}>
            <Feather
              size={25}
              name={isAdded ? 'minus-circle' : 'plus-circle'}
              color={isAdded ? 'red' : 'green'}
            />
          </TouchableOpacity>
        </Row>
      </View>
    </View>
  );
};
export default React.memo(DetailFoodCard);
