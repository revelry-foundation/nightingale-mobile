import React, {Component} from 'react'
import {Text, View, Image, ScrollView} from 'react-native'
import LoginStyles from '../styles/LogInStyles'
import {Chips} from '../styles'

const loginStyles = LoginStyles.createStyles()

export default class StyleGuide extends Component {
  render() {
    return (
      <View style={loginStyles.pageWrapper}>
        <ScrollView style={loginStyles.containerCollapsed}>
          
          <View style={loginStyles.section}>
            <Text style={loginStyles.h1}>Style Guide</Text>
          </View>
          
          <View style={loginStyles.section}>
            <Text style={loginStyles.h2}>Set Status</Text>
          </View>
          
          <View style={loginStyles.section}>
            <Text style={loginStyles.h2}>Location List</Text>
          </View>
          <View style={loginStyles.list}>
            <View style={loginStyles.listItem}>
              <Text style={loginStyles.bodyCopy}>address: lat long</Text>
              <Text style={loginStyles.bodyCopySmall}>timestamp</Text>
            </View>
            <View style={loginStyles.listItem}>
              <Text style={loginStyles.bodyCopy}>address: lat long</Text>
              <Text style={loginStyles.bodyCopySmall}>timestamp</Text>
            </View>
            <View style={loginStyles.listItem}>
              <Text style={loginStyles.bodyCopy}>address: lat long</Text>
              <Text style={loginStyles.bodyCopySmall}>timestamp</Text>
            </View>
            <View style={loginStyles.listItem}>
              <Text style={loginStyles.bodyCopy}>address: lat long</Text>
              <Text style={loginStyles.bodyCopySmall}>timestamp</Text>
            </View>
          </View>

          <View style={loginStyles.section}>
            <Text style={loginStyles.h2}>Chips</Text>
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
          </View>
        </ScrollView>
      </View>
    )
  }
}
