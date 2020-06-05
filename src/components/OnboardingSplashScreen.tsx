import React, {Component} from 'react'
import {View, Text, TouchableHighlight} from 'react-native'

class OnboardingSplashScreen extends Component{
  render() {
    return(
      <View>
        <TouchableHighlight style={{paddingTop: 50}} onPress={() => this.props.navigation.navigate('To App')}>
          <Text>TO APP</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default OnboardingSplashScreen
