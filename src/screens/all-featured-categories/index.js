import {useTheme} from '@react-navigation/native';
import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Loader} from 'components/atoms/loader';
import AllCategoriesCard from 'components/molecules/all-categories-card';
import {mvs} from 'config/metrices';
import useCategories from 'hooks/use-categories';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const AllFeaturedCategories = props => {
  const colors = useTheme().colors;
  const {loading, categories, error} = useCategories();

  const featuredProduct = ({item}) => (
    <AllCategoriesCard
      item={item}
      onPress={() => navigate('FeaturedCategories', {item: item})}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={'All Featured Categories'} />

      {loading ? (
        <Loader />
      ) : (
        <CustomFlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          data={categories}
          renderItem={featuredProduct}
          contentContainerStyle={{paddingBottom: mvs(20)}}
          // ListFooterComponent={<Loader />}
        />
      )}
    </View>
  );
};
export default AllFeaturedCategories;
