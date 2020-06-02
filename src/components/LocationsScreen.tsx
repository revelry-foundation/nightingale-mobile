import React, {Component} from 'react'
import {Subscribe} from 'unstated'
import {Text, ScrollView, View, TouchableHighlight} from 'react-native'
import LocationStorageContainer, {
  Location,
} from '../containers/LocationStorageContainer'
import LocationCard from './LocationCard'
import LoginStyles from '../styles/LogInStyles'

const loginStyles = LoginStyles.createStyles()

interface Props {
  isFetching: boolean
  locations: Location[]
}

/**
 * View / edit the visited locations
 */
export class LocationsScreen extends Component<Props> {
  handleViewLocation = (location: Location) => {
    const {
      navigation: {navigate},
      locationStorage: {deleteLocation}
    } = this.props
    navigate('Location', {location, deleteLocation})
  }

  render() {
    return (
      <View style={loginStyles.pageWrapper}>
        <ScrollView style={loginStyles.containerCollapsed}>
          {this.props.isFetching && <Text>...loading locations...</Text>}
          <View style={loginStyles.list}>
            {this.props.locations.map((location: Location) => (
              <View style={loginStyles.listItem} key={location.when}>
                <LocationCard location={location} handleViewLocation={this.handleViewLocation}></LocationCard>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
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
            navigation={this.props.navigation}
            locationStorage={locationStorage}
          />
        )}
      </Subscribe>
    )
  }
}

export default LocationScreenWrapper
