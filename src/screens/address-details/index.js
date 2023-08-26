import CustomFlatList from 'components/atoms/custom-flatlist';

import AppHeader from 'components/atoms/headers/app-header';
import AddressCard from 'components/molecules/address-card';
import AddressAddedSucessfully from 'components/molecules/modals/address-add-sucessfully';
import SelectEditModal from 'components/molecules/modals/select-edit-modal';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import styles from './styles';

const AddressDetails = props => {
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
  const [selectModal, setSelectModal] = React.useState(false);
  const [addressAddedModal, setAddressAddedModal] = React.useState(false);

  const featuredProduct = ({item}) => (
    <AddressCard item={item} onPress={() => navigate('ProductDetials')} />
  );

  return (
    <View style={styles.container}>
      <AppHeader back title={t('address_details')} />
      <View style={{paddingHorizontal: mvs(20)}}>
        <TouchableOpacity
          // onPress={() => setSelectModal(true)}
          onPress={() => navigate('Location')}
          style={styles.newAddressContainer}>
          <Medium label={'No Addresses Is Added'} />
          <Bold fontSize={mvs(22)} label={'+'} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: mvs(20)}}>
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
      <SelectEditModal
        onClose={() => setSelectModal(false)}
        visible={selectModal}
        setAddressAddedModal={setAddressAddedModal}
      />
      <AddressAddedSucessfully
        onClose={() => setAddressAddedModal(false)}
        visible={addressAddedModal}
      />
    </View>
  );
};
export default AddressDetails;
