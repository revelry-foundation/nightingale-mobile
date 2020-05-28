import React, {Component} from 'react'
import {Subscribe} from 'unstated'
import {View, Text} from 'react-native'
import LocationStorageContainer, {
  Location,
} from '../containers/LocationStorageContainer'
import LoginStyles from '../styles/LogInStyles'
const loginStyles = LoginStyles.createStyles()

/**
 * View / edit the visited locations
 */
class LocationsScreen extends Component {
  render() {
    return (
      <Subscribe to={[LocationStorageContainer]}>
        {locationStorage => (
          <View style={loginStyles.pageWrapper}>
            <View style={loginStyles.containerExpand}>
              {locationStorage.state.isFetching && (
                <Text>...loading locations...</Text>
              )}
              {locationStorage.state.locations.map((location: Location) => (
                <Text>
                  {location.latitude}, {location.longitude} at {location.when}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Subscribe>
    )
  }
}

export default LocationsScreen
