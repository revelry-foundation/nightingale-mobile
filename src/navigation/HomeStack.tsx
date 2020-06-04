import React from 'react'
import HomeScreen from '../components/HomeScreen'
import CovidStatusScreen from '../components/CovidStatusScreen'
import {createStackNavigator} from '@react-navigation/stack'

const HomeStackNavigator = createStackNavigator();

function HomeStack() {
  return (
    <HomeStackNavigator.Navigator screenOptions={{title: null}}>
      <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
      <HomeStackNavigator.Screen name="Covid Status" component={CovidStatusScreen} />
    </HomeStackNavigator.Navigator>
  );
}

export default HomeStack
