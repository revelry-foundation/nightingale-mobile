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
    console.log(responseJSON.results, 'RESPONSE results')

    return [response.ok, responseJSON]
  } catch (e) {
    const responseJSON = {errors: {http: ['Unexpected error occurred']}}

    return [false, responseJSON]
  }
}

export function reverseGeocode(latitude, longitude) {
  if (Platform.OS === 'ios') {
    const apiKey = GOOGLE_PLACES_API_KEY

    console.log(latitude, longitude, 'THE COORDINATES')

    if (latitude && longitude) {
      const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`

      return doRequest(endpoint)
    } else {
      return [false, {}]
    }
  }

  // TODO: Add in android config here
  // found in this readme https://github.com/csath/react-native-config-reader
}

export async function formatAddressInfo(lat, lng) {
  console.log(location, 'THIS IS THE LOCATION')
  const response = await reverseGeocode(lat, lng)

  console.log(response, 'this is the response!')
  if (response[1].results && response[1].results.length) {
    const addressInfo = response[1].results[0].formatted_address

    console.log(addressInfo, 'ADDRESS INFO')
    return addressInfo
  }
}

// {"plus_code": {
//     "compound_code": "WXX4+69 New Orleans, LA, USA",
//     "global_code": "76XFWXX4+69"
// },
// "results": [{"access_points": [Array],
//             "address_components": [Array],
//             "formatted_address": "1018101 Slidell St, New Orleans, LA 70114, USA",
//             "geometry": [Object],
//             "place_id": "ChIJx1Y_AkmmIIYRcwKtE67hL3s",
//             "plus_code": [Object], "types": [Array]
//             },
//             {
//         "access_points": [Array],
//          "address_components": [Array],
//          "formatted_address": "Opelousas at Thayer, New Orleans, LA 70114, USA",
//         "geometry": [Object],
//         "place_id": "ChIJ62sXn0mmIIYRxWJFiwW3O4w",
//         "plus_code": [Object], "types": [Array]}, {"access_points": [Array], "address_components": [Array], "formatted_address": "719 Atlantic Ave, New Orleans, LA 70114, USA", "geometry": [Object], "place_id": "ChIJ0fezXkimIIYRhTEMRCSTEfw", "plus_code": [Object], "types": [Array]}, {"access_points": [Array], "address_components": [Array], "formatted_address": "1255 Opelousas Ave, New Orleans, LA 70114, USA", "geometry": [Object], "place_id": "Ei4xMjU1IE9wZWxvdXNhcyBBdmUsIE5ldyBPcmxlYW5zLCBMQSA3MDExNCwgVVNBIhsSGQoUChIJQzuerkmmIIYRHuFfWgosMioQ5wk", "types": [Array]}, {"access_points": [Array], "address_components": [Array], "formatted_address": "1223-1303 Opelousas Ave, New Orleans, LA 70114, USA", "geometry": [Object], "place_id": "ChIJQzuerkmmIIYRHuFfWgosMio", "types": [Array]}, {"access_points": [Array], "address_components": [Array], "formatted_address": "Whitney, New Orleans, LA 70114, USA", "geometry": [Object], "place_id": "ChIJ53waXUmmIIYR8l_PPIBtWpo", "types": [Array]}, {"access_points": [Array], "address_components": [Array], "formatted_address": "New Orleans, LA 70114, USA", "geometry": [Object], "place_id": "ChIJLWoxcgunIIYRITYCskX1AoI", "types": [Array]}, {"access_points": [Array], "address_components": [Array], "formatted_address": "Orleans Parish, New Orleans, LA, USA", "geometry": [Object], "place_id": "ChIJkTRNv98GnogRcN0jfs1gpz8", "types": [Array]}, {"access_points": [Array], "address_components": [Array], "formatted_address": "New Orleans, LA, USA", "geometry": [Object], "place_id": "ChIJZYIRslSkIIYRtNMiXuhbBts", "types": [Array]}, {"access_points": [Array], "address_components": [Array], "formatted_address": "Louisiana, USA", "geometry": [Object], "place_id": "ChIJZYIRslSkIIYRA0flgTL3Vck", "types": [Array]}, {"access_points": [Array], "address_components": [Array], "formatted_address": "United States", "geometry": [Object], "place_id": "ChIJCzYy5IS16lQRQrfeQ5K5Oxw", "types": [Array]}],
//         "status": "OK"}
