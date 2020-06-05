import React, {Component} from 'react'
import {View, Text, TouchableHighlight, StyleSheet, SafeAreaView, Image} from 'react-native'
import LoginStyles from '../styles/LogInStyles'
import * as Colors from '../styles/colors'
import * as Spacing from '../styles/spacing'
import * as Size from '../styles/sizes'

const loginStyles = LoginStyles.createStyles()

class OnboardingSplashScreen extends Component{
  render() {
    return(
      <View style={[loginStyles.container, loginStyles.onboardingWrapper]}>
        <View style={styles.spaceVertical}>
        <Image source={require('../../assets/images/Nightingale-Logo-Black.png')}></Image>
        </View>
        <Text style={loginStyles.h3}> 
          Using innovation to build safe and healthy communities in Louisiana
        </Text>
        <Text style={[loginStyles.bodyCopy, loginStyles.textCenter]}>
        The impact of the COVID-19 pandemic has been felt by everyone in Louisiana; particularly individuals in our most vulnerable communities.
        We believe there is an opportunity to leverage our intellectual and technical assets to incite others to help develop a solution that supports our community leaders and public health officials to keep our communities safe and healthy.
        </Text>
        <View style={[loginStyles.buttonContainer, styles.spaceVertical]}>
          <TouchableHighlight
            style={loginStyles.button}
            onPress={() => this.props.navigation.navigate('OnboardingDisclaimer')}
            underlayColor="transparent">
            <Text style={loginStyles.buttonText}>
            Get Started
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
      marginVertical: Spacing.globalMargin,
    }
  })
  

export default OnboardingSplashScreen
