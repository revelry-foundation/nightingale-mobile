import React from 'react'
import {Colors} from '../styles'
import {createStackNavigator} from 'react-navigation-stack'
import Feather from 'react-native-vector-icons/Feather'
import HomeScreen from '../components/HomeScreen'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
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
      },
    }),
  }
)

export default HomeStack
