import React, {Component} from 'react'
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native'
import LoginStyles from '../styles/LogInStyles'
import * as Colors from '../styles/colors'
import * as Spacing from '../styles/spacing'
import * as Size from '../styles/sizes'

const loginStyles = LoginStyles.createStyles()

class OnboardingLocationRequestScreen extends Component{
  render() {
    return(
    <View style={[loginStyles.container, loginStyles.onboardingWrapper]}>
    <Text style={styles.spaceVertical}> 
    Something about how we dont save locations to the database, its all just on your phone and its private. we just give you the tools you need to do your part in keeping other safe...
    </Text>
    <View style={[loginStyles.buttonContainer, styles.spaceVertical]}>
    <TouchableHighlight
    style={loginStyles.button}
    onPress={() => this.props.navigation.navigate('To App')}
    underlayColor="transparent">
    <Text style={loginStyles.buttonText}>
    Access My Location / Enter App
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
  

export default OnboardingLocationRequestScreen
