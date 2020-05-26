import * as Colors from '../colors'
import * as Global from '../global'
import * as Spacing from '../spacing'
import * as Sizes from '../sizes'
import * as Typography from './typography'

export const chipContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  width: 'auto',
}
export const chip = {
  backgroundColor: Colors.lighterGray,
  borderRadius: Global.globalRounded,
  flexDirection: 'row',
}
export const chipText = {
  ...Typography.caption,
  ...Typography.bodyCopyMedium,
  paddingHorizontal: Spacing.globalPaddingSmall,
  paddingVertical: 6,
}
export const chipThumbnail = {
  backgroundColor: Colors.gray60,
  marginLeft: Spacing.globalMarginTiny,
  marginVertical: Spacing.globalMarginTiny,
  borderRadius: Global.globalRounded,
  minWidth: Sizes.globalSizeMedium,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}
export const chipThumbNumber = {
  ...Typography.bodyCopyMedium,
  fontWeight: Typography.fontWeightBold,
  color: Colors.white,
  textAlign: 'center',
  paddingHorizontal: Spacing.globalPaddingSmaller,
}
export const chipThumbImg = {
  resizeMode: 'cover',
  height: Sizes.globalSizeMedium,
  width: Sizes.globalSizeMedium,
}
