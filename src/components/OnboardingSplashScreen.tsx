import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

class OnboardingSplashScreen extends Component{
  render() {
    return(
      <View>
        <TouchableHighlight style={{paddingTop: 50}} onPress={() => this.props.navigation.navigate('OnboardingDisclaimer')}>
          <Text>TO PRIVACY DISCLAIMER</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default OnboardingSplashScreen
