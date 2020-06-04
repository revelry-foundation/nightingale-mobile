import React from 'react'
import LocationsScreen from '../components/LocationsScreen'
import LocationScreen from '../components/LocationScreen'
import {createStackNavigator} from '@react-navigation/stack'

const LocationStackNavigator = createStackNavigator();

function LocationsStack() {
  return (
    <LocationStackNavigator.Navigator>
      <LocationStackNavigator.Screen name="Locations" component={LocationsScreen} />
      <LocationStackNavigator.Screen name="Location" component={LocationScreen} />
    </LocationStackNavigator.Navigator>
  );
}

export default LocationsStack
