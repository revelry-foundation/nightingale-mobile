import React from 'react'

import {createDrawerNavigator} from 'react-navigation-drawer'

import Feather from 'react-native-vector-icons/Feather'
import {Typography} from '../styles'

import Drawer from '../components/Drawer'
import HomeStack from './HomeStack'
import SettingsStack from './SettingsStack'

const drawerIconSize = 20

const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerIcon: ({focused, tintColor}) => (
          <Feather
            name="home"
            size={drawerIconSize}
            color={focused ? tintColor : 'black'}
          />
        ),
      },
    },
    Settings: SettingsStack,
  },
  {
    initialRouteName: 'Home',
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: '#F37021',
      labelStyle: {
        fontSize: Typography.bodyFontSizeLarge,
        fontWeight: Typography.fontWeightNormal,
        marginLeft: 10,
      },
      iconContainerStyle: {
        marginLeft: 25,
        marginRight: 0,
      },
    },
  }
)

export default AppStack
