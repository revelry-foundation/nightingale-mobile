import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight, Alert} from 'react-native'
import {AuthStackProps} from '../../navigation/AuthStack'
import BusyButton from '../BusyButton'
import {Colors} from '../../styles'
import LoginStyles from '../../styles/LogInStyles'

const loginStyles = LoginStyles.createStyles()

export default class LogIn extends Component<AuthStackProps, object> {
  state = {
    password: '',
    email: '',
  }

  handleSubmit = async () => {
    const {
      screenProps: {
        auth: {logInUser},
      },
      navigation: {navigate},
    } = this.props

    const user = {
      password: this.state.password,
      email: this.state.email,
    }

    try {
      await logInUser(user, navigate)
      navigate('AuthLoading')
    } catch (e) {
      Alert.alert(e.title, e.message)
    }
  }

  render() {
    const {
      screenProps: {
        auth: {isFetching},
      },
      navigation: {navigate},
    } = this.props

    return (
      <View style={loginStyles.pageWrapper}>
        <View style={loginStyles.containerExpand}>
          <View>
            <Text style={loginStyles.h1}>Sign In</Text>
            <View style={loginStyles.inputContainer}>
              <Text style={loginStyles.label}>Email Address*</Text>
              <TextInput
                style={loginStyles.input}
                placeholder="Email Address*"
                placeholderTextColor={Colors.lightGray}
                onChangeText={email => this.setState({email})}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={loginStyles.inputContainer}>
              <Text style={loginStyles.label}>Password*</Text>
              <TextInput
                style={loginStyles.input}
                placeholder="Password*"
                placeholderTextColor={Colors.lightGray}
                onChangeText={password => this.setState({password})}
                secureTextEntry
                password
                autoCorrect={false}
              />
            </View>
          </View>
        </View>

        <View style={loginStyles.container}>
          <View style={loginStyles.buttonContainer}>
            <BusyButton
              style={loginStyles.button}
              underlayColor={Colors.buttonPrimaryBkgdActive}
              isBusy={isFetching}
              onPress={this.handleSubmit}>
              <Text style={loginStyles.buttonText}>Sign In</Text>
            </BusyButton>
          </View>
          <View style={loginStyles.helpTextContainer}>
            <TouchableHighlight
              onPress={() => navigate('ResetPassword')}
              underlayColor="transparent">
              <Text style={loginStyles.textLinkSmall}>
                Forgot Your Password?
              </Text>
            </TouchableHighlight>
          </View>
          <View style={loginStyles.helpTextContainer}>
            <Text style={loginStyles.helpText}>Don't have an account?</Text>
            <TouchableHighlight
              onPress={() => navigate('CreateAccount')}
              underlayColor="transparent">
              <Text style={loginStyles.textLinkSmall}>Sign Up</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}
