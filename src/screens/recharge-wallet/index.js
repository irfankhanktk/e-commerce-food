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
import {t} from 'i18next';
import RechargeWalletCard from 'components/molecules/recharge-wallet-card';

const RechargeWallet = props => {
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
    <RechargeWalletCard
      item={item}
      onPress={() => navigate('ProductDetials')}
    />
  );

  return (
    <View style={styles.container}>
      <AppHeader back title={t('recharge_wallet')} />

      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />
    </View>
  );
};
export default RechargeWallet;
