import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Row} from 'components/atoms/row';
import Regular from 'typography/regular-text';
import styles from './styles';
import {PrimaryButton} from 'components/atoms/buttons';
import {colors} from 'config/colors';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import WalletHistoryCard from 'components/molecules/wallet-history-card';
import WalletAmount from 'components/molecules/modals/Wallet-amountmodal';
import {useTheme} from '@react-navigation/native';

const MyWallet = props => {
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
  const [amountModal, setAmountModal] = React.useState(false);
  const [value, setValue] = React.useState('');

  const featuredProduct = ({item}) => (
    <WalletHistoryCard item={item} onPress={() => navigate('ProductDetials')} />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('my_wallet')} />
      <Row style={{paddingHorizontal: mvs(20), marginTop: mvs(20)}}>
        <View style={styles.balanceContainer}>
          <Medium color={colors.white} label={t('wallet_balance')} />
          <Medium color={colors.white} label={'$1,702.300'} />
          <Regular
            fontSize={mvs(10)}
            color={colors.white}
            label={'Last Recharged : 1 Year Ago'}
          />
        </View>

        <TouchableOpacity
          onPress={() => setAmountModal(true)}
          style={{
            ...styles.rechargeContainer,
            backgroundColor: colors.skyBlue,
          }}>
          <Medium label={t('recharge_wallet')} />
          <Bold fontSize={mvs(20)} label={'+'} />
        </TouchableOpacity>
      </Row>
      <Medium
        color={colors.text}
        style={{marginTop: mvs(20), paddingHorizontal: mvs(20)}}
        label={t('wallet_recharge_history')}
      />
      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />
      <WalletAmount
        onClose={() => setAmountModal(false)}
        visible={amountModal}
        setValue={setValue}
        value={value}
      />
    </View>
  );
};
export default MyWallet;
