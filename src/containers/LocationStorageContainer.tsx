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
  locationsLoaded: boolean
}

const LOCATIONS_KEY = 'nightingale_locations'
const SINFO_OPTIONS = {}

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
      locationsLoaded: false,
    }
  }

  getLocations = async (force = false) => {
    if (this.state.locationsLoaded && !force) {
      return this.state.locations
    }

    await this.setState({
      isFetching: true,
    })

    const locationsEncoded = await SInfo.getItem(LOCATIONS_KEY, SINFO_OPTIONS)

    await this.setState({
      isFetching: false,
      locations: JSON.parse(locationsEncoded || "[]"),
      locationsLoaded: true,
    })
    return this.state.locations
  }

  pruneLocations = async () => {
    if (!this.state.locationsLoaded) {
      await this.getLocations()
    }

    // TODO: prune the pings that happened more than 2 weeks ago

    return this.saveLocations()
  }

  recordLocation = async (locationParams: LocationParams) => {
    if (!this.state.locationsLoaded) {
      await this.getLocations()
    }
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

  deleteOrEditLocation = async (index: number, updatedLocation: object) => {
    // get locations, remove the location by index
    let locations = await SInfo.getItem(LOCATIONS_KEY, SINFO_OPTIONS)
    locations = JSON.parse(locations)
    if(updatedLocation) {
      locations.splice(index, 1, updatedLocation) // locationUpdate needs to be an object with {lat, long, when}
    } else {
      locations.splice(index, 1) 
    }

    await SInfo.deleteItem(LOCATIONS_KEY, SINFO_OPTIONS)
    await SInfo.setItem(LOCATIONS_KEY, JSON.stringify(locations), SINFO_OPTIONS)

    await this.setState({
      isFetching: false,
      locations: locations || [],
      locationsLoaded: true,
    })
    return this.state.locations
  }

  private saveLocations = () => {
    const locationsEncoded = JSON.stringify(this.state.locations)
    return SInfo.setItem(LOCATIONS_KEY, locationsEncoded, SINFO_OPTIONS)
  }
}

export {LocationStorageContainer}
