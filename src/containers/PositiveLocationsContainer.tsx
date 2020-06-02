import {Container} from 'unstated'

import Location from './LocationStorageContainer'
import {apiUrl, get} from '../helpers/api'
import {version} from '../../package.json'
import SInfo from 'react-native-sensitive-info'

const LOCATIONS_KEY = 'nightingale_locations'
const SINFO_OPTIONS = {}

export interface PositiveLocationState {
  positiveLocations: Location[]
  isfetching: boolean
}

export default class PositiveLocationsContainer extends Container<PositiveLocationState>{
  constructor(_props = {}) {
    super()
    this.state = {
      positiveLocations: [],
      isFetching: false,
    }
    this.init()
  }

  init = async () => {
    await this.setState({
      isFetching: true,
    })

    this.fetchMatchingPositiveLocations()
  }

  fetchMatchingPositiveLocations = async () => {
    // if you're a covid patient, figure out what to do with this then. 
    // Just filter out your own locations maybe?
    this.setState({isFetching: true})

    return SInfo.getItem(LOCATIONS_KEY, SINFO_OPTIONS)
    .then(locationsEncoded => JSON.parse(locationsEncoded))
    .then(locations => {
      return Promise.all(
        locations.map(location => {
        const {latitude: lat, longitude: lng, when} = location
        let params = {lat, lng, when, app_version: version}
        params = new URLSearchParams(params).toString();

        const url = apiUrl('/api/v1/find_proximate_positives')

        return get(`${url}?${params}`, undefined)
        .then(positiveLocation => {
          if(positiveLocation.positives.length) {
            return location
          }
        })
      }))
    })
    .then(locations => this.setState({positiveLocations: locations.filter(location => location), isFetching: false}))
  }
}

export {PositiveLocationsContainer}
