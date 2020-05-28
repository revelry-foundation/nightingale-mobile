import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  NavigatorIOS,
} from 'react-native'
// import {Colors} from '../../styles'
import LoginStyles from '../styles/LogInStyles'
import Geolocation from '@react-native-community/geolocation'
import SInfo from 'react-native-sensitive-info'
import {reverseGeocode} from '../navigation/CoordinateTranslator'

const loginStyles = LoginStyles.createStyles()

class LocationsInterface extends Component {
  state = {
    locations: SInfo.getAllItems({
      sharedPreferencesName: 'shared_preferences',
      keychainService: 'app',
    })
      .then(values => values)
      .catch(null),
  }

  // so when a user opens the app, we start tracking position in background
  // to do so, we:
  // 1. set RN config
  // 2. get current position
  // 3. pass current position to 'SInfo'
  // 4. use Geolocation.watchPosition to generate events. each success callback
  // should be saved (possibly use triangulation to avoid adding places super close to
  // previous locations)
  // 5.

  // COMPONENT 1
  // make another file thats more functional, geared towards tracking location
  // immediately and constantly updating

  // COMPONENT 2
  // another module/component to fire coords off to an api to make them friendly to users

  // on location change event, we add to locations (see above state)
  componentDidMount() {
    var options = {
      // timeout: 5000,
      // maximumAge: 0,
      enableHighAccuracy: true,
      distanceFilter: 75,
      useSignificantChanges: true,
    }
    Geolocation.getCurrentPosition(this.success, this.error, options)
  }

  //   async fetchAddressInfo() {
  //     const response = await reverseGeocode({lat: 1, lon: 1})

  //     if (response[1].results && response[1].results.length) {
  //       const addressInfo = response[1].results[0].formatted_address

  //       console.log(addressInfo, 'address info')

  //   this.setState({addressInfo})
  //     }
  //   }

  success(pos) {
    console.log(pos, 'POS')
    var crd = pos.coords

    console.log('Your current position is:')
    console.log(`Latitude : ${crd.latitude}`)
    console.log(`Longitude: ${crd.longitude}`)
    console.log(`More or less ${crd.accuracy} meters.`)

    var something = reverseGeocode(pos.coords)
    console.log(something, 'SOMETHING')
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }

  render() {
    const {
      navigation: {navigate},
    } = this.props

    return (
      <View style={loginStyles.pageWrapper}>
        <View style={loginStyles.containerExpand}>
          <View>
            <Text style={loginStyles.h1}>Get Started</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default LocationsInterface
