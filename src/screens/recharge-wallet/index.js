import {PrimaryButton} from 'components/atoms/buttons';
import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import RechargeWalletCard from 'components/molecules/recharge-wallet-card';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useTheme} from '@react-navigation/native';

const RechargeWallet = props => {
  const colors = useTheme().colors;

  const [data, setData] = React.useState([
    {
      id: 1,
      selected: true,
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
    <View style={{...styles.container, backgroundColor: colors.background}}>
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
          title={t('recharge_wallet')}
          onPress={() => navigate('MyWallet')}
        />
      </View>
    </View>
  );
};
export default RechargeWallet;
