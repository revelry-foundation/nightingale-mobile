import React, {Component} from 'react'
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import LoginStyles from '../styles/LogInStyles'
import * as Colors from '../styles/colors'
import * as Spacing from '../styles/spacing'
import * as Size from '../styles/sizes'

const loginStyles = LoginStyles.createStyles()

class OnboardingSplashScreen extends Component{
  render() {
    return(
      <View style={[loginStyles.container]}>
        <Text style={styles.spaceVertical}> welcome logo here </Text>
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
      marginVertical: Spacing.globalMarginSmall,
    }
  })
  

export default OnboardingSplashScreen
