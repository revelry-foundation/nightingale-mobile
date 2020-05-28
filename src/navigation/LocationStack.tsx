import React, {Component} from 'react'
import {
  View,
  AppState,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  NavigatorIOS,
} from 'react-native'
// import {Colors} from '../../styles'
import LoginStyles from '../styles/LogInStyles'
import SInfo from 'react-native-sensitive-info'
import {formatAddressInfo} from '../navigation/CoordinateTranslator'
import {
  start_tracking,
  initial_pos,
  localStorageOptions,
  watch_pos_options,
} from '../helpers/geolocation'
import Geolocation from '@react-native-community/geolocation'

const loginStyles = LoginStyles.createStyles()

class LocationsInterface extends Component {
  state = {
    locations: [],
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position)
        this.setState({locations: [initialPosition]})
      },
      error => console.log(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )

    Geolocation.watchPosition(
      position => {
        const lastPosition = JSON.stringify(position)
        const locations = this.state.locations.concat([lastPosition])
        this.setState({locations: locations})
      },
      console.log,
      watch_pos_options
    )
  }

  render() {
    const {locations} = this.state
    const {
      navigation: {navigate},
    } = this.props
    return (
      <View style={loginStyles.pageWrapper}>
        <View style={loginStyles.containerExpand}>
          {locations.map(location =. (
          <Text>{formatAddressInfo(location)}</Text>
          ))}
        </View>
      </View>
    )
  }
}

export default LocationsInterface
