/**
 *
 * @format
 */
import React, {Component} from 'react'
import {Provider} from 'unstated'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import LocationListener from './src/components/LocationListener'
import LocationStorageContainer from './src/containers/LocationStorageContainer'
import CovidStatusContainer from './src/containers/CovidStatusContainer'
import HotspotsContainer from './src/containers/HotspotsContainer'
import BottomTabs from './src/components/BottomTabs'

export default class App extends Component {
  async componentDidMount() {
    global.apiConfig = {
      url: this.props.apiUrl,
    }
  }
  render() {
    const locationStorage = new LocationStorageContainer(this.props)
    const statusStorage = new CovidStatusContainer(this.props)
    const hotspotStorage = new HotspotsContainer(this.props)

    return (
      <Provider inject={[locationStorage, statusStorage, hotspotStorage]}>
       <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
        <LocationListener locationStorage={locationStorage} />
      </Provider>
    )
  }
}
