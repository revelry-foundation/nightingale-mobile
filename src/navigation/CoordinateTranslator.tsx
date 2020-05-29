import {Platform} from 'react-native'
import {GOOGLE_PLACES_API_KEY} from 'react-native-dotenv'

async function doRequest(endpoint) {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    const response = await fetch(endpoint, options)
    const responseJSON = await response.json()

    return [response.ok, responseJSON]
  } catch (e) {
    const responseJSON = {errors: {http: ['Unexpected error occurred']}}

    return [false, responseJSON]
  }
}

export async function reverseGeocode(latitude, longitude) {
  try {
    if (Platform.OS === 'ios') {
      const apiKey = GOOGLE_PLACES_API_KEY

      if (latitude && longitude) {
        const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
        const result = await doRequest(endpoint)
        return result
      } else {
        return [false, {}]
      }
    }
  } catch (e) {
    console.log(e)
  }

  // TODO: Add in android config here
  // found in this readme https://github.com/csath/react-native-config-reader
}

export async function formatAddressInfo(lat, lng) {
  const response = await reverseGeocode(lat, lng)

  if (response[1].results && response[1].results.length) {
    const addressInfo = response[1].results[0].formatted_address
    return addressInfo
  }
}
