import CustomFlatList from 'components/atoms/custom-flatlist';

import {useIsFocused, useTheme} from '@react-navigation/native';
import {PlusButton} from 'components/atoms/buttons';
import AppHeader from 'components/atoms/headers/app-header';
import AddressCard from 'components/molecules/address-card';
import AddressAddedSucessfully from 'components/molecules/modals/address-add-sucessfully';
import SelectEditModal from 'components/molecules/modals/select-edit-modal';
import {mvs} from 'config/metrices';
import {useAppSelector} from 'hooks/use-store';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getAddressess} from 'services/api/address-api-actions';
import {deleteAddress} from 'services/api/auth-api-actions';
import {setUserAddress} from 'store/reducers/address-reducer';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import styles from './styles';

const AddressDetails = props => {
  const dispatch = useDispatch();
  const colors = useTheme().colors;

  const [delLoading, setDelLoading] = React.useState(false);
  const [selectModal, setSelectModal] = React.useState(false);

  const isFocus = useIsFocused();
  const [addressAddedModal, setAddressAddedModal] = React.useState(false);
  const {userAddress} = useAppSelector(s => s.address);

  const deleteUserAddress = async id => {
    try {
      setDelLoading(id);
      await deleteAddress(id);
      const copy = [...userAddress];
      dispatch(setUserAddress(copy?.filter(x => x?.id !== id)));
    } catch (error) {
    } finally {
      setDelLoading(false);
    }
  };
  React.useEffect(() => {
    dispatch(getAddressess());
  }, [isFocus]);
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

      <CustomFlatList
        emptyList={
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
        }
        showsVerticalScrollIndicator={false}
        data={userAddress}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />

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
