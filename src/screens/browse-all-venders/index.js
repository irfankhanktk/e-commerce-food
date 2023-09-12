import {useTheme} from '@react-navigation/native';
import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {Loader} from 'components/atoms/loader';
import BrowseAllVendersCard from 'components/molecules/browse-venders-card';
import {mvs} from 'config/metrices';
import useVendors from 'hooks/use-vendors';
import {t} from 'i18next';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const BrowseAllVenders = props => {
  const colors = useTheme().colors;
  const {loading, vendors} = useVendors();

  const renderItem = ({item}) => <BrowseAllVendersCard item={item} />;

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('browse_all_venders')} />
      {loading ? (
        <Loader />
      ) : (
        <CustomFlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          data={vendors}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: mvs(20)}}
        />
      )}
    </View>
  );
};
export default BrowseAllVenders;
