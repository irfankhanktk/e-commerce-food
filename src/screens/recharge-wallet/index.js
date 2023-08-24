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
import {PrimaryButton} from 'components/atoms/buttons';

const RechargeWallet = props => {
  const [data, setData] = React.useState([
    {
      id: 1,
      selected: false,
    },
    {
      id: 2,
      selected: false,
    },
    {
      id: 3,
      selected: false,
    },
    {
      id: 4,
      selected: false,
    },
    {
      id: 5,
      selected: false,
    },
  ]);

  const featuredProduct = ({item}) => (
    <RechargeWalletCard
      item={item}
      onPress={() => {
        setData(prevData =>
          prevData.map(data => ({
            ...data,
            selected: data.id === item.id,
          })),
        );
      }}
    />
  );

  return (
    <View style={styles.container}>
      <AppHeader back title={t('recharge_wallet')} />

      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={featuredProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />
      <View style={{paddingHorizontal: mvs(20), paddingBottom: mvs(10)}}>
        <PrimaryButton
          title={t('recharge_Wallet')}
          onPress={() => navigate('MyWallet')}
        />
      </View>
    </View>
  );
};
export default RechargeWallet;
