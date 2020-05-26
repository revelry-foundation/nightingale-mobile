import React, {Component} from 'react'
import {Text, View, TouchableHighlight} from 'react-native'
import {Colors} from '../../styles'
import {AuthStackProps} from '../../navigation/AuthStack'
import LoginStyles from '../../styles/LogInStyles'
const loginStyles = LoginStyles.createStyles()

export default class Index extends Component<AuthStackProps, object> {
  render() {
    return (
      <View style={loginStyles.pageWrapper}>
        <View style={loginStyles.containerExpand}>
          <View style={loginStyles.logo} />
        </View>

        <View style={loginStyles.container}>
          <View style={loginStyles.buttonContainer}>
            <TouchableHighlight
              style={loginStyles.buttonWhite}
              underlayColor={Colors.buttonWhiteBkgdActive}
              onPress={() => this.props.navigation.navigate('CreateAccount')}>
              <Text style={loginStyles.buttonWhiteText}>Get Started</Text>
            </TouchableHighlight>
          </View>
          <View style={loginStyles.buttonContainer}>
            <TouchableHighlight
              style={loginStyles.buttonLinkWhite}
              underlayColor={Colors.buttonLinkWhiteBkgdActive}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={loginStyles.buttonLinkWhiteText}>Log In</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
