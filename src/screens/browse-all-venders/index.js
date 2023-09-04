import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import BrowseAllVendersCard from 'components/molecules/browse-venders-card';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const BrowseAllVenders = props => {
  const colors = useTheme().colors;

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

  const featuredProduct = ({item}) => <BrowseAllVendersCard item={item} />;

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('browse_all_venders')} />

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
export default BrowseAllVenders;
