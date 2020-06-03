import React, {Component} from 'react'
import {Text, View, TouchableHighlight, SafeAreaView, StyleSheet} from 'react-native'
import LoginStyles from '../styles/LogInStyles'
import * as Colors from '../styles/colors'
import * as Spacing from '../styles/spacing'
import * as Size from '../styles/sizes'

const loginStyles = LoginStyles.createStyles()

export class HotspotsSplashScreen extends Component {
  render() {
    const {navigate} = this.props.navigation
    return (
    <SafeAreaView style={loginStyles.pageWrapper}>
      <View style={loginStyles.container}>
        <Text style={{...loginStyles.h1, ...loginStyles.textCenter, ...styles.spaceVertical}}>
          Covid 19 Hotspots
        </Text>
        <Text style={loginStyles.h3}>
          Your information is completely anonymous.
        </Text>
        <Text style={loginStyles.contentLeft}>
          If you update your status to Positive, you have the opportunity to
          upload anonymous data about the locations you've visited while
          contagious. Others will be notified if their history indicates they
          were in your proximity during that time, but none of your personal
          details are collected or shared.
        </Text>
        <View style={loginStyles.buttonContainer}>
          <TouchableHighlight
            style={loginStyles.button}
            onPress={() => navigate('Hotspot Locations')}
            underlayColor="transparent">
            <Text style={loginStyles.buttonText}>Compare my Locations to Hotspots</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
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

export default HotspotsSplashScreen
