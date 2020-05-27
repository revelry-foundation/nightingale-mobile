import React, {Component} from 'react'
import {DrawerNavigatorItems} from 'react-navigation-drawer'
import {ScrollView, SafeAreaView} from 'react-native'
import DrawerStyles from '../styles/DrawerStyles'
import Feather from 'react-native-vector-icons/Feather'

const visibleItems: Array<string> = ['Home', 'Locations']

const getVisible = item => visibleItems.includes(item.key)

class DrawerContent extends Component {
  render() {
    const {items, ...props} = this.props

    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        style={DrawerStyles.drawerContainer}>
        <SafeAreaView style={DrawerStyles.drawerHeader} />
        <SafeAreaView
          style={DrawerStyles.drawerContent}
          forceInset={{top: 'always', horizontal: 'never'}}>
          <DrawerNavigatorItems items={items.filter(getVisible)} {...props} />
        </SafeAreaView>
        <SafeAreaView style={DrawerStyles.drawerFooter}>
          <Feather
            name="settings"
            size={24}
            style={DrawerStyles.drawerFooterSettingsIcon}
            color="white"
            onPress={() => props.navigation.navigate('Settings')}
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
}

export default DrawerContent
