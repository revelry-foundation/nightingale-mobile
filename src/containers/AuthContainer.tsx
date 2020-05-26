import {Container} from 'unstated'
import {Alert} from 'react-native'

import {storeApiToken} from '../helpers/credential_storage'
import {
  getClientCredentials,
  getUserCredentials,
  refereshUserCredentials,
} from '../helpers/auth'

const SESSION_TIMEOUT_THRESHOLD = 300 // Will refresh the access token 5 minutes before it expires

export interface AuthContainerState {
  isFetching: boolean
  sessionTimeout: number
  apiClientId: string
  apiClientSecret: string
  currentUser: {
    token: string
    email: string
    id: string
  }
}

export default class AuthContainer extends Container<AuthContainerState> {
  constructor(props = {}) {
    super()
    this.state = {
      isFetching: false,
      sessionTimeout: null,
      apiClientId: props.apiClientId,
      apiClientSecret: props.apiClientSecret,
      currentUser: {
        token: '',
        email: '',
        id: '',
      },
    }
  }

  onAuthRequestSuccess = async (email, results: object) => {
    if (results == 'unauthorized') {
      throw {title: 'Unauthorized', message: 'Invalid Username or password.'}
    } else {
      // user is available in Auth container state when logged in
      await this.setState({
        currentUser: {
          email: email,
          token: results.access_token,
          refresh_token: results.refresh_token,
        },
      })

      // user reference also stored in keychain to persist session while logged out
      await storeApiToken(
        this.state.currentUser.email,
        JSON.stringify({
          access_token: results.access_token,
          refresh_token: results.refresh_token,
        })
      )

      this.setSessionTimeout(results.expires_in)
    }
  }

  logInUser = async user => {
    try {
      await this.setState({isFetching: true})

      const {access_token} = await getClientCredentials({
        client_id: this.state.apiClientId,
        client_secret: this.state.apiClientSecret,
      })

      const results = await getUserCredentials(access_token, user, {
        client_id: this.state.apiClientId,
        client_secret: this.state.apiClientSecret,
      })

      await this.onAuthRequestSuccess(user.email, results)
    } catch (error) {
      throw error
    } finally {
      this.setState({isFetching: false})
    }
  }

  setSessionTimeout = duration => {
    clearTimeout(this.state.sessionTimeout)
    this.setState({
      sessionTimeout: setTimeout(
        () =>
          this.refreshToken(
            this.state.currentUser.email,
            this.state.currentUser.refresh_token
          ),
        (duration - SESSION_TIMEOUT_THRESHOLD) * 1000
      ),
    })
  }

  refreshToken = async (email, refresh_token) => {
    if (!refresh_token) {
      return Promise.reject()
    }

    try {
      await this.setState({isFetching: true})

      const {access_token} = await getClientCredentials({
        client_id: this.state.apiClientId,
        client_secret: this.state.apiClientSecret,
      })

      const results = await refereshUserCredentials(
        access_token,
        refresh_token,
        {
          client_id: this.state.apiClientId,
          client_secret: this.state.apiClientSecret,
        }
      )

      await this.onAuthRequestSuccess(email, results)
    } catch (e) {
      return Promise.reject()
    } finally {
      this.setState({isFetching: false})
    }
  }

  createUser = async (user: object) => {
    try {
      this.setState({isFetching: true})

      const {access_token} = await getClientCredentials({
        client_id: this.state.apiClientId,
        client_secret: this.state.apiClientSecret,
      })

      const results = await post(
        `${global.apiConfig.url}/register`,
        access_token,
        {user}
      )

      const attributes = results.data.attributes

      await this.setState(
        {currentUser: {...attributes.user, token: attributes.access_token}},
        async () => {
          await storeApiToken(
            this.state.currentUser.email,
            JSON.stringify(results)
          )
        }
      )
    } catch (e) {
      Alert.alert(e.title, e.message)
    } finally {
      this.setState({isFetching: false})
    }
  }

  resetPassword = async (email, navigate) => {
    try {
      await this.setState({isFetching: true})

      await post(`${global.apiConfig.url}/forgot_password`, {
        email,
      })

      Alert.alert('', 'Reset Password Email Sent', [
        {
          text: 'OK',
          onPress: () => navigate('AuthRoot'),
        },
      ])
    } catch (e) {
      Alert.alert(e.title, e.message)
    } finally {
      this.setState({isFetching: false})
    }
  }

  replaceUserPassword = async (user, navigate) => {
    try {
      this.setState({isFetching: true})

      await post(`${global.apiConfig.url}/reset_password`, {
        user,
        token: user.token,
      })

      Alert.alert('', 'Password Reset Successful', [
        {
          text: 'OK',
          onPress: () => navigate('AuthRoot', {token: null}),
        },
      ])
    } catch (e) {
      Alert.alert(e.title, e.message)
    } finally {
      this.setState({isFetching: false})
    }
  }
}
export {AuthContainer}
