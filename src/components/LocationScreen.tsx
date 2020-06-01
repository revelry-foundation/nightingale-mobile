import React, { Component } from 'react'
import { Text, View, TouchableHighlight, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import LoginStyles from '../styles/LogInStyles'
import * as Colors from '../styles/colors'
import * as Spacing from '../styles/spacing'
import * as Size from '../styles/sizes'

const loginStyles = LoginStyles.createStyles()

export default class LocationScreen extends Component {

  handleGoBack = () => this.props.navigation.goBack()

  handleDeleteLocation = () => {
    const deleteLocation = this.props.navigation.getParam("deleteLocation")
    const timestamp = this.props.navigation.getParam("location") 
    deleteLocation(timestamp.when)
    this.props.navigation.goBack()
  }


  render() {
    const location =  this.props.navigation.getParam("location")
    
    return (
      <SafeAreaView style={loginStyles.pageWrapper}>
        <ScrollView style={loginStyles.container}>
          <View style={styles.spaceVertical}>
            <TouchableHighlight onPress={this.handleGoBack}>
              <Text style={styles.buttonLink}>Back</Text>
            </TouchableHighlight>
          </View>
          <Text style={loginStyles.h3}>
            {location && location.address}
          </Text>
          <View style={[loginStyles.buttonContainer, styles.spaceVertical]}>
            <TouchableHighlight style={loginStyles.button} onPress={this.handleDeleteLocation}>
              <Text style={loginStyles.buttonText}>Delete</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
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
