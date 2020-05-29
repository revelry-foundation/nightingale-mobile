import React from 'react'
import PropTypes from 'prop-types'
import {Text, TouchableHighlight, View} from 'react-native'
import {Location} from '../containers/LocationStorageContainer'

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
    >   
    <Text>
      {location.latitude}, {location.longitude} at {location.when}
    </Text>
    </TouchableHighlight>
  </View>
  )
}
