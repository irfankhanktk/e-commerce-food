import {colors} from 'config/colors';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {ModalWrapper} from 'components/atoms/modal-wrapper';
import {mvs} from 'config/metrices';
import i18n from 'translation';

import {Tick} from 'assets/icons';
import CustomFlatList from 'components/atoms/custom-flatlist';
import PrimaryInput from 'components/atoms/inputs';
import Regular from 'typography/regular-text';
const DropdownModal = ({
  selectedItem,
  onChangeText,
  visible = false,
  onClose = item => {},
  items = [],
  id,
  search,
  setSearch,
}) => {
  const {t} = i18n;

  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle]}>
      <View style={styles.container}>
        <PrimaryInput
          placeholder="Search here"
          value={search}
          onChangeText={setSearch}
        />
        <CustomFlatList
          data={items}
          renderItem={({item}) => {
            if (!search?.trim() || item?.name?.match(new RegExp(search, 'i')))
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: mvs(5),
                  }}
                  onPress={() => {
                    onChangeText(
                      items?.map(ele => ({
                        ...ele,
                        selected: item?.id === ele?.id,
                      })),
                    );
                  }}>
                  <Regular label={item?.name || item?.title} />
                  {id === item?.id && <Tick />}
                </TouchableOpacity>
              );
            return null;
          }}
        />
        {search?.trim() &&
          !items?.some(x => x?.name?.match(new RegExp(search, 'i'))) && (
            <Regular style={{textAlign: 'center'}} label={'No result found'} />
          )}
      </View>
    </ModalWrapper>
  );
};
export default DropdownModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: mvs(20),
  },
  container: {
    maxHeight: mvs(400),
    minHeight: mvs(400),
    backgroundColor: colors.white,
    paddingVertical: mvs(20),
    borderRadius: mvs(20),
    paddingHorizontal: mvs(20),
  },
  btnOk: {
    width: mvs(100),
    borderRadius: mvs(30),
    height: mvs(40),
    marginTop: mvs(35),
  },
});
