import React, {Component} from 'react'
import {View, Text} from 'react-native'
import LoginStyles from '../../styles/LogInStyles'
const loginStyles = LoginStyles.createStyles()

export default class Terms extends Component<AuthStackProps, object> {
  static navigationOptions = {
    headerTransparent: false,
  }
  render() {
    return (
      <View style={loginStyles.container}>
        <Text style={loginStyles.helpText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem
          tempore dolorum eaque minima veritatis voluptates molestiae illo
          laudantium dolor eum quo vero praesentium doloremque fugiat, pariatur
          aliquid. Reprehenderit, iste?
        </Text>
      </View>
    )
  }
}
