import React, {Component} from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {Subscribe} from 'unstated'
import Login from '../components/Auth/Login'
import CreateAccount from '../components/Auth/CreateAccount'
import IndexScreen from '../components/Auth/index'
import Terms from '../components/Auth/Terms'
import AuthContainer, {AuthContainerState} from '../containers/AuthContainer'

interface AuthContainerInterface {
  state: AuthContainerState
  loginUser: (user: object) => Promise<boolean>
  createUser: (user: object) => Promise<boolean>
}

export interface AuthStackProps {
  screenProps: {
    auth: AuthContainerInterface
  }
  navigation: {
    navigate: (string) => object
  }
}

const AuthStack: Component<AuthStackProps, object> = createStackNavigator(
  {
    AuthRoot: IndexScreen,
    Login: Login,
    CreateAccount: CreateAccount,
    Terms: Terms,
  },
  {
    initialRouteName: 'AuthRoot',
  }
)

interface AuthStackWithStoreProps {
  navigation: object
}

export default class AuthStackWithStore extends Component<
  AuthStackWithStoreProps,
  object
> {
  static router = AuthStack.router

  // Pass the Unstated Container to React Navigation
  render() {
    return (
      <Subscribe to={[AuthContainer]}>
        {auth => (
          <AuthStack navigation={this.props.navigation} screenProps={{auth}} />
        )}
      </Subscribe>
    )
  }
}
