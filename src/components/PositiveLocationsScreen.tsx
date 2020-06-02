import React, {Component} from 'react'
import {Subscribe} from 'unstated'
import {Text, View, ScrollView, TouchableHighlight, SafeAreaView, StyleSheet} from 'react-native'

import LoginStyles from '../styles/LogInStyles'
import {Location} from '../containers/LocationStorageContainer'
import PositiveLocationsContainer from '../containers/PositiveLocationsContainer'
import {formatDateTime} from '../helpers/dates'
import * as Colors from '../styles/colors'
import * as Spacing from '../styles/spacing'
import * as Size from '../styles/sizes'

const loginStyles = LoginStyles.createStyles()

interface Props {
    positiveLocations: Location[]
    navigation: {
      navigate(dest: string): object
    }
  }

class PositiveLocationsScreen extends Component<Props> {
    render() {
        return (
        <SafeAreaView style={loginStyles.pageWrapper}>
        <ScrollView style={loginStyles.container}>
            <View>
            <View style={loginStyles.spaceVertical}>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.buttonLink}>Back</Text>
            </TouchableHighlight>
            </View>
              {this.props.isFetching && <Text>...loading locations...</Text>}
              <View style={loginStyles.list}>
                {this.props.positiveLocations.map(({location}) => (
                  <View style={loginStyles.listItem} key={location.when}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('PositiveLocationScreen')}>
                    <View>
                    <Text style={loginStyles.bodyCopy}>{location && location.address}</Text>
                    <Text style={loginStyles.bodyCopySmall}>
                    {location && formatDateTime(location.when)}
        </Text> 
      </View>
    </TouchableHighlight>
                  </View>
                ))}
              </View>
            </View>
            </ScrollView>
            </SafeAreaView>
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

const styles = StyleSheet.create({
buttonLink: {
    color: Colors.brandPrimary,
    fontWeight: 'bold',
    paddingVertical: Spacing.globalPadding,
    fontSize: Size.globalSize,
},
spaceVertical: {
    marginVertical: Spacing.globalMarginSmall,
}
})

export default PositiveLocationsScreenWrapper
