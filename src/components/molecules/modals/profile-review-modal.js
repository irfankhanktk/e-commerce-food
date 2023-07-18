import { Cross, CrossModal } from 'assets/icons';
import { Loader } from 'components/atoms/loader';
import { ModalWrapper } from 'components/atoms/modal-wrapper';
import { colors } from 'config/colors';
import { t } from 'i18next';
import { navigate } from 'navigation/navigation-ref';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Medium from 'typography/medium-text';
import { mvs } from 'config/metrices';
import { OtpInput } from 'components/atoms/otp-input';
import Bold from 'typography/bold-text';
import { stars } from 'assets/images';
import ReviewDetailCard from '../review-detail-card';
import Regular from 'typography/regular-text';
import { Row } from 'components/atoms/row';
import RatingCard from '../rating-card';
const ProfileReviewModal = ({
  disabled,
  setModal,
  style = {},
  modal,
  visible = false,
  onClose = item => { },
  onPress = () => { },
}) => {
  const data = [
    {
      name: 'Hashim Ali',
      img: 'profile_pic',
      time: '1 day ago',
      rating: '5.0',
      description: 'Simply awesome. Professional staff , fast service.',

    },
    {
      name: 'Hashim Ali',
      img: 'profile_pic',
      time: '1 day ago',
      rating: '5.0',
      description: 'Simply awesome. Professional staff , fast service.',

    },
    {
      name: 'Hashim Ali',
      img: 'profile_pic',
      time: '1 day ago',
      rating: '5.0',
      description: 'Simply awesome. Professional staff , fast service.',

    },
    {
      name: 'Hashim Ali',
      img: 'profile_pic',
      time: '1 day ago',
      rating: '5.0',
      description: 'Simply awesome. Professional staff , fast service.',

    },
    {
      name: 'Hashim Ali',
      img: 'profile_pic',
      time: '1 day ago',
      rating: '5.0',
      description: 'Simply awesome. Professional staff , fast service.',

    },
    {
      name: 'Hashim Ali',
      img: 'profile_pic',
      time: '1 day ago',
      rating: '5.0',
      description: 'Simply awesome. Professional staff , fast service.',

    },
    {
      name: 'Hashim Ali',
      img: 'profile_pic',
      time: '1 day ago',
      rating: '5.0',
      description: 'Simply awesome. Professional staff , fast service.',

    },
    {
      name: 'Hashim Ali',
      img: 'profile_pic',
      time: '1 day ago',
      rating: '5.0',
      description: 'Simply awesome. Professional staff , fast service.',

    },
  ];
  const ratings = [
    {
      name: 'Excelent',
      color: '#00FF66',
      with: 200,
    },
    {
      name: 'Good',
      color: '#95F47E',
      with: 138,
    },
    {
      name: 'Average',
      color: '#FDFF56',
      with: 130,
    },
    {
      name: 'Below Average',
      color: '#FFB800',
      with: 110,
    },
    {
      name: 'Poor',
      color: '#DF0808',
      with: 33,
    },

  ];
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
        <View style={{ paddingHorizontal: mvs(20) }}>
          <Bold label={'Azam Cafe'} color={colors.black} style={style.cafeText} fontSize={24} />
          <Bold label={'Reviews'} color={colors.primary} fontSize={20} />
          <View style={styles.ratingMainCard}>
            <View style={styles.ratingCard}>
              <Bold label={'4.8'} fontSize={30} color={colors.white} />
              <Image source={stars} style={styles.img} />
              {
                ratings.map((item, index) => (
                  <RatingCard item={item} index={index} />
                ))
              }
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.cardContainer}>
            {data.map((item, index) => (
              <ReviewDetailCard item={item} />

            ))}
          </ScrollView>
        </View>
      </View>
    </ModalWrapper>
  );
};
export default ProfileReviewModal;
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
  cafeText: { paddingVertical: mvs(18) },
  ratingCard: { paddingHorizontal: mvs(10), alignItems: 'center', justifyContent: 'center', },
  ratingMainCard: { borderRadius: mvs(10), padding: mvs(20), marginVertical: mvs(15), backgroundColor: colors.primary },
});
