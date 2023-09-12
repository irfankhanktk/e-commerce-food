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
import {useTheme} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {Formik} from 'formik';
import {
  addressFormValidation,
  updatePasswordFormValidation,
  updateProfileFormValidation,
} from 'validations';
import {updateProfile, uploadImage} from 'services/api/auth-api-actions';

const EditProfile = props => {
  const {userInfo} = useAppSelector(s => s.user);
  const dispatch = useAppDispatch();
  const colors = useTheme().colors;
  const payload = {...userInfo};
  const [image, setImage] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [passLoading, setPassLoading] = React.useState(false);
  const [updatedModal, setUpdatedModal] = React.useState(false);
  const [passwordModal, setPasswordModal] = React.useState(false);
  console.log('userinfo  ::', userInfo);
  const openGallery = async () => {
    try {
      const res = await UTILS._returnImageGallery(false, true);
      // console.log('res---->>>>', res?.data);
      dispatch(
        uploadImage(
          {
            filename: 'crisp.jpg',
            image: res?.data,
          },
          () => {},
        ),
      );
      // setImage(res);
    } catch (error) {
      console.log('upload image error', error);
      Alert.alert('Error', UTILS?.returnError(error));
    }
  };
  const onSubmit = async values => {
    dispatch(updateProfile({...values, id: userInfo?.id}, setLoading));
  };
  const onSubmitPassword = async values => {
    console.log('values:::', values);
    dispatch(updateProfile({...values, id: userInfo?.id}, setPassLoading));
  };
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('edit_profile')} />
      <KeyboardAvoidScrollview contentContainerStyle={{paddingBottom: mvs(20)}}>
        <ImageBackground
          source={{
            uri: userInfo?.avatar_original, //'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
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

        <Medium
          color={colors.text}
          style={styles.name}
          label={userInfo?.name}
        />
        <Regular
          color={colors.text}
          style={styles.email}
          label={userInfo?.email}
        />

        <View
          style={{
            ...styles.innerContainer,
            backgroundColor: colors.downColor,
          }}>
          <Formik
            onSubmit={onSubmit}
            initialValues={payload}
            validationSchema={updateProfileFormValidation}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setTouched,
              setFieldValue,
              values,
              touched,
              errors,
            }) => (
              <>
                <Medium color={colors.text} label={t('basic_information')} />
                <PrimaryInput
                  containerStyle={{marginTop: mvs(10)}}
                  placeholder={t('name')}
                  value={values?.name}
                  onChangeText={handleChange('name')}
                  error={touched?.name && errors?.name}
                />
                <PrimaryInput
                  placeholder={t('phone')}
                  value={`${values?.phone || ''}`}
                  onChangeText={handleChange('phone')}
                  error={touched?.phone && errors?.phone}
                />
                <PrimaryInput
                  editable={false}
                  keyboardType={'email-address'}
                  placeholder={t('email')}
                  value={values?.email}
                  onChangeText={handleChange('email')}
                />
                <PrimaryButton
                  onPress={handleSubmit}
                  loading={loading}
                  title={t('update_profile')}
                />
              </>
            )}
          </Formik>
          <Formik
            onSubmit={onSubmitPassword}
            initialValues={{
              password: '',
              passowrd_confirmation: '',
            }}
            validationSchema={updatePasswordFormValidation}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setTouched,
              setFieldValue,
              values,
              touched,
              errors,
            }) => (
              <>
                {console.log('errors::', errors, touched)}
                <Medium
                  color={colors.text}
                  style={{paddingVertical: mvs(10)}}
                  label={t('password_changes')}
                />
                <PrimaryInput
                  placeholder={t('new_password')}
                  value={values?.password}
                  error={touched?.password && errors?.password}
                  onChangeText={handleChange('password')}
                />
                <PrimaryInput
                  placeholder={t('retype_password')}
                  value={values?.passowrd_confirmation}
                  error={
                    touched?.passowrd_confirmation &&
                    errors?.passowrd_confirmation
                  }
                  onChangeText={handleChange('passowrd_confirmation')}
                />
                <PrimaryButton
                  onPress={handleSubmit}
                  loading={passLoading}
                  title={t('update_password')}
                />
              </>
            )}
          </Formik>
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
