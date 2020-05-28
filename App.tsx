/**
 *
 * @format
 */

import React, {Component} from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {StatusBar} from 'react-native'
import AppStack from './src/navigation/AppStack'
import AuthContainer from './src/containers/AuthContainer'
import LocationInterface from './src/navigation/LocationStack'

class AuthLoadingWithStore extends Component {
  static router = AuthStack.router

  // Pass the Unstated Container to React Navigation
  render() {
    return (
      <Subscribe to={[AuthContainer]}>
        {auth => (
          <AuthLoadingScreen
            navigation={this.props.navigation}
            screenProps={{auth}}
          />
        )}
      </Subscribe>
    )
  }
}

const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    Locations: LocationInterface,
  },
  {
    initialRouteName: 'App',
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  async componentDidMount() {
    global.apiConfig = {
      url: this.props.apiUrl,
    }
  }
  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </React.Fragment>
    )
  }
}
