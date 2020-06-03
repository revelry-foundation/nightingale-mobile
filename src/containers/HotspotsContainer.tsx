import {Container} from 'unstated'

import Location from './LocationStorageContainer'
import {apiUrl, get} from '../helpers/api'
import {version} from '../../package.json'
import SInfo from 'react-native-sensitive-info'

const LOCATIONS_KEY = 'nightingale_locations'
const SINFO_OPTIONS = {}

export interface HotspotLocationState {
  hotspotPositives: Location[]
  isfetching: boolean
}

export default class HotspotsContainer extends Container<HotspotLocationState>{
  constructor(_props = {}) {
    super()
    this.state = {
      hotspotPositives: [],
      isFetching: false,
    }
    this.init()
  }

  init = async () => {
    await this.setState({
      isFetching: true,
    })

    this.fetchMatchingHotspotLocations()
  }

  fetchMatchingHotspotLocations = async () => {
    this.setState({isFetching: true})

    return SInfo.getItem(LOCATIONS_KEY, SINFO_OPTIONS)
    .then(locationsEncoded => JSON.parse(locationsEncoded))
    .then(this.matchingLocations)
    .then(locations => this.setState({hotspotLocations: locations.filter(location => location), isFetching: false}))
  }

  matchingLocations = (locations) => {
    return Promise.all(
      locations.map(location => {
      const {latitude: lat, longitude: lng, when} = location
      let params = {lat, lng, when, app_version: version}
      params = new URLSearchParams(params).toString();

      const url = apiUrl('/api/v1/find_proximate_positives')

      return get(`${url}?${params}`, undefined)
      .then(positiveLocation => {
        if(positiveLocation.positives.length) {
          return {location, hotspotLocation: positiveLocation.positives}
        }
      })
    }))
  }
}

export {HotspotsContainer}
