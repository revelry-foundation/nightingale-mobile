import React, {Component} from 'react'
import {ScrollView, SafeAreaView, RefreshControl, Text} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import Feather from 'react-native-vector-icons/Feather'

class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: <Feather name="home" size={16} color="black" />,
  }

  state = {
    refreshing: false,
  }

  onDidFocus() {}

  onRefresh() {}

  render() {
    return (
      <SafeAreaView>
        <NavigationEvents onDidFocus={this.onDidFocus} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }></ScrollView>
      </SafeAreaView>
    )
  }
}

export default HomeScreen
