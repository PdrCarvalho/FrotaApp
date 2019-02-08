
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Main from "./src/pages/main";
import Second from "./src/pages/second";
import MapPage from "./src/pages/mapsPage"

const AppNavigator = createStackNavigator({
  Home: {
    screen: Main,
  },
  Details: {
    screen: Second,
  },
  Map: {
    screen: MapPage,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);