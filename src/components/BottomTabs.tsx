import React, {Component} from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'

import HotspotsStack from '../navigation/HotspotsStack'
import HomeStack from '../navigation/HomeStack'
import LocationsStack from '../navigation/LocationStack'
import CovidStatusScreen from '../components/CovidStatusScreen'

import LocationsScreen from '../components/LocationsScreen'

const iconSize = 20
const Tab = createBottomTabNavigator()

class BottomTabs extends Component {

  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
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
          component={LocationsStack}
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
          component={HotspotsStack}
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
