import {
  car,
  flag,
  globe,
  hands,
  home,
  location,
  open_mail,
  question_mark,
} from 'assets/images';
import DrawerHomeCard from 'components/molecules/drawr-home-card';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Bold from 'typography/bold-text';

const CustomDrawerContent = props => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.header}></View>
      <DrawerHomeCard
        onPress={() => props?.navigation?.toggleDrawer()}
        icon1={home}
        label1={'Home'}
        br={8}
      />

      <View style={styles.needHelpContainer}>
        <DrawerHomeCard
          onPress={() => navigate('HelpScreen')}
          icon1={question_mark}
          label1={'Need help?'}
          containerStyle={styles.helpStyle}
        />
        <DrawerHomeCard
          onPress={() => navigate('AddressLocation')}
          icon1={question_mark}
          label1={'Adresses'}
          containerStyle={styles.helpStyle}
        />
        <DrawerHomeCard
          onPress={() => navigate('HelpCenterScreen')}
          icon1={'Help center'}
          label1={'Help center'}
          containerStyle={styles.helpStyle}
        />
        <DrawerHomeCard
          icon1={'Help center'}
          label1={'Terms and conditions'}
          containerStyle={styles.helpStyle}
        />
        <DrawerHomeCard
          icon1={'Help center'}
          label1={'Privacy policy'}
          containerStyle={styles.helpStyle}
        />
      </View>
      <DrawerHomeCard
        icon1={location}
        label1={'Country'}
        icon2={flag}
        label2={'Germany'}
        containerStyle={[styles.countryStyle, styles.top]}
      />
      <DrawerHomeCard
        icon1={globe}
        label1={'Language'}
        label2={'English'}
        styles={styles.helpStyle}
        containerStyle={[styles.countryStyle, styles.bottom]}
      />
      <Bold
        label={'Join our business'}
        color={colors.primary}
        style={styles.joinTxt}
      />
      <DrawerHomeCard
        icon1={car}
        label1={'Become a Rider'}
        containerStyle={[styles.countryStyle, styles.top]}
      />
      <DrawerHomeCard icon1={hands} label1={'Become a partner'} />
      <DrawerHomeCard
        icon1={open_mail}
        label1={'Become a Courrier'}
        containerStyle={[
          styles.countryStyle,
          styles.bottom,
          {
            marginTop: mvs(1),
          },
        ]}
      />
    </View>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  needHelpContainer: {
    backgroundColor: colors.white,
    width: width - 100,
    marginHorizontal: mvs(17),
    borderRadius: mvs(8),
    // paddingHorizontal: mvs(17.5),
    marginVertical: mvs(14),
    alignItems: 'center',
    ...colors.shadow,
  },
  countryStyle: {
    backgroundColor: colors.white,
    height: mvs(48),
    width: width - 100,
    marginHorizontal: mvs(17),
    paddingHorizontal: mvs(17.5),
    alignItems: 'center',
    marginBottom: mvs(2),
  },
  helpStyle: {margin: mvs(10), width: width - 120, height: mvs(27)},
  bottom: {
    borderBottomLeftRadius: mvs(8),
    borderBottomRightRadius: mvs(8),
  },
  top: {
    borderTopLeftRadius: mvs(8),
    borderTopRightRadius: mvs(8),
  },
  joinTxt: {
    paddingHorizontal: mvs(23),
    marginTop: mvs(34),
    marginBottom: mvs(7),
  },
  header: {
    height: mvs(120),
    width: width - 60,
    backgroundColor: colors.green,
    marginBottom: mvs(48.5),
  },
});
