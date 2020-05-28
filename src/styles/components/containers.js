import {Dimensions} from 'react-native'
export const fullHeight = Dimensions.get('window').width
export const fullWidth = Dimensions.get('window').width

import * as Colors from '../colors'
import * as Spacing from '../spacing'
import * as Global from '../global'

export const pageWrapper = {
  backgroundColor: Colors.white,
  borderRadius: Global.globalRadiusLarge,
  flex: 1,
  padding: Spacing.globalPadding,
  width: fullWidth,
}
export const base = {
  width: fullWidth,
}
export const container = {
  ...base,
}
export const containerExpand = {
  ...base,
  flex: 1,
}
export const verticalSpaceBetween = {
  ...base,
  flex: 1,
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
