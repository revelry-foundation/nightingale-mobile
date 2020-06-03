import React, {Component} from 'react'
import {Subscribe} from 'unstated'
import {Text, View, TouchableHighlight} from 'react-native'
import LoginStyles from '../styles/LogInStyles'
import {formatDate} from '../helpers/dates'

const loginStyles = LoginStyles.createStyles()

import CovidStatusContainer, {
  CovidStatus,
} from '../containers/CovidStatusContainer'

interface Props {
  status: CovidStatus
  navigation: {
    navigate(dest: string): object
  }
}

export class CovidStatusIndicator extends Component<Props, {}> {
  get statusText() {
    const {testedPositiveAt} = this.props.status

    return testedPositiveAt
      ? `Tested Positive On ${formatDate(testedPositiveAt)}`
      : 'Negative'
  }

  render() {
    const {navigate} = this.props.navigation

    return (
      <View>
        <Text style={{...loginStyles.h1, ...loginStyles.textCenter}}>
          My Covid Status
        </Text>
        <Text style={{...loginStyles.h2, ...loginStyles.textCenter}}>
          {this.statusText}
        </Text>
        <View style={loginStyles.buttonContainer}>
          <TouchableHighlight
            style={loginStyles.button}
            onPress={() => navigate('CovidStatus')}
            underlayColor="transparent">
            <Text style={loginStyles.buttonText}>Update Status</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

interface WrapperProps {
  navigation: {
    navigate(dest: string): object
  }
}
class CovidStatusIndicatorWrapper extends Component<WrapperProps> {
  render() {
    return (
      <Subscribe to={[CovidStatusContainer]}>
        {(statusContainer: CovidStatusContainer) => (
          <CovidStatusIndicator
            status={statusContainer.state.status}
            navigation={this.props.navigation}
          />
        )}
      </Subscribe>
    )
  }
}

export default CovidStatusIndicatorWrapper
