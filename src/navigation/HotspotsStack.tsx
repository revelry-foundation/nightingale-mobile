import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HotspotLocationsScreen from '../components/HotspotLocationsScreen'
import HotspotsSplashScreen from '../components/HotspotsSplashScreen'

const HotspotsStackNavigator = createStackNavigator();

function HotspotsStack() {
  return (
    <HotspotsStackNavigator.Navigator screenOptions={{title: null}}>
      <HotspotsStackNavigator.Screen name="Hotspots" component={HotspotsSplashScreen} />
      <HotspotsStackNavigator.Screen name="Hotspot Locations" component={HotspotLocationsScreen} />
    </HotspotsStackNavigator.Navigator>
  );
}
export default HotspotsStack
