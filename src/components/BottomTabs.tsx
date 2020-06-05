import React, {Component} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import Feather from 'react-native-vector-icons/Feather'
import HotspotsStack from '../navigation/HotspotsStack'
import HomeStack from '../navigation/HomeStack'
import LocationsStack from '../navigation/LocationStack'
import OnboardingSplashScreen from '../components/OnboardingSplashScreen'
import OnboardingDisclaimerScreen from '../components/OnboardingDisclaimerScreen'
import OnboardingLocationRequestScreen from '../components/OnboardingLocationRequestScreen'

const iconSize = 20
const Tab = createBottomTabNavigator()
const OnboardingStackNavigator = createStackNavigator();

export function OnboardingStack() { 
  return (
    <OnboardingStackNavigator.Navigator screenOptions={{title: null}} header={null} headerMode='none'>
      <OnboardingStackNavigator.Screen name="Onboarding" component={OnboardingSplashScreen}/>
      <OnboardingStackNavigator.Screen name="OnboardingDisclaimer" component={OnboardingDisclaimerScreen} />
      <OnboardingStackNavigator.Screen name="OnboardingLocationRequest" component={OnboardingLocationRequestScreen} />
      <OnboardingStackNavigator.Screen name="To App" component={BottomTabs}/>
    </OnboardingStackNavigator.Navigator>
  )
}

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
