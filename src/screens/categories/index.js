import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import AllCategoriesCard from 'components/molecules/all-categories-card';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import {getAllCategories} from 'services/api/auth-api-actions';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import useCategories from 'hooks/use-categories';
import {Loader} from 'components/atoms/loader';

const CategoriesTab = props => {
  const colors = useTheme().colors;
  const {loading, categories, error} = useCategories(true);

  const featuredProduct = ({item}) => (
    <AllCategoriesCard
      item={item}
      onPress={() => navigate('FeaturedCategories', {item: item})}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={'Categories'} />

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
        />
      )}
    </View>
  );
};
export default CategoriesTab;
