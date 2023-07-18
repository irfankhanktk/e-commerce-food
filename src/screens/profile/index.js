import {inbox, lock, profile, profile_mobile, profile_pic} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import Line from 'components/atoms/line';
import ProfileCard from 'components/molecules/profile-card';
import {mvs} from 'config/metrices';
import React from 'react';
import {Alert, Image, View} from 'react-native';
import Medium from 'typography/medium-text';
import styles from './styles';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {onUpdateProfile} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';

const Profile = props => {
  const dispatch = useAppDispatch();
  const {userInfo} = useAppSelector(s => s?.user);
  const [loading, setLoading] = React.useState(false);
  const [payload, setPayload] = React.useState({
    fullName: userInfo?.fullName || userInfo?.userName,
    phone: userInfo?.phone,
  });
  const [enables, setEnables] = React.useState({
    fullName: false,
    phone: false,
  });
  const onSaveChanges = async () => {
    dispatch(
      onUpdateProfile(
        {
          ...userInfo,
          ...payload,
          role: 'Customer',
          address: 'khan plaza',
        },
        setLoading,
      ),
    );
  };
  return (
    <View style={{...styles.container}}>
      <Header1x2x title={'Profile'} back style={{paddingBottom: mvs(50)}} />
      <View style={{flex: 1, marginTop: mvs(80)}}>
        <KeyboardAvoidScrollview contentContainerStyle={{paddingHorizontal: 0}}>
          <>
            <>
              <ProfileCard
                onChangeText={t => setPayload({...payload, fullName: t})}
                onPress={() =>
                  setEnables({...enables, fullName: !enables.fullName})
                }
                item={{
                  image: profile,
                  title: payload?.fullName,
                  value: 'Edit',
                  editable: enables?.fullName,
                  placeholder: 'John Doe',
                }}
              />
              <Line marginVertica={16} />
              <ProfileCard
                onChangeText={t => setPayload({...payload, phone: t})}
                onPress={() => setEnables({...enables, phone: !enables.phone})}
                item={{
                  image: profile_mobile,
                  title: payload?.phone,
                  value: 'Edit',
                  editable: enables?.phone,
                  placeholder: '+xx xxxxxxx',
                }}
              />
              <Line marginVertica={16} />
              <ProfileCard
                item={{
                  image: inbox,
                  title: 'john@gmail.com',
                  value: 'Edit',
                  editable: false,
                }}
              />
              <Line marginVertica={16} />
              <ProfileCard
                item={{
                  image: lock,
                  title: '.......',
                  value: 'Change Password',
                  editable: false,
                }}
              />
              <Line marginVertica={16} />
            </>
          </>
          <View style={styles.pdhzntl}>
            <PrimaryButton
              loading={loading}
              title="Update Profile"
              onPress={onSaveChanges}
              containerStyle={styles.logout}
            />
          </View>
        </KeyboardAvoidScrollview>
      </View>
      <View style={styles.headerImage}>
        <Image
          source={profile_pic}
          style={{height: mvs(110), width: mvs(110)}}
        />
        <Medium
          onPress={() => {
            Alert.alert('text pressed');
          }}
          fontSize={10}
          label={'Change Picture'}
          style={{alignSelf: 'center'}}
        />
      </View>
    </View>
  );
};
export default Profile;
