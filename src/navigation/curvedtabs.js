import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import * as SVGS from 'assets/icons/tab-icons';
import * as SVGS from 'assets/icons/tab-icons/index';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppSelector} from 'hooks/use-store';
import {Text, TouchableOpacity, View} from 'react-native';
import CartTab from 'screens/cart';
import CategoriesTab from 'screens/categories';
import HomeTab from 'screens/home';
import MessageTab from 'screens/message';
// import CartScreen from 'screens/cart';
// import AboutUsScreen from 'screens/categories';

// import ShoppingScreen from 'screens/shopping';
import UserTab from 'screens/user-tab';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';

function MyTabBar({cartLength, state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.halfWhite,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const Icon = SVGS[`${route.name}${isFocused ? 'Active' : ''}`];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              height: 65,
            }}>
            <View
              style={{
                backgroundColor:
                  index === 2 ? colors.primary : colors.transparent,
                borderRadius: mvs(50),
                height: mvs(60),
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: mvs(index === 2 ? -20 : 0),
              }}>
              <Icon height={mvs(20)} width={mvs(20)} />
              {index !== 2 && isFocused && (
                <Regular fontSize={mvs(10)} label={label} numberOfLines={1} />
              )}
              {index === 3 && cartLength && (
                <TouchableOpacity
                  style={{
                    backgroundColor: colors.darkBlack,
                    position: 'absolute',
                    height: mvs(25),
                    width: mvs(25),
                    borderRadius: mvs(25 / 2),
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: mvs(-10),
                    right: mvs(0),
                  }}>
                  <Medium
                    fontSize={mvs(10)}
                    color={colors.white}
                    label={cartLength}
                  />
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// ...
export const TabBar = props => {
  const initialRoute = props?.route?.params?.initialRoute;
  const Tab = createBottomTabNavigator();
  const {user, cart} = useAppSelector(s => s);
  const {cart_list} = cart;
  // console.log('cart_list:::', cart_list);
  return (
    <Tab.Navigator
      initialRouteName={initialRoute || 'Home'}
      screenOptions={{headerShown: false}}
      tabBar={props => (
        <MyTabBar cartLength={cart_list?.length || '0'} {...props} />
      )}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Categories" component={CategoriesTab} />
      <Tab.Screen name="Message" component={MessageTab} />
      <Tab.Screen name="Cart" component={CartTab} />
      {/* {/* <Tab.Screen name="Categories" component={CategoriesTab} /> */}
      <Tab.Screen name="Me" component={UserTab} />
    </Tab.Navigator>
  );
};
