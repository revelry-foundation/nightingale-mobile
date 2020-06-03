import React, {Component} from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'

import HotspotsSplashScreen from '../components/HotspotsSplashScreen'
import HomeScreen from '../components/HomeScreen'
import LocationsScreen from '../components/LocationsScreen'

const iconSize = 20
const Tab = createBottomTabNavigator()

class BottomTabs extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused, tintColor}) => (
              <Feather
                name="home"
                size={iconSize}
                color={focused ? tintColor : 'black'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Locations"
          component={LocationsScreen}
          options={{
            tabBarLabel: 'Locations',
            tabBarIcon: ({focused, tintColor}) => (
              <Feather
                name="navigation"
                size={iconSize}
                color={focused ? tintColor : 'black'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Hotspots"
          component={HotspotsSplashScreen}
          options={{
            tabBarLabel: 'Hotspots',
            tabBarIcon: ({focused, tintColor}) => (
              <Feather
                name="map-pin"
                size={iconSize}
                color={focused ? tintColor : 'black'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }
}

export default BottomTabs
