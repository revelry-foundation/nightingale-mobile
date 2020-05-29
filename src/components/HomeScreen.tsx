import React, {Component} from 'react'
import {ScrollView, RefreshControl, View} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import Feather from 'react-native-vector-icons/Feather'

import LoginStyles from '../styles/LogInStyles'
import {HomeStackProps} from '../navigation/HomeStack'
import CovidStatusIndicator from './CovidStatusIndicator'

const loginStyles = LoginStyles.createStyles()

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
      <View style={loginStyles.pageWrapper}>
        <NavigationEvents onDidFocus={this.onDidFocus} />
        <ScrollView
          style={loginStyles.container}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }>
          <CovidStatusIndicator navigation={this.props.navigation} />
        </ScrollView>
      </View>
    )
  }
}

export default HomeScreen
