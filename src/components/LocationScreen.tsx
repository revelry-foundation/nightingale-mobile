import React, { Component } from 'react'
import { Text, View, TouchableHighlight, TextInput, ScrollView } from 'react-native'
import LoginStyles from '../styles/LogInStyles'

const loginStyles = LoginStyles.createStyles()

export default class LocationScreen extends Component {
  constructor() {
    super()
    this.state = {
      editable: false,
    }
  }

  componentDidMount(){
    console.log(this.props.navigation.getParam("location"))
  }

  handleGoBack = () => this.props.navigation.goBack()

  handleDeleteLocation = () => {
    const deleteLocation = this.props.navigation.getParam("deleteLocation")
    const timestamp = this.props.navigation.getParam("location") 
    deleteLocation(timestamp.when)
    this.props.navigation.goBack()
  }

  handleSaveEditedLocation = () => {
    // should be passed down to the edit page
    const editLocation = this.props.navigation.getParam("editLocation")
    const timestamp = this.props.navigation.getParam("location").when
    console.log(this.state.location)
    editLocation(timestamp, this.state.location)
  }

  handleEditLocation = () => {
    this.setState({editable: true})
  }

  onChangeAddress = (address) => {
    let newAddress = this.state.location
    if(newAddress){
      newAddress.address = address
    }

    this.setState({
      location: newAddress
    })
  }

  render() {
    return (
      <View style={loginStyles.pageWrapper}>
        <ScrollView style={loginStyles.containerCollapsed}>

        <TouchableHighlight onPress={this.handleGoBack}>
          <View >
            <Text>Back</Text>
          </View>
        </TouchableHighlight>


        <TextInput style={loginStyles.bodyCopy} editable={this.state.editable} onChangeText={this.onChangeAddress}>
          {this.state.location && this.state.location.address}
        </TextInput>
        
        <View>
          <TouchableHighlight onPress={this.handleDeleteLocation}>
            <Text>Delete</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.handleEditLocation}>
            <Text>Edit</Text>
          </TouchableHighlight>
        </View>
        {
          this.state.editable && 
          <View style={loginStyles.buttonContainer}>
            <TouchableHighlight style={loginStyles.button} onPress={this.handleSaveEditedLocation}>
              <Text style={loginStyles.buttonText}>Save</Text>
            </TouchableHighlight>
          </View>
        }
        </ScrollView>
      </View>
    )
  }
}
