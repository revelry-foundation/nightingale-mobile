import React from 'react'
import {ActivityIndicator, StatusBar, View} from 'react-native'
import {getApiToken} from '../../helpers/credential_storage'

export default class AuthLoadingScreen extends React.Component {
  async componentDidMount() {
    await this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const {email, refresh_token} = await getApiToken()

    await this.props.screenProps.auth
      .refreshToken(email, refresh_token)
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      .then(() => {
        this.props.navigation.navigate('App')
      })
      .catch(() => {
        this.props.navigation.navigate('Auth')
      })
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}
