import React, {Component} from 'react'
import {ScrollView, RefreshControl, View} from 'react-native'

import LoginStyles from '../styles/LogInStyles'
import CovidStatusIndicator from './CovidStatusIndicator'

const loginStyles = LoginStyles.createStyles()

class HomeScreen extends Component {

  state = {
    refreshing: false,
  }

  onDidFocus() {}

  onRefresh() {}

  render() {
    return (
      <View style={loginStyles.pageWrapper}>
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
