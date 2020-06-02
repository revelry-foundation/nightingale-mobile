import React, {Component} from 'react'
import {Subscribe} from 'unstated'
import {Text, View, ScrollView, TouchableHighlight, SafeAreaView, StyleSheet} from 'react-native'

import LoginStyles from '../styles/LogInStyles'
import {Location} from '../containers/LocationStorageContainer'
import HotspotsContainer from '../containers/HotspotsContainer'
import {formatDateTime} from '../helpers/dates'
import * as Colors from '../styles/colors'
import * as Spacing from '../styles/spacing'
import * as Size from '../styles/sizes'
import {baseCard, cardDivider} from '../styles/components/cards'

const loginStyles = LoginStyles.createStyles()

interface Props {
    hotspotPositives: any,
    navigation: {
      navigate(dest: string): object
    }
  }

class HotspotLocationsScreen extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={loginStyles.pageWrapper}>
        <ScrollView style={loginStyles.container}>
          <View>
            <View style={loginStyles.spaceVertical}>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.buttonLink}>Back to Disclaimer</Text>
            </TouchableHighlight>
          <Text style={{...loginStyles.h1, ...loginStyles.textCenter, ...styles.spaceVertical}}>
            Covid 19 Hotspots
          </Text>
          <Text style={styles.spaceVertical}>
            Possible Matches Based on Date, Time and Location
          </Text>
          <Text style={loginStyles.bodyCopySmall}>
            This list indicates possible matches 
            between your locations and known hotspots. 
            These possible matches are based on the date and time of each location.
          </Text>
          </View>
          <View>
            {this.props.isFetching && <Text>...loading locations...</Text>}
          </View>
          <View>
              {this.props.hotspotPositives.map(({location, positives}) => (
              <View style={[baseCard, styles.spaceVertical]} key={location.when}>
                <View>
                  <Text style={styles.spaceVertical}>
                    My Location
                  </Text>
                  <Text style={loginStyles.bodyCopy}>
                    {location && location.address}
                  </Text>
                  <Text style={loginStyles.bodyCopySmall}>
                    {location && formatDateTime(location.when)}
                  </Text> 
                </View>
                <View style={cardDivider}>
                  <Text style={styles.spaceVertical}>
                    Hotspot
                  </Text>
                  <Text style={loginStyles.bodyCopy}>
                    There are {positives.length} positive(s) that were within 10 meters of this location, +/- 30 minutes from when you were there. 
                  </Text>
                </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

class HotspotLocationsScreenWrapper extends Component{
  render() {
    return (
      <Subscribe to={[HotspotsContainer]}>
        {(hotspotsContainer: HotspotsContainer) => (
          <HotspotLocationsScreen
            hotspotPositives={hotspotsContainer.state.hotspotPositives}
            isFetching={hotspotsContainer.state.isfetching}
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

export default HotspotLocationsScreenWrapper
