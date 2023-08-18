import CustomFlatList from 'components/atoms/custom-flatlist';
import HomeHeader from 'components/atoms/headers/home-header';
import FeaturedCategoriesCard from 'components/molecules/featured-categories-card';
import FeaturedProductsCard from 'components/molecules/featured-products-card';
import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppHeader from 'components/atoms/headers/app-header';
import Medium from 'typography/medium-text';
import {colors} from 'config/colors';
import {navigate} from 'navigation/navigation-ref';

const CategoriesTab = props => {
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
      <AppHeader back title={'Categories'} />
      <Medium
        label={'Featured Products'}
        style={{
          marginLeft: mvs(20),
          marginTop: mvs(20),
          color: colors.darkBlack,
        }}
      />
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
export default CategoriesTab;
