import React from 'react'
import {Colors} from '../styles'
import {createStackNavigator} from 'react-navigation-stack'
import Feather from 'react-native-vector-icons/Feather'
import HotspotLocationsScreen from '../components/HotspotLocationsScreen'
import HotspotsSplashScreen from '../components/HotspotsSplashScreen'

const HotspotsStack = createStackNavigator(
  {
    Hotspots: HotspotsSplashScreen,
    "Hotspot Locations": HotspotLocationsScreen,
  },
  {
    initialRouteName: 'Hotspots',
    defaultNavigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <Feather
          style={{left: 10}}
          name="menu"
          size={32}
          color="white"
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerStyle: {
        backgroundColor: Colors.brandPrimary,
        shadowColor: 'transparent',
      },
      headerTitleStyle: {
        color: 'white',
      },
    }),
  }
)

export default HotspotsStack
