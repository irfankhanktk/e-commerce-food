// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from 'config/colors';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ForgotPassword from 'screens/forgot-password';
import LoginScreen from 'screens/login-screen';
import RenewPassword from 'screens/renew-password';
import Signup from 'screens/signup';
import Splash from 'screens/splash';
import SucessfullyChangePassword from 'screens/sucessfully-change-password';
import UpdatePassword from 'screens/update-password';
import {horizontalAnimation} from '../utils';
import TermsAndConditions from 'screens/terms-conditions';
import PrivacyPolicy from 'screens/privacy-policy';
import TabNavigator from './tab-navigation';
import {TabBar} from './curvedtabs';
import FeaturedCategories from 'screens/featured-categories';
import ProductDetials from 'screens/product-details';
import MyWishList from 'screens/my-wishlist';
import MyWallet from 'screens/my-wallet';
import RechargeWallet from 'screens/recharge-wallet';
import BrowseAllVenders from 'screens/browse-all-venders';
import RefundStatus from 'screens/refund-status';
const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
      <StatusBar
        translucent={false}
        backgroundColor={colors.primary}
        barStyle={'light-content'}
      />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={horizontalAnimation}>
        <Stack.Group>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
          <Stack.Screen name="RenewPassword" component={RenewPassword} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          {/* <Stack.Screen name="TabNavigator" component={TabNavigator} /> */}
          <Stack.Screen name="TabNavigator" component={TabBar} />
          <Stack.Screen
            name="TermsAndConditions"
            component={TermsAndConditions}
          />
          <Stack.Screen
            name="SucessfullyChangePassword"
            component={SucessfullyChangePassword}
          />
          <Stack.Screen
            name="FeaturedCategories"
            component={FeaturedCategories}
          />
          <Stack.Screen name="ProductDetials" component={ProductDetials} />
          <Stack.Screen name="MyWishList" component={MyWishList} />
          <Stack.Screen name="MyWallet" component={MyWallet} />
          <Stack.Screen name="RechargeWallet" component={RechargeWallet} />
          <Stack.Screen name="BrowseAllVenders" component={BrowseAllVenders} />
          <Stack.Screen name="RefundStatus" component={RefundStatus} />
        </Stack.Group>
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
