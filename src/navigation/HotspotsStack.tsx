import React from 'react'
import {Colors} from '../styles'
import {createStackNavigator} from '@react-navigation/stack'
import Feather from 'react-native-vector-icons/Feather'
import HotspotLocationsScreen from '../components/HotspotLocationsScreen'
import HotspotsSplashScreen from '../components/HotspotsSplashScreen'

const HotspotsStackNavigator = createStackNavigator();

function HotspotsStack() {
  return (
    <HotspotsStackNavigator.Navigator>
      <HotspotsStackNavigator.Screen name="Hotspots" component={HotspotsSplashScreen} />
      <HotspotsStackNavigator.Screen name="Hotspot Locations" component={HotspotLocationsScreen} />
    </HotspotsStackNavigator.Navigator>
  );
}
export default HotspotsStack
