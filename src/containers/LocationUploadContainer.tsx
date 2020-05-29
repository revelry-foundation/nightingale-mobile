import {Container} from 'unstated'

import {Location} from './LocationStorageContainer'
import {apiUrl, post} from '../helpers/api'
import {version} from '../../package.json'

export interface LocationUploadState {
  isFetching: boolean
}

/**
 * An unstated container for managing the secure local storage of
 * the user's covid status
 */
export default class LocationUploadContainer extends Container<
  LocationUploadState
> {
  constructor(_props = {}) {
    super()
    this.state = {
      isFetching: false,
    }
  }

  uploadLocations = async (locations: Location[]) => {
    await this.setState({isFetching: true})

    try {
      await Promise.all(
        locations.map(location => {
          const {latitude: lat, longitude: lng, when} = location
          const body = {lat, lng, when, app_version: version}
          const url = apiUrl('/api/v1/submit_positive_location')
          console.log(url)
          return post(url, undefined, body)
        })
      )
    } catch (error) {
      console.warn(error)
    }

    return this.setState({isFetching: false})
  }
}

export {LocationUploadContainer}
