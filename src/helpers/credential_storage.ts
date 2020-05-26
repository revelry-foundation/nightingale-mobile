import * as Keychain from 'react-native-keychain'

async function storeApiToken(userEmail: string, token: string) {
  await Keychain.setGenericPassword(userEmail, token)
}

async function getApiToken() {
  const credentials = await Keychain.getGenericPassword()

  try {
    const jsonToken = JSON.parse(credentials.password)
    return {
      ...jsonToken,
      email: credentials.username,
    }
  } catch {
    return {
      email: null,
      access_token: null,
      refresh_token: null,
    }
  }
}

async function resetApiToken() {
  await Keychain.resetGenericPassword()
}

export {storeApiToken, getApiToken, resetApiToken}
