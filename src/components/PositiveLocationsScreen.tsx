import React, {Component} from 'react'
import {Subscribe} from 'unstated'
import {Text, View, ScrollView, Switch, TouchableHighlight} from 'react-native'

import LoginStyles from '../styles/LogInStyles'
import LocationStorageContainer, {
  Location,
} from '../containers/LocationStorageContainer'
import PositiveLocationsContainer from '../containers/PositiveLocationsContainer'
import {formatDate} from '../helpers/dates'

const loginStyles = LoginStyles.createStyles()

interface Props {
    positiveLocations: Location[]
    navigation: {
      navigate(dest: string): object
    }
  }

class PositiveLocationsScreen extends Component<Props> {
    render() {
        console.log(this.props.positiveLocations)
        return (
            <View>
            <View>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
                <Text>Back</Text>
            </TouchableHighlight>
            <Text>places you may have crossed paths with a covid 19 patient</Text>
            </View>
              {this.props.isFetching && <Text>...loading locations...</Text>}
              <View style={loginStyles.list}>
                {this.props.positiveLocations.map((location: Location) => (
                  <View style={loginStyles.listItem} key={location.when}>
                    <Text>{JSON.stringify(location)}</Text>
                  </View>
                ))}
              </View>
            </View>
            )
    }
}

class PositiveLocationsScreenWrapper extends Component{
    render() {
      return (
        <Subscribe to={[PositiveLocationsContainer]}>
          {(positiveLocationsContainer: PositiveLocationsContainer) => (
            <PositiveLocationsScreen
              positiveLocations={positiveLocationsContainer.state.positiveLocations}
              isFetching={positiveLocationsContainer.state.isfetching}
              navigation={this.props.navigation}
            />
          )}
        </Subscribe>
      )
    }
  }

export default PositiveLocationsScreenWrapper
