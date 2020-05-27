import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight, Alert} from 'react-native'
// import BusyButton from '../BusyButton'
// import {Colors} from '../../styles'
import LoginStyles from '../styles/LogInStyles'
// import {AuthStackProps} from '../../navigation/AuthStack'
// import CheckBox from 'react-native-check-box'

const loginStyles = LoginStyles.createStyles()

class LocationsInterface extends Component {
  state = {
    places: [],
    deviceId: '',
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
