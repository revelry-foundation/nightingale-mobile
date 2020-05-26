import {Colors, Spacing, Containers, Typography} from '.'
import {StyleSheet} from 'react-native'

const DrawerStyles = {
  drawerExpanderIcon: {
    left: 10,
  },
  drawerContainer: {
    backgroundColor: Colors.brandPrimary,
  },
  drawerHeader: {
    backgroundColor: Colors.brandPrimary,
    height: 135,
  },
  drawerHeaderName: {
    color: Colors.white80,
    fontSize: Typography.bodyFontSizeLarge,
    paddingVertical: Spacing.globalPaddingTiny,
    textAlign: 'center',
  },
  drawerHeaderLocation: {
    color: Colors.white70,
    textAlign: 'center',
  },
  drawerHeaderEditContainer: {
    ...Containers.horizontalVerticalMiddle,
    top: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
    width: 'auto',
  },
  drawerHeaderEditIcon: {
    bottom: 2,
    right: 10,
  },
  drawerHeaderEditText: {
    color: Colors.white,
    fontSize: Typography.bodyFontSizeLarge,
    textAlign: 'center',
  },
  drawerContent: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  drawerFooter: {
    backgroundColor: Colors.brandPrimary,
    height: 65,
  },
  drawerFooterSettingsIcon: {
    left: 25,
    top: 20,
  },
}

export default StyleSheet.create(DrawerStyles)
