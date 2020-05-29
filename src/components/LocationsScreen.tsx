import React, {Component} from 'react'
import {Subscribe} from 'unstated'
import {Text, ScrollView, SafeAreaView, View} from 'react-native'
import LocationStorageContainer, {
  Location,
} from '../containers/LocationStorageContainer'
import LoginStyles from '../styles/LogInStyles'
import {formatDate} from '../helpers/dates'

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
              <View style={loginStyles.listItem} key={location.when}>
                <Text style={loginStyles.bodyCopy}>
                  You were at {location.latitude}, {location.longitude}
                </Text>
                <Text style={loginStyles.bodyCopySmall}>
                  {formatDate(location.when)}
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
