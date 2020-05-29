import React, {Component} from 'react'
import {Subscribe} from 'unstated'
<<<<<<< HEAD
import {Text, ScrollView, SafeAreaView, View} from 'react-native'
import LocationStorageContainer, {
  Location,
} from '../containers/LocationStorageContainer'
import {formatAddressInfo} from '../navigation/CoordinateTranslator'
import LoginStyles from '../styles/LogInStyles'
=======
import {Text, ScrollView, View} from 'react-native'
import LocationStorageContainer, {
  Location,
} from '../containers/LocationStorageContainer'
import LoginStyles from '../styles/LogInStyles'
import {formatDate} from '../helpers/dates'
>>>>>>> 9b67b33868fd3be09ce4f779a3c3efe7bc60a60c

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
<<<<<<< HEAD
      <SafeAreaView style={loginStyles.pageWrapper}>
=======
      <View style={loginStyles.pageWrapper}>
>>>>>>> 9b67b33868fd3be09ce4f779a3c3efe7bc60a60c
        <ScrollView style={loginStyles.containerCollapsed}>
          {this.props.isFetching && <Text>...loading locations...</Text>}
          <View style={loginStyles.list}>
            {this.props.locations.map((location: Location) => (
<<<<<<< HEAD
              <View style={loginStyles.listItem}>
                <Text key={location.address} style={loginStyles.bodyCopy}>
                  {location.address}
                </Text>
                <Text key={location.when} style={loginStyles.bodyCopySmall}>
                  {location.when}
=======
              <View style={loginStyles.listItem} key={location.when}>
                <Text style={loginStyles.bodyCopy}>{location.address}</Text>
                <Text style={loginStyles.bodyCopySmall}>
                  {formatDate(location.when)}
>>>>>>> 9b67b33868fd3be09ce4f779a3c3efe7bc60a60c
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
