import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import AppHeader from 'components/atoms/headers/app-header';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {Row} from 'components/atoms/row';
import Stars from 'components/atoms/stars';
import i18n from 'translation';
import Regular from 'typography/regular-text';
import styles from './styles';
import {colors} from 'config/colors';
import {MessageTwo, Carttt, CartWhite} from 'assets/icons';
import DescriptionCard from 'components/atoms/description-card';
import {CarrtActive, Cart} from 'assets/icons/tab-icons';
import Medium from 'typography/medium-text';
import CustomFlatList from 'components/atoms/custom-flatlist';
import AllFeaturedCategoriesCard from 'components/molecules/all-featured-categories-card';
import CartCard from 'components/molecules/cart-card';

const CartTab = props => {
  const {t} = i18n;
  const featuredCategories = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
  ];

  const featuredProduct = ({item}) => <CartCard item={item} />;

  return (
    <View style={styles.container}>
      <AppHeader back title={t('shopping_cart')} />
      <Row style={{paddingHorizontal: mvs(20)}}>
        <Medium color={colors.darkBlack} label={'Inhouse'} />
        <Medium label={'$30.00'} />
      </Row>
      <CustomFlatList
        showsVerticalScrollIndicator={false}
        // columnWrapperStyle={styles.columnWrapperStyle}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
        }}
      />
    </View>
  );
};
export default CartTab;
