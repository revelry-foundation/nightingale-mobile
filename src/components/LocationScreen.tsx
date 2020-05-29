import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class LocationScreen extends Component {
  handleBackToLocations = () => {
    this.props.navigation.goBack()
  }

  handleDeleteLocation = () => {
    const deleteOrEditLocation = this.props.navigation.getParam("deleteOrEditLocation")
    const index = this.props.navigation.getParam("index")
    deleteOrEditLocation(index)
    this.props.navigation.goBack()
  }

  handleEditLocation = () => {
    // should be passed down to the edit page
  }

  render() {
    const location = this.props.navigation.getParam("location")
    return (
      <View>
        <TouchableHighlight onPress={this.handleBackToLocations}><Text>Back</Text></TouchableHighlight>
        <Text>Location:{JSON.stringify(location)}</Text>
        <TouchableHighlight onPress={this.handleDeleteLocation}><Text>Delete</Text></TouchableHighlight>
        <TouchableHighlight onPress={this.handleEditLocation}><Text>Edit</Text></TouchableHighlight>
      </View>
    )
  }
}
