import {Dimensions} from 'react-native'
export const fullWidth = Dimensions.get('window').width

import * as Colors from '../colors'
import * as Spacing from '../spacing'

export const list = {
  borderTopColor: Colors.dividerColor,
  borderTopWidth: 1,
  borderStyle: 'solid',
  marginBottom: Spacing.globalMargin,
}
export const listItem = {
  borderBottomColor: Colors.dividerColor,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  padding: Spacing.globalPadding,
  width: fullWidth,
}
export const listItemContained = {
  ...listItem,
  width: '100%',
}
