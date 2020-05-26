import React from 'react'

import {createStackNavigator} from 'react-navigation-stack'
import Feather from 'react-native-vector-icons/Feather'
import {ScrollView, View, SafeAreaView} from 'react-native'
import StyleGuide from '../components/StyleGuide'
import {Colors} from '../styles'
import LogInStyles from '../styles/LogInStyles'

const loginStyles = LogInStyles.createStyles()

const Settings = props => (
  <ScrollView>
    <SafeAreaView
      style={{flex: 1}}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <View style={loginStyles.container}>
        <View style={loginStyles.buttonContainer} />
      </View>
    </SafeAreaView>
  </ScrollView>
)

const SettingsStack = createStackNavigator(
  {
    Settings: Settings,
    StyleGuide: StyleGuide,
  },
  {
    initialRouteName: 'Settings',
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Settings',
      headerLeft: (
        <Feather
          style={{left: 10}}
          name="menu"
          size={32}
          color={Colors.white}
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerStyle: {
        backgroundColor: Colors.brandPrimary,
      },
      headerTitleStyle: {
        color: Colors.white,
      },
    }),
  }
)

export default SettingsStack
