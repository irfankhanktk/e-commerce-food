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
import {useIsFocused, useTheme} from '@react-navigation/native';
import {deleteAddress, getAddresses} from 'services/api/auth-api-actions';
import {useAppSelector} from 'hooks/use-store';
import {Loader} from 'components/atoms/loader';
import {PlusButton} from 'components/atoms/buttons';

const AddressDetails = props => {
  const colors = useTheme().colors;
  const [loading, setLoading] = React.useState(true);
  const [delLoading, setDelLoading] = React.useState(false);
  const [selectModal, setSelectModal] = React.useState(false);
  const [addresses, setAddresses] = React.useState([]);
  const isFocus = useIsFocused();
  const [addressAddedModal, setAddressAddedModal] = React.useState(false);
  const getAllAddresses = async () => {
    try {
      if (!isFocus) return;
      const res = await getAddresses();
      console.log('res>>>>', res?.data);
      setAddresses(res?.data || []);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    if (!isFocus) return;
    getAllAddresses();
  }, [isFocus]);
  const deleteUserAddress = async id => {
    try {
      setDelLoading(id);
      await deleteAddress(id);
      const copy = [...addresses];
      setAddresses(copy?.filter(x => x?.id !== id));
    } catch (error) {
    } finally {
      setDelLoading(false);
    }
  };
  const renderItem = ({item}) => (
    <AddressCard
      loading={delLoading === item?.id}
      onPressDel={() => deleteUserAddress(item?.id)}
      item={item}
      onPress={() => navigate('ProductDetials')}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('address_details')} />
      {loading ? (
        <Loader />
      ) : (
        <CustomFlatList
          emptyList={
            !loading && (
              <View>
                <TouchableOpacity
                  // onPress={() => setSelectModal(true)}
                  onPress={() => navigate('Location')}
                  style={{
                    ...styles.newAddressContainer,
                    backgroundColor: colors.skyBlue,
                  }}>
                  <Medium label={'No Address Is Added'} />
                  <Bold fontSize={mvs(22)} label={'+'} />
                </TouchableOpacity>
              </View>
            )
          }
          showsVerticalScrollIndicator={false}
          data={addresses}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingBottom: mvs(20),
            paddingHorizontal: mvs(20),
          }}
        />
      )}
      <SelectEditModal
        onClose={() => setSelectModal(false)}
        visible={selectModal}
        setAddressAddedModal={setAddressAddedModal}
      />
      <AddressAddedSucessfully
        onClose={() => setAddressAddedModal(false)}
        visible={addressAddedModal}
      />
      <PlusButton onPress={() => navigate('Location')} />
    </View>
  );
};
export default AddressDetails;
