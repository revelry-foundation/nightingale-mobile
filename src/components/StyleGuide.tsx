import React, {Component} from 'react'
import {Text, View, Image} from 'react-native'
import LoginStyles from '../styles/LogInStyles'
import {Chips} from '../styles'

const loginStyles = LoginStyles.createStyles()

export default class StyleGuide extends Component {
  render() {
    return (
      <View style={loginStyles.pageWrapper}>

        <View style={Chips.chipContainer}>

          <View style={Chips.chip}>
            <View style={Chips.chipThumbnail}>
              <Text style={Chips.chipThumbNumber}>1</Text>
            </View>
            <Text style={Chips.chipText}>Chip Text</Text>
          </View>

          <View style={Chips.chip}>
            <View style={Chips.chipThumbnail}>
              <Image source={{url:'https://picsum.photos/id/433/200/200'}} style={Chips.chipThumbImg}></Image>
            </View>
            <Text style={Chips.chipText}>John Doe</Text>
          </View>

        </View>

        <View style={loginStyles.containerExpand}>
          <View>
            <Text style={loginStyles.h1}>Style Guide</Text>
          </View>
        </View>
      </View>
    )
  }
}
