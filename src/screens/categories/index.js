import {useTheme} from '@react-navigation/native';
import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Loader} from 'components/atoms/loader';
import AllCategoriesCard from 'components/molecules/all-categories-card';
import {mvs} from 'config/metrices';
import useCategories from 'hooks/use-categories';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

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
      <AppHeader back title={t('categories')} />

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
