import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight, Alert} from 'react-native'
// import {Colors} from '../../styles'
import LoginStyles from '../styles/LogInStyles'
import Geolocation from '@react-native-community/geolocation'
import SInfo from 'react-native-sensitive-info'

const loginStyles = LoginStyles.createStyles()

class LocationsInterface extends Component {
  state = {
    locations: SInfo.getAllItems({
      sharedPreferencesName: 'shared_preferences',
      keychainService: 'app',
    }).then(values => {
      console.log(values) //value1, value2
    }),
    deviceId: '',
  }
  config = {skipPermissionRequests: true}

  componentDidMount() {
    Geolocation.setRNConfiguration()
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
