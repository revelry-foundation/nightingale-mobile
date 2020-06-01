import {Container} from 'unstated'
import SInfo from 'react-native-sensitive-info'
import {formatAddressInfo} from '../navigation/CoordinateTranslator'

export interface Location {
  latitude: number
  longitude: number
  when: string // ISO 8601 in UTC (ends in Z)
  address?: string
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

  // TODO: Get address when recording each location for the first time
  //       instead of when loading the whole list from storage
  async parseLocations(raw: string): Promise<Location[]> {
    const locations = JSON.parse(raw || '[]')

    return Promise.all(
      locations.map(async (location: Location) => {
        const address = await formatAddressInfo(
          location.latitude,
          location.longitude
        )
        return {...location, address}
      })
    )
  }

  init = async () => {
    await this.setState({
      isFetching: true,
    })

    const locationsEncoded = await SInfo.getItem(LOCATIONS_KEY, SINFO_OPTIONS)
    const locations: Location[] = await this.parseLocations(locationsEncoded)

    await this.setState({
      isFetching: false,
      locations,
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
  
  deleteLocation = async (timestamp: string) => {
    const updatedLocations = this.state.locations.filter(location => location.when != timestamp)

    await this.setState({locations: updatedLocations || []})

    return this.saveLocations()
  }

  editLocation = async (timestamp: string, updatedLocation: Location) => {
    const updatedLocations = this.state.locations.map(location => {
      if (location.when == timestamp) {
        location = updatedLocation
        return location
      } else {
        return location;
      }
    })

    await this.setState({locations: updatedLocations || []})

    return this.saveLocations()
  }

  private saveLocations = () => {
    const locationsEncoded = JSON.stringify(this.state.locations)
    return SInfo.setItem(LOCATIONS_KEY, locationsEncoded, SINFO_OPTIONS)
  }
}

export {LocationStorageContainer}
