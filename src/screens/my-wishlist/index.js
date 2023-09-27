import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import FeaturedProductsCard from 'components/molecules/featured-products-card';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import {useAppSelector} from 'hooks/use-store';
import {useDispatch} from 'react-redux';
import {getWishlist} from 'services/api/api-actions';

const MyWishList = props => {
  const colors = useTheme().colors;
  const dispatch = useDispatch();
  const wishlist = useAppSelector(s => s);

  React.useEffect(() => {
    dispatch(getWishlist());
  }, []);

  const featuredProduct = ({item}) => (
    <FeaturedProductsCard
      item={item}
      onPress={() => navigate('ProductDetials', {productId: item?.id})}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('my_wishlist')} />

      <CustomFlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={wishlist?.wishlist?.wishlists}
        renderItem={featuredProduct}
        contentContainerStyle={{paddingBottom: mvs(20)}}
      />
    </View>
  );
};
export default MyWishList;
