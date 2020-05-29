import React, {Component} from 'react'
import {Subscribe} from 'unstated'
import {Text, ScrollView, SafeAreaView} from 'react-native'
import LocationStorageContainer, {
  Location,
} from '../containers/LocationStorageContainer'
import {formatAddressInfo} from '../navigation/CoordinateTranslator'

interface Props {
  isFetching: boolean
  locations: Location[]
}

/**
 * View / edit the visited locations
 */
export class LocationsScreen extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {this.props.isFetching && <Text>...loading locations...</Text>}
          {this.props.locations.map((location: Location) => (
            <Text key={location.when}>
              {formatAddressInfo(location.latitude, location.longitude)}
              {location.latitude}, {location.longitude} at {location.when}
            </Text>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

class LocationScreenWrapper extends Component {
  render() {
    return (
      <Subscribe to={[LocationStorageContainer]}>
        {locationStorage => (
          <LocationsScreen
            isFetching={locationStorage.state.isFetching}
            locations={locationStorage.state.locations}
          />
        )}
      </Subscribe>
    )
  }
}

export default LocationScreenWrapper
