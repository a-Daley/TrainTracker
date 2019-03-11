import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TextsScreen from '../screens/TextsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AlertsScreen from '../screens/AlertsScreen';
import TrainScreen from '../screens/TrainScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Train: {screen: TrainScreen}
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="home"
    />
  ),
};

const AlertsStack = createStackNavigator({
  Alerts: AlertsScreen,
});

AlertsStack.navigationOptions = {
  tabBarLabel: 'Alerts',
  tabBarIcon: ({ focused }) => ( 
    <TabBarIcon 
      focused={focused}
      name="warning"
    />
  ),
};

const TextsStack = createStackNavigator({
  Texts: TextsScreen,
});

TextsStack.navigationOptions = {
  tabBarLabel: 'Texts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="textsms"
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'My Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="person"
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AlertsStack,
  TextsStack
});
