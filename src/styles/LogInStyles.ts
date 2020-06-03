import {
  Colors,
  Fonts,
  Spacing,
  Containers,
  Headers,
  Typography,
  Buttons,
  Forms,
  Lists,
} from '.'

import {StyleSheet} from 'react-native'

const LoginStyles = {
  pageWrapper: {
    ...Containers.pageWrapper,
  },
  container: {
    ...Containers.container,
  },
  containerCollapsed: {
    ...Containers.containerCollapsed,
  },
  section: {
    ...Containers.section,
  },
  // TYPOGRAPHY
  h1: {
    ...Headers.h1,
  },
  h2: {
    ...Headers.h2,
  },
  h3: {
    ...Headers.h3,
  },
  h6: {
    ...Headers.h6,
  },
  bodyCopy: {
    ...Typography.bodyCopy,
  },
  bodyCopySmall: {
    ...Typography.bodyCopySmall,
    color: Colors.gray,
  },
  textCenter: {
    textAlign: 'center',
  },
  contentLeft: {
    marginBottom: Spacing.globalMarginLarge,
    textAlign: 'left',
  },
  // BUTTONS
  buttonContainer: {
    ...Buttons.container,
  },
  button: {
    ...Buttons.primary,
    ...Buttons.narrow,
  },
  buttonText: {
    ...Buttons.primaryText,
  },
  buttonWhite: {
    ...Buttons.white,
  },
  buttonWhiteText: {
    ...Buttons.whiteText,
    fontSize: Typography.bodyFontSizeLarge,
  },
  buttonLinkWhite: {
    ...Buttons.linkWhite,
  },
  buttonLinkWhiteText: {
    ...Buttons.linkWhiteText,
    fontSize: Typography.bodyFontSizeLarge,
    fontWeight: Typography.fontWeightBold,
  },
  // LISTS
  list: {
    ...Lists.list,
  },
  listItem: {
    ...Lists.listItem,
  },
  // FORMS
  inputContainer: {
    ...Forms.stackedInputWrapper,
  },
  label: {
    ...Forms.label,
  },
  input: {
    ...Forms.inputMinimal,
  },
  textArea: {
    ...Forms.inputMinimal,
    height: 100,
  },
  // NOT FORMS
  staticInputContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: Spacing.globalMarginLarge,
  },
  combinedRowInputContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  staticInputLabel: {
    ...Forms.label,
    paddingRight: Spacing.globalPaddingSmaller,
  },
  // FOOTER HELPTEXT
  helpTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  helpText: {
    ...Typography.helpText,
  },
  helpTextLink: {
    ...Typography.helpText,
    color: Colors.black,
    fontFamily: Fonts.bodyFontBold,
    paddingLeft: Spacing.globalPaddingTiny,
  },
  textLink: {
    ...Typography.textLink,
  },
  textLinkSmall: {
    ...Typography.textLinkSmall,
    paddingBottom: Spacing.globalPaddingMedium,
    paddingLeft: Spacing.globalPaddingTiny,
  },
  termsText: {
    ...Typography.bodyCopy,
    paddingLeft: Spacing.globalPaddingTiny,
  },
  textLinkNormal: {
    ...Typography.textLink,
    ...Typography.bodyCopy,
  },
}

function createStyles(overrides = {}) {
  return StyleSheet.create({...LoginStyles, ...overrides})
}

export default {
  createStyles,
}
