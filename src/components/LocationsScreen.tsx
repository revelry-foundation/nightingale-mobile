import React, {Component} from 'react'
import {Subscribe} from 'unstated'
import {Text, ScrollView, SafeAreaView, View} from 'react-native'
import LocationStorageContainer, {
  Location,
} from '../containers/LocationStorageContainer'
import {formatAddressInfo} from '../navigation/CoordinateTranslator'
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
  render() {
    return (
      <View style={loginStyles.pageWrapper}>
        <ScrollView style={loginStyles.containerCollapsed}>
          {this.props.isFetching && <Text>...loading locations...</Text>}
          <View style={loginStyles.list}>
            {this.props.locations.map((location: Location) => (
              <View style={loginStyles.listItem}>
                <Text key={location.address} style={loginStyles.bodyCopy}>
                  {location.address} at
                </Text>
                <Text key={location.when} style={loginStyles.bodyCopySmall}>
                  {location.when}
                </Text>
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
          />
        )}
      </Subscribe>
    )
  }
}

export default LocationScreenWrapper
