import {Delete} from 'assets/icons';
import {PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import {mvs} from 'config/metrices';
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {useAppDispatch} from 'hooks/use-store';
import {updateCartQty, removeFromCartList} from 'services/api/cart-api-actions';
import {Loader} from 'components/atoms/loader';

const CartCard = ({item, style, onPress}) => {
  const colors = useTheme().colors;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);

  return (
    <View
      onPress={onPress}
      style={{...styles.container, backgroundColor: colors.background}}>
      {item?.cart_items?.map((product, index) => (
        <Row
          key={index}
          style={{justifyContent: 'flex-start', marginBottom: mvs(10)}}>
          <View style={styles.imageMainContainer}>
            <ImageBackground
              borderRadius={mvs(5)}
              source={{uri: product?.product_thumbnail_image}}
              style={styles.backGroundImage}
            />
          </View>
          <View style={styles.contentContainer}>
            <Regular
              color={colors.text}
              fontSize={mvs(13)}
              label={product?.product_name}
            />
            <Row style={{marginTop: mvs(5)}}>
              <Regular
                color={colors.text}
                style={{flex: 1}}
                label={`${product?.currency_symbol} ${product?.price}`}
              />
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeFromCartList(product?.id, setLoading));
                }}>
                <Delete />
              </TouchableOpacity>
            </Row>
          </View>
          <View style={{alignItems: 'center', marginTop: mvs(10)}}>
            <PrimaryButton
              disabled={product?.quantity === 1 || loading}
              onPress={() =>
                dispatch(
                  updateCartQty(
                    {id: product?.id, quantity: product?.quantity - 1},
                    setLoading,
                  ),
                )
              }
              textStyle={{...styles.subAddText, color: colors.text}}
              containerStyle={{
                ...styles.subQuantity,
                borderColor: colors.primary,
              }}
              title={'-'}
            />
            <View style={styles.countextContainer}>
              <Regular color={colors.text} label={product?.quantity} />
            </View>
            <PrimaryButton
              disabled={loading}
              onPress={() =>
                dispatch(
                  updateCartQty(
                    {id: product?.id, quantity: product?.quantity + 1},
                    setLoading,
                  ),
                )
              }
              textStyle={{...styles.subAddText, color: colors.text}}
              containerStyle={{
                ...styles.subQuantity,
                borderColor: colors.primary,
              }}
              title={'+'}
            />
          </View>
        </Row>
      ))}
      {loading && (
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Loader />
        </View>
      )}
    </View>
  );
};

export default React.memo(CartCard);
