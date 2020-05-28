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
              style={loginStyles.button}
              underlayColor={Colors.buttonPrimaryBkgdActive}
              onPress={() => this.props.navigation.navigate('CreateAccount')}
            >
              <Text style={loginStyles.buttonText}>Get Started</Text>
            </TouchableHighlight>
          </View>
          <View style={loginStyles.buttonContainer}>
            <TouchableHighlight
              style={loginStyles.button}
              underlayColor={Colors.buttonPrimaryBkgdActive}
              onPress={() => this.props.navigation.navigate('StyleGuide')}
            >
              <Text style={loginStyles.buttonText}>Styleguide</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
