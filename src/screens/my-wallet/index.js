import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import FeaturedProductsCard from 'components/molecules/featured-products-card';
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

const MyWallet = props => {
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

  // const featuredProduct = ({item}) => (
  //   <FeaturedProductsCard
  //     item={item}
  //     onPress={() => navigate('ProductDetials')}
  //   />
  // );

  return (
    <View style={styles.container}>
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

        <TouchableOpacity style={styles.rechargeContainer}>
          <Medium label={t('recharge_wallet')} />
          <Bold fontSize={mvs(20)} label={'+'} />
        </TouchableOpacity>
      </Row>

      {/* <CustomFlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{paddingBottom: mvs(20)}}
      /> */}
    </View>
  );
};
export default MyWallet;
