import React, {Component} from 'react'
import {View, AppState, Text, TextInput, TouchableHighlight, Alert, NavigatorIOS} from 'react-native'
// import {Colors} from '../../styles'
import LoginStyles from '../styles/LogInStyles'
const loginStyles = LoginStyles.createStyles()

class LocationsInterface extends Component {

  render() {
    return (
      <View style={loginStyles.pageWrapper}>
        <View style={loginStyles.containerExpand}>
          <Text>Future Home Of User Locations</Text>
        </View>
      </View>
    )
  }
}

export default LocationsInterface
