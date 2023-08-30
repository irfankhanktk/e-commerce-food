import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import AllProductsCard from 'components/molecules/all-products-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import Medium from 'typography/medium-text';
import styles from './styles';

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
    <AllProductsCard item={item} onPress={() => navigate('ProductDetials')} />
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
