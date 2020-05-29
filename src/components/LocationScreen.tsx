import React, {Component} from 'react'
import {Text, View, TouchableHighlight} from 'react-native'

export default class LocationScreen extends Component{
    handleBackToLocations = () => {
        this.props.navigation.goBack()
    }

    handleDeleteLocation = () => {
        const deleteLocation = this.props.navigation.getParam("deleteLocation")
        const index = this.props.navigation.getParam("index")
        deleteLocation(index)
        this.props.navigation.goBack()
    }

    render() {
        const location = this.props.navigation.getParam("location")
        const index = this.props.navigation.getParam("index")
        const locationStorage = this.props.locationStorage
        console.log(locationStorage)
        return(
            <View>
                <TouchableHighlight onPress={this.handleBackToLocations}><Text>Back</Text></TouchableHighlight>
                <Text>Location:{JSON.stringify(location)}</Text>
                <TouchableHighlight onPress={this.handleDeleteLocation}><Text>Delete</Text></TouchableHighlight>
            </View>
        )
    }
}
