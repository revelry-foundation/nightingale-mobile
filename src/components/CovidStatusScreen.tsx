import React, {Component} from 'react'
import {Subscribe} from 'unstated'
import {Text, View, ScrollView, Switch, TouchableHighlight} from 'react-native'

import LoginStyles from '../styles/LogInStyles'
import BusyButton from './BusyButton'
import LocationUploadContainer from '../containers/LocationUploadContainer'
import LocationStorageContainer, {
  Location,
} from '../containers/LocationStorageContainer'
import {formatDate} from '../helpers/dates'

const loginStyles = LoginStyles.createStyles()

import CovidStatusContainer from '../containers/CovidStatusContainer'

interface Props {
  statusContainer: CovidStatusContainer
  locations: Location[]
  navigation: {
    navigate(dest: string): object
  }
}
interface State {
  loading: boolean
  uploadEnabled: boolean
}

export class CovidStatusScreen extends Component<Props, State> {
  state = {
    loading: false,
    uploadEnabled: false,
  }
  uploader = new LocationUploadContainer()

  handleSubmitPositive = async () => {
    this.setState({loading: true})

    // TODO: Record dates spacified by the user and use them to filter the locations uploaded
    await this.props.statusContainer.recordPositiveStatus(new Date())

    if (this.state.uploadEnabled) {
      await this.uploader.uploadLocations(this.props.locations)
      await this.props.statusContainer.recordLocationsUploaded(new Date())
    }

    this.setState({loading: false})
  }

  handleSubmitNegative = async () => {
    this.setState({loading: true})

    await this.props.statusContainer.clearStatus()

    this.setState({loading: false})
  }

  handleUploadValueChange = () => {
    this.setState(state => ({
      uploadEnabled: !state.uploadEnabled,
    }))
  }

  render() {
    const {navigate} = this.props.navigation
    const {testedPositiveAt} = this.props.statusContainer.state.status

    if (testedPositiveAt) {
      return (
        <View style={loginStyles.pageWrapper}>
          <ScrollView style={loginStyles.container}>
            <Text style={loginStyles.h1}>My COVID-19 Status</Text>
            <Text style={loginStyles.h3}>
              You tested positive on {formatDate(testedPositiveAt)}
            </Text>
            <View style={loginStyles.buttonContainer}>
              <TouchableHighlight
                style={loginStyles.button}
                underlayColor="transparent"
                onPress={this.handleSubmitNegative}>
                <Text style={loginStyles.buttonText}>
                  Change Status to Negative
                </Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      )
    }

    return (
      <View style={loginStyles.pageWrapper}>
        <ScrollView style={loginStyles.container}>
          <Text style={loginStyles.h1}>My COVID-19 Status</Text>
          <Text style={loginStyles.h2}>
            Your information is completely anonymous.
          </Text>
          <Text style={loginStyles.contentLeft}>
            If you update your status to Positive, you have the opportunity to
            upload anonymous data about the locations you've visited while
            contagious. Others will be notified if their history indicates they
            were in your proximity during that time, but none of your personal
            details are collected or shared.
          </Text>

          <View style={loginStyles.buttonContainer}>
            <TouchableHighlight
              style={loginStyles.button}
              underlayColor="transparent"
              onPress={this.handleSubmitPositive}>
              <Text style={loginStyles.buttonText}>
                Change Status to Positive
              </Text>
            </TouchableHighlight>
          </View>

          <Text style={loginStyles.contentLeft}>
            May we anonymously share your locations for the past 14 days to help
            your community stay safe?
          </Text>

          <View
            style={{
              ...loginStyles.container,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={loginStyles.label}>Share my locations</Text>
            <Switch
              value={this.state.uploadEnabled}
              onValueChange={this.handleUploadValueChange}
            />
          </View>

          <TouchableHighlight
            onPress={() => navigate('Home')}
            underlayColor="transparent">
            <Text style={loginStyles.textLink}>Back</Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}

interface WrapperProps {
  navigation: {
    navigate(dest: string): object
  }
}
class CovidStatusScreenWrapper extends Component<WrapperProps> {
  render() {
    return (
      <Subscribe to={[CovidStatusContainer, LocationStorageContainer]}>
        {(
          statusContainer: CovidStatusContainer,
          storageContainer: LocationStorageContainer
        ) => (
          <CovidStatusScreen
            statusContainer={statusContainer}
            navigation={this.props.navigation}
            locations={storageContainer.state.locations}
          />
        )}
      </Subscribe>
    )
  }
}

export default CovidStatusScreenWrapper
