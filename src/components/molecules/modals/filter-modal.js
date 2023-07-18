import { Cross, CrossModal } from 'assets/icons';
import { Loader } from 'components/atoms/loader';
import { ModalWrapper } from 'components/atoms/modal-wrapper';
import { colors } from 'config/colors';
import { t } from 'i18next';
import { navigate } from 'navigation/navigation-ref';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Medium from 'typography/medium-text';
import { mvs } from 'config/metrices';
import { OtpInput } from 'components/atoms/otp-input';
import Bold from 'typography/bold-text';
import { drop_down, stars } from 'assets/images';
import ReviewDetailCard from '../review-detail-card';
import Regular from 'typography/regular-text';
import { Row } from 'components/atoms/row';
import RatingCard from '../rating-card';
import DropdownModal from './dropdown-modal';
import RatingStar from '../rating-star';
import { Checkbox } from 'components/atoms/checkbox';
import { PrimaryButton } from 'components/atoms/buttons';
const FilterModal = ({
  disabled,
  setModal,
  style = {},
  modal,
  visible = false,
  onClose = item => { },
  onPress = () => { },
}) => {
  const [special, setSpecial] = useState(true)
  const [best, setBest] = useState(false)
  const [downModal, setDownModal] = useState(false)
  const data = [{ id: 0, title: 'Distance' }, { id: 1, title: 'Best match' }, { id: 2, title: 'Ratings' }, { id: 3, title: 'Alphabetical' }];

  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onClose()} style={styles.cross}>
          <Cross />
        </TouchableOpacity>
        <View style={{ paddingHorizontal: mvs(30), paddingTop: mvs(10) }}>
          <Bold label={'Flter'} color={colors.black} fontSize={20} style={styles.filterText} />
          <Bold label={'Sort By'} color={colors.black} fontSize={18} />
          {/* <DropdownModal visible={visible} /> */}
          <TouchableOpacity style={styles.dropDown} onPress={() => setDownModal(true)}>
            <Regular fontSize={20} label={'Distance'} />
            <Image source={drop_down} style={styles.downImg} />
          </TouchableOpacity>
          <View style={styles.ratingContainer}>
            <Regular label={'Restaurant Ratings'} color={colors.black} />
            <RatingStar fill={colors.gray}
              stroke={colors.gray} width={88}
              rate={5} fontSize={17} />
            <View style={{ marginTop: mvs(35) }} />
            <Regular label={'Offers and Savings'} color={colors.black} />
            <Checkbox label={'Special'} onPress={() => setSpecial(!special)} checked={special} />
            <Checkbox label={'Best of all'} onPress={() => setBest(!best)} checked={best} />
          </View>
          <Bold label={'Reset filters'} color={colors.primary}
            style={{ alignSelf: 'center', marginTop: mvs(30) }} />

        </View>
        <View style={styles.pdhzntl}>
          <PrimaryButton
            title="Show 100+ Results"
            onPress={() => {
              Alert.alert('button pressed');
            }}
            containerStyle={styles.logout}
          />
        </View>
        <DropdownModal onClose={() => setDownModal(false)} visible={downModal} items={data} />
      </View>
    </ModalWrapper>
  );
};
export default FilterModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 0,
    // paddingHorizontal: mvs(20),
  },
  container: {
    marginTop: mvs(80),
    height: mvs(770),
    backgroundColor: colors.white,
    borderTopRightRadius: mvs(20),
    borderTopLeftRadius: mvs(20),
  },
  cardContainer: {
    flexGrow: 1, paddingBottom: mvs(430)
  },
  img: { height: mvs(16), width: mvs(107), marginVertical: mvs(6) },
  cross: { padding: mvs(10), alignSelf: 'flex-end', position: 'absolute', },
  filterText: { alignSelf: 'center', marginBottom: mvs(20) },
  ratingCard: { paddingHorizontal: mvs(10), alignItems: 'center', justifyContent: 'center', },
  ratingContainer: { padding: mvs(25), marginVertical: mvs(5) },
  logout: {
    position: 'absolute',
    bottom: mvs(70),
  },

  pdhzntl: {
    flex: 1,
    marginHorizontal: mvs(30),
  },
  dropDown: {
    height: mvs(50),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.primary,
    marginTop: mvs(5),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: mvs(2)
  },
  downImg: { height: mvs(15), width: mvs(25) }
});
