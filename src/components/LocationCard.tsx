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
  index,
  handleViewLocation
}) {
  return (
    <View>
    <TouchableHighlight
      onPress={() => handleViewLocation(index, location)} // using index to delete or edit location
    >   <Text> {location.address} {formatDate(location.when)}</Text>

{/* <Text style={loginStyles.bodyCopy}>{location.address}</Text>
<Text style={loginStyles.bodyCopySmall}>
  {formatDate(location.when)}
</Text> */}
    </TouchableHighlight>
  </View>
  )
}
