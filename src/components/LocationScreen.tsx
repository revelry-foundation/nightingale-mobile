import React, { Component } from 'react'
import { Text, View, TouchableHighlight, TextInput, ScrollView } from 'react-native'
import LoginStyles from '../styles/LogInStyles'

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
      <View style={loginStyles.pageWrapper}>
        <ScrollView style={loginStyles.containerCollapsed}>
        <TouchableHighlight onPress={this.handleGoBack}>
          <View >
            <Text>Back</Text>
          </View>
        </TouchableHighlight>
        <Text style={loginStyles.bodyCopy}>
          {location && location.address}
        </Text>
        <View>
          <TouchableHighlight onPress={this.handleDeleteLocation}>
            <Text>Delete</Text>
          </TouchableHighlight>
        </View>
        </ScrollView>
      </View>
    )
  }
}
