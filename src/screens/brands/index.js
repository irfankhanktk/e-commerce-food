import {useTheme} from '@react-navigation/native';
import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Loader} from 'components/atoms/loader';
import BrandCard from 'components/molecules/brand-card';
import {mvs} from 'config/metrices';
import useBrands from 'hooks/use-brands';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const Brands = props => {
  const colors = useTheme().colors;
  const {loading, brands, error} = useBrands(true);

  const renderItem = ({item}) => (
    <BrandCard
      item={item}
      onPress={() => navigate('FeaturedCategories', {item: item})}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={'Brands'} />

      {loading ? (
        <Loader />
      ) : (
        <CustomFlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          data={brands}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: mvs(20)}}
        />
      )}
    </View>
  );
};
export default Brands;
