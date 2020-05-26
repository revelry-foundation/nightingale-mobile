import {post} from '../helpers/api'

const getClientCredentials = async params => {
  return await post(`${global.apiConfig.url}/oauth/token`, null, {
    ...{
      grant_type: 'client_credentials',
    },
    ...params,
  })
}

const getUserCredentials = async (access_token, user, params) => {
  return await post(`${global.apiConfig.url}/oauth/token`, access_token, {
    ...{
      grant_type: 'password',
      username: user.email,
      password: user.password,
      scopes: 'read write',
    },
    ...params,
  })
}

const refereshUserCredentials = async (access_token, refresh_token, params) => {
  return await post(`${global.apiConfig.url}/oauth/token`, access_token, {
    ...{
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
      scopes: 'read write',
    },
    ...params,
  })
}

export {getClientCredentials, getUserCredentials, refereshUserCredentials}
