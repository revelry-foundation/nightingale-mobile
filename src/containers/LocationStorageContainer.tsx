import {Container} from 'unstated'
import SInfo from 'react-native-sensitive-info'

export interface Location {
  latitude: number
  longitude: number
  when: string // ISO 8601 in UTC (ends in Z)
}

export interface LocationParams {
  latitude: number
  longitude: number
  when: Date | string
}

export interface LocationsState {
  isFetching: boolean
  locations: Location[]
}

const LOCATIONS_KEY = 'nightingale_locations'
const SINFO_OPTIONS = {}
const RETENTION_MS = 1000 * 60 * 60 * 24 * 14

/**
 * An unstated container for managing the secure local storage of
 * _this user's_ location data
 */
export default class LocationStorageContainer extends Container<
  LocationsState
> {
  constructor(_props = {}) {
    super()
    this.state = {
      isFetching: false,
      locations: [],
    }
    this.init()
  }

  init = async () => {
    await this.setState({
      isFetching: true,
    })

    const locationsEncoded = await SInfo.getItem(LOCATIONS_KEY, SINFO_OPTIONS)

    await this.setState({
      isFetching: false,
      locations: JSON.parse(locationsEncoded || '[]'),
    })

    return this.pruneLocations()
  }

  pruneLocations = async () => {
    const {locations} = this.state
    const timestampNow = new Date().getTime()
    const isExpired = (sDate: string) =>
      timestampNow - new Date(sDate).getTime() > RETENTION_MS

    let index = 0
    while (locations.length > index && isExpired(locations[index].when)) {
      index++
    }

    await this.setState({
      locations: locations.slice(index),
    })

    return this.saveLocations()
  }

  recordLocation = async (locationParams: LocationParams) => {
    // normalize the date
    let {when} = locationParams
    if (when instanceof Date) {
      when = when.toISOString()
    }
    const location = {
      ...locationParams,
      when,
    }

    await this.setState({
      locations: [...this.state.locations, location],
    })

    return this.saveLocations()
  }

  private saveLocations = () => {
    const locationsEncoded = JSON.stringify(this.state.locations)
    return SInfo.setItem(LOCATIONS_KEY, locationsEncoded, SINFO_OPTIONS)
  }
}

export {LocationStorageContainer}
