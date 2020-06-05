import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

class OnboardingDisclaimerScreen extends Component{
  render() {
    return(
      <View>
        <TouchableHighlight style={{paddingTop: 50}} onPress={() => this.props.navigation.navigate('OnboardingLocationRequest')}>
          <Text>TO Location Request</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default OnboardingDisclaimerScreen
