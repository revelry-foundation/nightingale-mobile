import React, {Component} from 'react'
import {View, Text, TouchableHighlight, StyleSheet, Linking} from 'react-native'
import LoginStyles from '../styles/LogInStyles'
import * as Colors from '../styles/colors'
import * as Spacing from '../styles/spacing'
import * as Size from '../styles/sizes'


const loginStyles = LoginStyles.createStyles()

class OnboardingDisclaimerScreen extends Component{
  render() {
    return(
  <View style={[loginStyles.container, loginStyles.onboardingWrapper]}>
      <Text style={[loginStyles.h5, styles.spaceVertical]}>Getting Started</Text>
  <Text style={loginStyles.h1}>Your Data is Private</Text>
<Text style={[loginStyles.bodyCopy, styles.spaceVertical]}>
  When you start using Nightingale, the app tracks your location and saves that data on your device only.
</Text>
<View style={[loginStyles.buttonContainer, styles.spaceVertical]}>
  <TouchableHighlight
    style={loginStyles.button}
    onPress={() => this.props.navigation.navigate('OnboardingDisclaimer2')}
    underlayColor="transparent">
    <Text style={loginStyles.buttonText}>
      Next
    </Text>
  </TouchableHighlight>
</View>
</View>
    )
  }
}

export class OnboardingDisclaimerScreen2 extends Component{
  render() {
    return(
  <View style={[loginStyles.container, loginStyles.onboardingWrapper]}>
    <Text style={[loginStyles.h5, styles.spaceVertical]}>Getting Started</Text>
  <Text style={loginStyles.h1}>How It Works</Text>
<Text style={[loginStyles.bodyCopy, styles.spaceVertical]}>
  <Text>Nightingale queries our servers to cross-check if you may have come into contact with someone who reported that they were COVID-19 positive. The server will not receive any identifying information about you or save any location information.</Text>
</Text>
<View style={[loginStyles.buttonContainer, styles.spaceVertical]}>
  <TouchableHighlight
    style={loginStyles.button}
    onPress={() => this.props.navigation.navigate('OnboardingDisclaimer3')}
    underlayColor="transparent">
    <Text style={loginStyles.buttonText}>
    Next
    </Text>
  </TouchableHighlight>
</View>
</View>
    )
  }
}

export class OnboardingDisclaimerScreen3 extends Component{
  render() {
    return(
  <View style={[loginStyles.container, loginStyles.onboardingWrapper]}>
<Text style={[loginStyles.h5, styles.spaceVertical]}>Getting Started</Text>
  <Text style={loginStyles.h1}>Your Data is Anonymous</Text>
<Text style={[loginStyles.bodyCopy, styles.spaceVertical]}>
  <Text>After you have been tracking your locations locally, you may CHOOSE to submit an anonymous report indicating that you are or were COVID-19 positive. This helps other users discover if they may have been near you while you were contagious. It is completely optional to do so, and doing so is completely anonymous.</Text>
</Text>
<View style={[loginStyles.buttonContainer, styles.spaceVertical]}>
  <TouchableHighlight
    style={loginStyles.button}
    onPress={() => this.props.navigation.navigate('OnboardingDisclaimer4')}
    underlayColor="transparent">
    <Text style={loginStyles.buttonText}>
      Next
    </Text>
  </TouchableHighlight>
</View>
</View>
    )
  }
}

export class OnboardingDisclaimerScreen4 extends Component{
  render() {
    return(
  <View style={[loginStyles.container, loginStyles.onboardingWrapper]}>
  <Text style={loginStyles.h1}>Better Together</Text>
  <View>

<Text style={[loginStyles.bodyCopy, styles.spaceVertical]}>
  We would never ask you to simply trust us with this amount of privacy. That's why the complete source code for every piece of the app and its infrastructure are available on <Text style={{color: Colors.brandPrimaryLight, fontWeight: 'bold'}} onPress={() => Linking.openURL('http://www.github.com/revelry-foundation/nightingale')}>Github</Text> where we're hosting and building NIGHTINGALE in an Open Source manner.
</Text>
<Text style={[loginStyles.bodyCopy, styles.spaceVertical]}>In order for us to accurately provide you with COVID-19 Hotspots in your area, we will need to access your location.</Text>
  </View>
<View style={[loginStyles.buttonContainer, styles.spaceVertical]}>
  <TouchableHighlight
    style={loginStyles.button}
    onPress={() => this.props.navigation.navigate('To App')}
    underlayColor="transparent">
    <Text style={loginStyles.buttonText}>
    Access My Location
    </Text>
  </TouchableHighlight>
</View>
</View>
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
  },
})


export default OnboardingDisclaimerScreen
