/**
 *
 * @format
 */

import React, {Component} from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {Provider, Subscribe} from 'unstated'
import {StatusBar} from 'react-native'
import AuthLoadingScreen from './src/components/Auth/AuthLoadingScreen'
import AuthStack from './src/navigation/AuthStack'
import AppStack from './src/navigation/AppStack'
import AuthContainer from './src/containers/AuthContainer'
import LocationInterface from './src/navigation/LocationStack'
import LocationListener from './src/components/LocationListener'

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
    AuthLoading: AuthLoadingWithStore,
    App: AppStack,
    Auth: AuthStack,
    Locations: LocationInterface,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

// gets the current screen from navigation state
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  async componentDidMount() {
    global.apiConfig = {
      url: this.props.apiUrl,
    }
  }
  render() {
    const authContainer = new AuthContainer(this.props)
    return (
      <Provider inject={[authContainer]}>
        <StatusBar barStyle="dark-content" />
        <LocationListener />
        <AppContainer />
      </Provider>
    )
  }
}
