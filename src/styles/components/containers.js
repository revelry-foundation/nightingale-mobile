import {Dimensions} from 'react-native'
export const fullHeight = Dimensions.get('window').width
export const fullWidth = Dimensions.get('window').width

import * as Colors from '../colors'
import * as Spacing from '../spacing'
import * as Global from '../global'

export const pageWrapper = {
  backgroundColor: Colors.brandPrimary,
  flex: 1,
  width: fullWidth,
}
export const onboardingWrapper = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  width: fullWidth,
}
export const base = {
  backgroundColor: Colors.white,
  flex: 1,
  padding: Spacing.globalPadding,
}
export const container = {
  ...base,
}
export const containerCollapsed = {
  ...base,
  paddingHorizontal: 0,
}
export const containerExpand = {
  ...base,
}
export const section = {
  paddingHorizontal: Spacing.globalPadding,
}
export const verticalSpaceBetween = {
  ...base,
  flexDirection: 'column',
  height: fullHeight,
  justifyContent: 'space-between',
}
export const horizontalSpaceAround = {
  ...verticalSpaceBetween,
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: Spacing.globalPadding,
}
export const horizontalVerticalMiddle = {
  // Aligns item in the middle both horizontally and vertically
  ...base,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}
