/**
 *
 * @format
 */
import React, {Component} from 'react'
import {Provider} from 'unstated'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {StatusBar} from 'react-native'
import AppStack from './src/navigation/AppStack'
import LocationListener from './src/components/LocationListener'
import LocationStorageContainer from './src/containers/LocationStorageContainer'
import CovidStatusContainer from './src/containers/CovidStatusContainer'

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
    const locationStorage = new LocationStorageContainer(this.props)
    const statusStorage = new CovidStatusContainer(this.props)

    return (
      <Provider inject={[locationStorage, statusStorage]}>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
        <LocationListener locationStorage={locationStorage} />
      </Provider>
    )
  }
}
