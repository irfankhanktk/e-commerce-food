import * as React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import Bold from 'typography/bold-text';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {PrimaryButton} from 'components/atoms/buttons';

const CustomDrawer = props => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(s => s);
  // console.log('userInfo me check====>', userInfo.user.userInfo);
  const user = userInfo?.user?.userInfo;
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo
          size={25}
          name="cross"
          color={colors.white}
          style={styles.cross}
        />
      </TouchableOpacity>

      <ImageBackground
        source={{
          uri: 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
        }}
        style={styles.imageStyle}
        borderRadius={mvs(100)}>
        {/* <Image source={{uri: user?.profileImage}} style={styles.userImage} /> */}
      </ImageBackground>
      <Bold label={user?.name} style={styles.userName} />
      <PrimaryButton
        onPress={() => navigation.navigate('ProfileTab')}
        containerStyle={styles.profilebutton}
        textStyle={styles.textbtn}
        title="Profile"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('TermAndCondition')}
        containerStyle={styles.termBtn}
        textStyle={styles.textbtn}
        title="Terms and Conditions"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('PrivacyPolicy')}
        containerStyle={styles.termBtn}
        textStyle={styles.textbtn}
        title="Privacy Policy"
      />
    </View>
  );
};
export default CustomDrawer;
