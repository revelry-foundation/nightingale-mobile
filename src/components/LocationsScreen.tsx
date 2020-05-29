import React, { Component } from 'react'
import { Subscribe } from 'unstated'
import { Text, ScrollView, SafeAreaView } from 'react-native'
import LocationStorageContainer, {
  Location,
} from '../containers/LocationStorageContainer'
import LocationCard from './LocationCard'
import LocationStack from '../navigation/LocationStack'

interface Props {
  isFetching: boolean
  locations: Location[]
}

/**
 * View / edit the visited locations
 */
export class LocationsScreen extends Component<Props> {
  handleViewLocation = (index: number, location: object) => {
    const {
      navigation: {navigate},
      locationStorage: {deleteOrEditLocation}
    } = this.props
    navigate('Location', {index, location, deleteOrEditLocation})
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {this.props.isFetching && (
            <Text>...loading locations...</Text>
          )}
          {this.props.locations.map((location: Location, index) => (
            <LocationCard key={location.when} location={location} index={index} handleViewLocation={this.handleViewLocation}></LocationCard>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

class LocationScreenWrapper extends Component {
  render(){
    return(
      <Subscribe to={[LocationStorageContainer]}>
        {locationStorage => (
          <LocationsScreen
            isFetching={locationStorage.state.isFetching}
            locations={locationStorage.state.locations}
            navigation={this.props.navigation}
            locationStorage={locationStorage}
          />
        )}
      </Subscribe>
    )
  }
}

export default LocationScreenWrapper
