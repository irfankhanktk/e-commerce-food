// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ForgotPassword from 'screens/forgot-password';
import LoginScreen from 'screens/login-screen';
import PrivacyPolicy from 'screens/privacy-policy';
import RenewPassword from 'screens/renew-password';
import Signup from 'screens/signup';
import Splash from 'screens/splash';
import SucessfullyChangePassword from 'screens/sucessfully-change-password';
import TermsAndConditions from 'screens/terms-conditions';
import UpdatePassword from 'screens/update-password';
import {horizontalAnimation} from '../utils';
// import TabNavigator from './tab-navigation';
import {useTheme} from '@react-navigation/native';
import AddLocation from 'screens/add-location';
import AddressDetails from 'screens/address-details';
import AllFeaturedCategories from 'screens/all-featured-categories';
import BrowseAllVenders from 'screens/browse-all-venders';
import CheckOut from 'screens/checkout';
import EditProfile from 'screens/edit-profile';
import FeaturedCategories from 'screens/featured-categories';
import InboxMessage from 'screens/inbox-message';
import MyWallet from 'screens/my-wallet';
import MyWishList from 'screens/my-wishlist';
import OrderDetails from 'screens/order-details';
import OrderHistory from 'screens/order-history';
import ProductDetials from 'screens/product-details';
import RechargeWallet from 'screens/recharge-wallet';
import RefundStatus from 'screens/refund-status';
import ShippingCost from 'screens/shipping-cost';
import ShippingInfo from 'screens/shipping-info';
import Tracking from 'screens/tracking';
import DrawerNavigator from './drawer-navigation';
import Brands from 'screens/brands';
import {useAppSelector} from 'hooks/use-store';
import LanguageScreen from 'screens/language-screen';
import AdminDashBoard from 'screens/admin-dashboard';
import Notification from 'screens/notification';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const {colors, dark} = useTheme();
  const {userInfo} = useAppSelector(s => s?.user);
  const userId = userInfo?.id;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
      <StatusBar
        translucent={false}
        backgroundColor={colors.background}
        barStyle={dark ? 'light-content' : 'dark-content'}
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
          {/* <Stack.Screen name="TabNavigator" component={TabBar} /> */}
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
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
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="AddressDetails" component={AddressDetails} />
          <Stack.Screen name="Location" component={AddLocation} />
          <Stack.Screen name="InboxMessage" component={InboxMessage} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="ShippingInfo" component={ShippingInfo} />
          <Stack.Screen name="ShippingCost" component={ShippingCost} />
          <Stack.Screen name="CheckOut" component={CheckOut} />
          <Stack.Screen name="Tracking" component={Tracking} />
          <Stack.Screen
            name="AllFeaturedCategories"
            component={AllFeaturedCategories}
          />
          <Stack.Screen name="Brands" component={Brands} />
          <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
          <Stack.Screen name="AdminDashBoard" component={AdminDashBoard} />
          <Stack.Screen name="Notification" component={Notification} />
        </Stack.Group>
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
