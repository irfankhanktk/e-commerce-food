import CustomFlatList from 'components/atoms/custom-flatlist';
import HomeHeader from 'components/atoms/headers/home-header';

import {mvs} from 'config/metrices';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppHeader from 'components/atoms/headers/app-header';
import Medium from 'typography/medium-text';
import {colors} from 'config/colors';
import AllFeaturedCategoriesCard from 'components/molecules/all-featured-categories-card';

const FeaturedCategories = props => {
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

  const featuredProduct = ({item}) => <AllFeaturedCategoriesCard item={item} />;

  return (
    <View style={styles.container}>
      <AppHeader back title={'Featured Categories'} />
      <Medium
        label={'Featured Categories'}
        style={{
          marginLeft: mvs(20),
          marginTop: mvs(20),
          color: colors.darkBlack,
        }}
      />
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
export default FeaturedCategories;
