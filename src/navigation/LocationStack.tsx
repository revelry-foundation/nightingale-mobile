import React from 'react'
import {Colors} from '../styles'
import {createStackNavigator} from 'react-navigation-stack'
import Feather from 'react-native-vector-icons/Feather'
import LocationsScreen from '../components/LocationsScreen'

const LocationsStack = createStackNavigator(
  {
    Locations: LocationsScreen,
  },
  {
    initialRouteName: 'Locations',
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

export default LocationsStack
