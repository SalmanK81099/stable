import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '@src/constants/Colors';
import Account from '@src/screens/user/main/Account';
import Card from '@src/screens/user/main/Card';
import Home from '@src/screens/user/main/Home';
import { getRespValue, hp } from '@utils/design/design';
import { Image, Platform, StyleSheet } from 'react-native';
import { RootTabParamList } from 'types';

// Icons
import accountActive from '@assets/icons/bottom-tabs/account-active.png';
import account from '@assets/icons/bottom-tabs/account.png';
import cardActive from '@assets/icons/bottom-tabs/card-active.png';
import card from '@assets/icons/bottom-tabs/card.png';
import homeActive from '@assets/icons/bottom-tabs/home-active.png';
import home from '@assets/icons/bottom-tabs/home.png';
import { createStackNavigator } from '@react-navigation/stack';
import useMyI18n from '@src/hooks/useMyI18n';
import Add from '@src/screens/user/main/Account/Add';
import Movements from '@src/screens/user/main/Account/Movements';
import Send from '@src/screens/user/main/Account/Send';
import Profile from '@src/screens/user/main/Profile';
import AccountInfo from '@src/screens/user/main/Profile/AccountInfo';
import Cashout from '@src/screens/user/main/Profile/CashOut';
import Currencies from '@src/screens/user/main/Profile/Currencies';
import Legal from '@src/screens/user/main/Profile/Legal';
import Support from '@src/screens/user/main/Profile/Suppoort';
import QR from '@src/screens/user/main/QR';

const MainStack = createBottomTabNavigator<RootTabParamList>();
const MainStackTabs = () => {
  const i18n = useMyI18n();
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: Colors.light.textYellow,
        tabBarInactiveTintColor: Colors.light.textGray,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name="Home"
        key="Home"
        component={Home}
        options={() => ({
          tabBarLabel: i18n.t('components.bottomTabs.main.home'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? homeActive : home}
              style={styles.iconSquare}
              resizeMode="contain"
            />
          ),
        })}
      />
      <MainStack.Screen
        name="Account"
        key="Account"
        component={AccountStack}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarLabel: i18n.t('components.bottomTabs.main.account'),
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? accountActive : account}
              style={styles.iconSquare}
              resizeMode="contain"
            />
          ),
        })}
      />
      <MainStack.Screen
        name="Card"
        key="Card"
        component={Card}
        options={() => ({
          tabBarLabel: i18n.t('components.bottomTabs.main.card'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? cardActive : card}
              style={styles.iconHorizontal}
              resizeMode="contain"
            />
          ),
        })}
      />

      {/* Hidden Tab */}
      <MainStack.Screen
        name="Profile"
        component={ProfileStack}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarStyle: { display: 'none' },
          tabBarButton: () => null,
        })}
      />
      <MainStack.Screen
        name="QR"
        component={QR}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarStyle: { display: 'none' },
          tabBarButton: () => null,
        })}
      />
    </MainStack.Navigator>
  );
};

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Send" component={Send} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="Movements" component={Movements} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
      <Stack.Screen name="CashOut" component={Cashout} />
      <Stack.Screen name="Currencies" component={Currencies} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="Legal" component={Legal} />
    </Stack.Navigator>
  );
};

export default MainStackTabs;

const styles = StyleSheet.create({
  iconSquare: {
    width: getRespValue(35),
    height: getRespValue(35),
  },
  iconHorizontal: {
    width: getRespValue(45),
    height: getRespValue(45),
  },
  tabBarStyle: {
    backgroundColor: Colors.light.background,
    height: hp('11%'),
    paddingTop: hp('2%'),
    paddingBottom: Platform.OS === 'ios' ? hp('3.5%') : hp('2%'),
  },
  tabBarLabelStyle: {
    fontSize: getRespValue(13),
    fontFamily: 'aeonik',
  },
});
