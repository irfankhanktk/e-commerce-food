import {useTheme} from '@react-navigation/native';
import {PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {t} from 'i18next';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';

const AllProductsCard = ({
  item,
  style,
  setCartLoading,
  onPress,
  loading,
  onAddCart,
}) => {
  const colors = useTheme().colors;
  const dispatch = useAppDispatch();
  const {cart_list} = useAppSelector(s => s?.cart);
  const cartItem = cart_list?.find(
    x => x?.cart_items[0]?.product_id === item?.id,
  );
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.downColor}}>
      <View style={{alignItems: 'center'}}>
        {/* <ImageBackground
          borderRadius={mvs(10)}
          source={forklift}
          style={styles.backGroundImage}> */}
        <Image
          source={{uri: item?.thumbnail_image}}
          style={styles.backGroundImage}
        />
        {/* </ImageBackground> */}
        <PrimaryButton
          loading={loading}
          onPress={() => {
            onPress();

            // }
            // dispatch(
            //   cartItem
            //     ? removeFromCartList(cartItem?.cart_items[0]?.id, bool =>
            //         setCartLoading(bool ? item?.id : false),
            //       )
            //     : addToCartList(
            //         {
            //           id: item?.id,
            //           variant: '',
            //           quantity: 1,
            //         },
            //         bool => setCartLoading(bool ? item?.id : false),
            //       ),
            // );
          }}
          containerStyle={styles.btnAddtoCart}
          title={cartItem ? t('remove') : t('add_to_cart')}
        />
        <View style={{padding: mvs(5), alignItems: 'center'}}>
          <Regular
            style={{textAlign: 'center'}}
            color={colors.text}
            label={item?.name}
            fontSize={mvs(12)}
            numberOfLines={3}
          />

          <Regular
            color={colors.text}
            label={item?.main_price}
            fontSize={mvs(12)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(AllProductsCard);
