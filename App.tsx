/**
 *
 * @format
 */

import React, {Component} from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {StatusBar} from 'react-native'
import AppStack from './src/navigation/AppStack'
import LocationListener from './src/components/LocationListener'

const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
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
        <LocationListener />
        <AppContainer />
      </React.Fragment>
    )
  }
}
