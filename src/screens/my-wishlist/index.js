import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import FeaturedProductsCard from 'components/molecules/featured-products-card';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const MyWishList = props => {
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

  const featuredProduct = ({item}) => (
    <FeaturedProductsCard
      item={item}
      onPress={() => navigate('ProductDetials')}
    />
  );

  return (
    <View style={styles.container}>
      <AppHeader back title={t('my_wishlist')} />

      <CustomFlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{paddingBottom: mvs(20)}}
      />
    </View>
  );
};
export default MyWishList;
