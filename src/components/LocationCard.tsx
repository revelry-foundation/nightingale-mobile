import React from 'react'
import PropTypes from 'prop-types'
import {Text, TouchableHighlight, View} from 'react-native'
import {Location} from '../containers/LocationStorageContainer'
import {formatDate} from '../helpers/dates'
import LoginStyles from '../styles/LogInStyles'

const loginStyles = LoginStyles.createStyles()

interface Props {
    location: Location
    index: number
}

export default function LocationCard({
  // eslint-disable-line complexity
  location,
  handleViewLocation
}) {
  return (
    <TouchableHighlight onPress={() => handleViewLocation(location)}>
      <View>
        <Text style={loginStyles.bodyCopy}>{location && location.address}</Text>
        <Text style={loginStyles.bodyCopySmall}>
          {location && formatDate(location.when)}
        </Text> 
      </View>
    </TouchableHighlight>
  )
}
