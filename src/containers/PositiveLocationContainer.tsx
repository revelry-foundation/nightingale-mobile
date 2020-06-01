import {Container} from 'unstated'

import Location  from './LocationStorageContainer'
import {apiUrl, get} from '../helpers/api'
import {version} from '../../package.json'

export interface PositiveLocationState {
  positiveLocations: Location[]
  isfetching: boolean
}

export default class PositiveLocationContainer extends Container<PositiveLocationState>{
  constructor(_props = {}) {
    super()
    this.state = {
      isFetching: false,
    }
  }

  fetchMatchingPositiveLocations = async (locations: Location[]) => {
    await this.setState({isFetching: true})

    try {
      await Promise.all(
        locations.map(location => {
            const {latitude: lat, longitude: lng, when} = location
            const params = {lat, lng, when, app_version: version}
            const url = apiUrl('/api/v1/find_proximate_positives')
            return get(url, params)
          })
      )
    } catch (error) {
      console.warn(error)
    }

    return this.setState({isFetching: false})
  }
}

export {PositiveLocationContainer}
