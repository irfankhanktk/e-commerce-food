import CustomFlatList from 'components/atoms/custom-flatlist';
import HomeHeader from 'components/atoms/headers/home-header';
import FeaturedCategoriesCard from 'components/molecules/featured-categories-card';
import FeaturedProductsCard from 'components/molecules/featured-products-card';
import {mvs} from 'config/metrices';
import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import AppHeader from 'components/atoms/headers/app-header';
import Medium from 'typography/medium-text';
import {colors} from 'config/colors';
import {navigate} from 'navigation/navigation-ref';
import {t} from 'i18next';
import {user} from 'assets/images';
import Regular from 'typography/regular-text';
import {Edit} from 'assets/icons';
import PrimaryInput from 'components/atoms/inputs';
import {PrimaryButton} from 'components/atoms/buttons';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {UTILS} from 'utils';
import UpdatedProfileModal from 'components/molecules/modals/updated-profile-modal';
import UpdatedPasswordModal from 'components/molecules/modals/updated-password-modal';

const EditProfile = props => {
  const [image, setImage] = React.useState();
  const [updatedModal, setUpdatedModal] = React.useState(false);
  const [passwordModal, setPasswordModal] = React.useState(false);
  const openGallery = async () => {
    try {
      const res = await UTILS._returnImageGallery();
      console.log(res);
      setImage(res);
    } catch (error) {
      console.log('upload image error', error);
      Alert.alert('Error', UTILS?.returnError(error));
    }
  };

  return (
    <View style={styles.container}>
      <AppHeader back title={t('edit_profile')} />
      <KeyboardAvoidScrollview contentContainerStyle={{paddingBottom: mvs(20)}}>
        <ImageBackground
          source={{
            uri: 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
          }}
          borderRadius={mvs(100)}
          style={styles.imageBackGround}>
          <Image
            source={image}
            style={{width: '100%', height: '100%', borderRadius: mvs(100)}}
          />
          <TouchableOpacity
            onPress={() => openGallery()}
            style={styles.editBtn}>
            <Edit />
          </TouchableOpacity>
        </ImageBackground>

        <Medium style={styles.name} label={'Paul K. Jensen'} />
        <Regular style={styles.email} label={'customer1@example.com'} />
        <View style={styles.innerContainer}>
          <Medium label={t('basic_information')} />
          <PrimaryInput
            containerStyle={{marginTop: mvs(10)}}
            placeholder={t('name')}
          />
          <PrimaryInput placeholder={t('phone')} />
          <PrimaryInput
            keyboardType={'email-address'}
            placeholder={t('email')}
          />
          <PrimaryButton
            onPress={() => setUpdatedModal(true)}
            title={t('update_profile')}
          />
          <Medium
            style={{paddingVertical: mvs(10)}}
            label={t('password_changes')}
          />
          <PrimaryInput placeholder={t('new_password')} />
          <PrimaryInput placeholder={t('retype_password')} />
          <PrimaryButton
            onPress={() => setPasswordModal(true)}
            title={t('update_password')}
          />
        </View>
        <UpdatedProfileModal
          onClose={() => setUpdatedModat(false)}
          visible={updatedModal}
        />
        <UpdatedPasswordModal
          onClose={() => setPasswordModal(false)}
          visible={passwordModal}
        />
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default EditProfile;
