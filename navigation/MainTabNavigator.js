import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
//import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });
//
// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   /*tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),*/
// };

const SearchStack = createStackNavigator({
  Profile: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  /*tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),*/
};

const SearchResultStack = createStackNavigator({
  Profile: SearchResultScreen,
});

SearchResultStack.navigationOptions = {
  tabBarLabel: 'Search Results',
  /*tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),*/
};


export default createBottomTabNavigator({
  SearchStack,
  SearchResultStack,
});
