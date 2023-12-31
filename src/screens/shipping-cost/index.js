import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Row} from 'components/atoms/row';
import ShippingCostCard from 'components/molecules/shipping-cost-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {useAppSelector} from 'hooks/use-store';
import {updateShippingType} from 'services/api/cart-api-actions';
import {Alert} from 'react-native';
import {UTILS} from 'utils';
const ShippingCost = props => {
  const colors = useTheme().colors;
  const {cart_list} = useAppSelector(x => x?.cart);
  const [loading, setLoading] = React.useState(false);

  const value = {
    shipping_type: 'home_delivery',
  };

  const UpdateShippingType = async () => {
    try {
      setLoading(true);
      await updateShippingType(value);
      navigate('CheckOut');
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };

  const [select, setSelect] = React.useState('carrier');
  const isButtonSelected = buttonName => {
    return select === buttonName;
  };

  const featuredProduct = ({item}) => <ShippingCostCard item={item} />;

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      {/* <AppHeader back title={`${t('shipping_cost')} ${'$18'}`} /> */}
      <AppHeader back title={`${t('shipping_cost')} `} />
      <Medium
        color={colors.text}
        label={t('inhouse_product')}
        style={{paddingHorizontal: mvs(20)}}
      />
      <View style={{maxHeight: mvs(400)}}>
        <CustomFlatList
          showsVerticalScrollIndicator={false}
          data={cart_list}
          renderItem={featuredProduct}
          contentContainerStyle={{
            paddingBottom: mvs(20),
            paddingHorizontal: mvs(20),
          }}
        />
      </View>
      <View style={{paddingHorizontal: mvs(20), marginTop: mvs(20)}}>
        <Regular color={colors.text} label={t('choose_delivery')} />
        <Row style={{marginTop: mvs(10)}}>
          <IconButton
            Icon={
              <Entypo
                name={'dot-single'}
                size={30}
                color={
                  isButtonSelected('carrier') ? colors.white : colors.primary
                }
              />
            }
            title={t('home_delivery')}
            textStyle={{
              fontSize: mvs(14),
              color: isButtonSelected('carrier')
                ? colors.white
                : colors.primary,
            }}
            containerStyle={[
              styles.carrierBtn,
              {
                backgroundColor: isButtonSelected('carrier')
                  ? colors.primary
                  : colors.white,
                borderWidth: isButtonSelected('carrier') ? mvs(0) : mvs(1),
                borderColor: isButtonSelected('carrier')
                  ? null
                  : colors.primary,
              },
            ]}
            onPress={() => setSelect('carrier')}
          />
          {/* <IconButton
            Icon={
              <Entypo
                name={'dot-single'}
                size={30}
                color={
                  isButtonSelected('pickup_point')
                    ? colors.white
                    : colors.primary
                }
              />
            }
            onPress={() => setSelect('pickup_point')}
            title={t('pickup_point')}
            textStyle={{
              color: isButtonSelected('pickup_point')
                ? colors.white
                : colors.primary,
            }}
            containerStyle={[
              styles.carrierBtn,
              {
                backgroundColor: isButtonSelected('pickup_point')
                  ? colors.primary
                  : colors.white,
                borderWidth: isButtonSelected('pickup_point') ? mvs(0) : mvs(1),
                borderColor: isButtonSelected('pickup_point')
                  ? null
                  : colors.primary,
              },
            ]}
          /> */}
        </Row>
      </View>
      <View
        style={{
          paddingHorizontal: mvs(20),
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <PrimaryButton
          loading={loading}
          onPress={() => UpdateShippingType()}
          containerStyle={{marginBottom: mvs(20)}}
          title={t('continue_to_delivery_info')}
        />
      </View>
    </View>
  );
};
export default ShippingCost;
