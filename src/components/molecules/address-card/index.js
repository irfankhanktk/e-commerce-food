import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Regular from 'typography/regular-text';
import AddressAddedSucessfully from '../modals/address-add-sucessfully';
import SelectEditModal from '../modals/select-edit-modal';
import styles from './styles';

const AddressCard = ({item, style, onPress, loading}) => {
  const [select, setSelect] = React.useState(true);
  const [selectModal, setSelectModal] = React.useState(false);
  const [addressAddedModal, setAddressAddedModal] = React.useState(false);

  const toggleOptions = () => {
    setSelect(!select);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Row>
          <View style={{flex: 1}}>
            <Row style={{justifyContent: 'flex-start'}}>
              <Regular fontSize={mvs(12)} label={t('address')} />
              <Regular style={styles.yourAddress} label={'your location'} />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular fontSize={mvs(12)} label={t('city')} />
              <Regular style={styles.yourCity} label={'your city'} />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular fontSize={mvs(12)} label={t('country')} />
              <Regular style={styles.yourCountry} label={'your country'} />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular label={t('phone')} />
              <Regular style={styles.phone} label={'03448422399'} />
            </Row>
            <Row style={{marginTop: mvs(10), justifyContent: 'flex-start'}}>
              <Regular fontSize={mvs(12)} label={t('postal_code')} />
              <Regular style={styles.passCode} label={'0344'} />
            </Row>
          </View>
          <TouchableOpacity onPress={() => toggleOptions()}>
            <Entypo
              name={'dots-three-vertical'}
              size={25}
              color={colors.primary}
            />
          </TouchableOpacity>
        </Row>
      </View>
      {!select ? (
        <View style={styles.dotContainer}>
          <TouchableOpacity
            onPress={() => {
              navigate('Location'), setSelect(!select);
            }}>
            <Regular color={colors.darkBlack} label={t('edit')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect(!select)}>
            <Regular
              style={{color: colors.darkBlack, marginTop: mvs(10)}}
              label={t('delete')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigate('Location'), setSelect(!select);
            }}>
            <Regular
              style={{color: colors.darkBlack, marginTop: mvs(10)}}
              fontSize={mvs(12)}
              label={t('add_location')}
            />
          </TouchableOpacity>
        </View>
      ) : null}
      <SelectEditModal
        onClose={() => setSelectModal(false)}
        setAddressAddedModal={setAddressAddedModal}
        visible={selectModal}
      />
      <AddressAddedSucessfully
        onClose={() => setAddressAddedModal(false)}
        visible={addressAddedModal}
      />
    </View>
  );
};
export default React.memo(AddressCard);
