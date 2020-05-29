import React, {Component} from 'react'
import {ScrollView, SafeAreaView, RefreshControl, Text} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import Feather from 'react-native-vector-icons/Feather'

import {HomeStackProps} from '../navigation/HomeStack'
import CovidStatusIndicator from './CovidStatusIndicator'

class HomeScreen extends Component<HomeStackProps> {
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
          }>
          <CovidStatusIndicator navigation={this.props.navigation} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default HomeScreen
