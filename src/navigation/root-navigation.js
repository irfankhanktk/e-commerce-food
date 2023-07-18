// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from 'config/colors';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Splash from 'screens/splash';
import {horizontalAnimation} from '../utils';
//cart side
import AddNewAddress from 'screens/add-new-address';
import AddressLocation from 'screens/address-location';
import AddNewPayment from 'screens/cart-screens/addNewPayment/addNewPayment';
import CartCheckout from 'screens/cart-screens/cart-checkout/cartCheckout';
import CartProceed from 'screens/cart-screens/cart-proceed/cart-Proceed';
import CartPreview from 'screens/cart-screens/cartPreview/cartPreview';
import OrderNotificationCart from 'screens/cart-screens/orderNotificationCart/orderNotificationCart';
import OrderStatus from 'screens/cart-screens/orderstatus/orderstatus';
import HelpCenterScreen from 'screens/help-center-screen';
import HelpScreen from 'screens/help-screen';
import LanguageScreen from 'screens/language-screen';
import LocationBooking from 'screens/location-booking';
import LocationNiceMeet from 'screens/location-nice-meet';
import LocationSetup from 'screens/location-setup';
import LoginScreen from 'screens/login-screen';
import MainDetails from 'screens/main-details';
import Notifications from 'screens/notifications';
import Onboarding from 'screens/on-boarding';
import Profile from 'screens/profile';
import ProfileInbox from 'screens/profile-inbox';
import ProfileOrderDetail from 'screens/profile-order-detail';
import ResetPassword from 'screens/reset-password';
import Signup from 'screens/signup';
import VerifyEmail from 'screens/verify-email';
import DrawerNavigation from './drawer-navigation/drawer-navigation';
import AddressHistory from 'screens/address-history';
import DiscoveryTab from 'screens/discovery-tab';
import OrderScreen from 'screens/order-screen';
import DeliveryOrderScreen from 'screens/delivery-order-screen';
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
          <Stack.Screen name="Onboarding" component={Onboarding} />
          {/* <Stack.Screen name="Me" component={Me} /> */}
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ProfileInbox" component={ProfileInbox} />
          <Stack.Screen
            name="ProfileOrderDetail"
            component={ProfileOrderDetail}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />

          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
        </Stack.Group>

        <Stack.Screen name="CartPreview" component={CartPreview} />
        <Stack.Screen name="CartProceed" component={CartProceed} />
        <Stack.Screen name="AddNewPayment" component={AddNewPayment} />
        <Stack.Screen name="CartCheckout" component={CartCheckout} />
        <Stack.Screen
          name="OrderNotificationCart"
          component={OrderNotificationCart}
        />
        <Stack.Screen name="OrderStatus" component={OrderStatus} />

        {/* location group */}
        <Stack.Group>
          <Stack.Screen name="LocationNiceMeet" component={LocationNiceMeet} />
          <Stack.Screen name="LocationSetup" component={LocationSetup} />
          <Stack.Screen name="AddressLocation" component={AddressLocation} />
          <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
          <Stack.Screen name="LocationBooking" component={LocationBooking} />
        </Stack.Group>
        <Stack.Screen name="Drawer" component={DrawerNavigation} />

        <Stack.Screen name="MainDetails" component={MainDetails} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} />
        <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
        <Stack.Screen name="AddressHistory" component={AddressHistory} />
        <Stack.Screen name="DiscoveryTab" component={DiscoveryTab} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
        <Stack.Screen
          name="DeliveryOrderScreen"
          component={DeliveryOrderScreen}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
