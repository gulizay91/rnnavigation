import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

// import tab nav screens
import HomeScreen from '../screens/home'
import SettingsScreen from '../screens/settings'

// import stack nav screens
import ItemsScreen from '../screens/items/list'
import ItemDetailScreen from '../screens/items/detail'


const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
});

const ItemsStack = createStackNavigator({
  ItemList: { screen: ItemsScreen },
  ItemDetail: { screen: ItemDetailScreen },
});

const RootNav = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Items: { screen: ItemsStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // tabBarIcon: ({ focused, tintColor }) => {
      //   const { routeName } = navigation.state;
      //   let iconName;
      //   if (routeName === 'Home') {
      //     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      //   } else if (routeName === 'Settings') {
      //     iconName = `ios-options${focused ? '' : '-outline'}`;
      //   }

      //   // You can return any component that you like here! We usually use an
      //   // icon component from react-native-vector-icons
      //   return <Ionicons name={iconName} size={25} color={tintColor} />;
      // },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#EA2027',//'#d35400',
      inactiveTintColor: 'black',
    },
  }
);

export default createAppContainer(RootNav);