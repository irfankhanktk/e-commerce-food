import {Edit} from 'assets/icons';
import {PrimaryButton} from 'components/atoms/buttons';
import AppHeader from 'components/atoms/headers/app-header';
import PrimaryInput from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import UpdatedPasswordModal from 'components/molecules/modals/updated-password-modal';
import UpdatedProfileModal from 'components/molecules/modals/updated-profile-modal';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {UTILS} from 'utils';
import styles from './styles';

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
          onClose={() => setUpdatedModal(false)}
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
