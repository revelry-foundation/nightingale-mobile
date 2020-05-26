import React, {Component} from 'react'
import {View, Text, TextInput, TouchableHighlight, Alert} from 'react-native'
import BusyButton from '../BusyButton'
import {Colors} from '../../styles'
import LoginStyles from '../../styles/LogInStyles'
import {AuthStackProps} from '../../navigation/AuthStack'
import CheckBox from 'react-native-check-box'

const loginStyles = LoginStyles.createStyles()

class CreateAccount extends Component<AuthStackProps, object> {
  state = {
    password: '',
    phone: '',
    email: '',
    confirmPassword: '',
    termsAccepted: false,
  }

  handleSubmit = async () => {
    const {
      screenProps: {
        auth: {createUser},
      },
      navigation: {navigate},
    } = this.props

    const user = {
      new_password: this.state.password,
      new_password_confirmation: this.state.confirmPassword,
      email: this.state.email,
      phone: this.state.phone,
    }

    try {
      await createUser(user)
      navigate('AuthLoading')
    } catch (e) {
      Alert.alert(e.title, e.message)
    }
  }

  render() {
    const {
      screenProps: {
        auth: {
          state: {isFetching},
        },
      },
      navigation: {navigate},
    } = this.props

    return (
      <View style={loginStyles.pageWrapper}>
        <View style={loginStyles.containerExpand}>
          <View>
            <Text style={loginStyles.h1}>Get Started</Text>
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

            <View style={loginStyles.inputContainer}>
              <Text style={loginStyles.label}>Confirm Password*</Text>
              <TextInput
                style={loginStyles.input}
                placeholder="Confirm Password*"
                placeholderTextColor={Colors.lightGray}
                onChangeText={confirmPassword =>
                  this.setState({confirmPassword})
                }
                secureTextEntry
                password
                autoCorrect={false}
              />
            </View>
            <View style={loginStyles.combinedRowInputContainer}>
              <CheckBox
                onClick={() => {
                  this.setState({termsAccepted: !this.state.termsAccepted})
                }}
                isChecked={this.state.termsAccepted}
              />
              <Text style={loginStyles.termsText}>
                {'I have read and accept the '}
              </Text>
              <TouchableHighlight
                onPress={() => navigate('Terms')}
                underlayColor="transparent">
                <Text style={loginStyles.textLinkNormal}>Terms of Service</Text>
              </TouchableHighlight>
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
              <Text style={loginStyles.buttonText}>Create Account</Text>
            </BusyButton>
          </View>
        </View>
      </View>
    )
  }
}

export default CreateAccount
