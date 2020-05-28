import {
  Colors,
  Fonts,
  Spacing,
  Containers,
  Headers,
  Typography,
  Buttons,
  Forms,
} from '.'

import {StyleSheet} from 'react-native'

const LoginStyles = {
  pageWrapper: {
    ...Containers.pageWrapper,
  },
  container: {
    ...Containers.container,
  },
  containerExpand: {
    ...Containers.containerExpand,
  },
  horizontalSpaceAround: {
    ...Containers.horizontalSpaceAround,
  },
  logoContainer: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    height: 100,
    paddingTop: 40,
  },
  logo: {
    height: 53,
    marginLeft: Spacing.globalMargin,
    width: 312,
    paddingTop: 147.5,
  },
  primaryGradientBackground: {
    flex: 1,
    height: 100,
  },
  // CONTENT
  h1: {
    ...Headers.h1,
  },
  content: {
    marginBottom: Spacing.globalMarginLarge,
    textAlign: 'center',
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
