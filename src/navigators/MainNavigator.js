import React from 'react'
import { StackNavigator } from 'react-navigation'

import * as colors from '../constants/colors';

import HomeContainer from '../containers/Home/HomeContainer';
import PromosContainer from '../containers/Promos/PromosContainer';

const navigatorOptions = {
  navigationOptions: {
  },
};

export default (MainNavigator = StackNavigator(
  {
    Home: {
      screen: HomeContainer,
      navigationOptions: {
        title: "Clint's Tire & Auto",
      },
    },
    Promos: {
      path: 'promos',
      screen: PromosContainer,
      navigationOptions: {
        title: 'Promos and Deals',
      },
    },
  },
  navigatorOptions
));