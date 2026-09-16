import { StyleSheet } from 'react-native';
import { Sizes, colors, flexSizes, fonts } from '@utilities/constants/common';
import { ALIGNMENT } from '@enums/ENUMS';

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: colors.red,
    borderRadius: Sizes.size10,
    flexDirection: ALIGNMENT.ROW,
    alignItems: ALIGNMENT.CENTER,
    justifyContent: ALIGNMENT.CENTER,
    height: Sizes.size40,
    overflow: ALIGNMENT.HIDDEN,
  },
  appButtonText: {
    fontFamily: fonts.PrimarySemiBold,
    fontSize: Sizes.size18,
    color: colors.white,
    textAlign: ALIGNMENT.CENTER,
    flex: flexSizes.flex1,
  },
  imageView: {
    height: Sizes.size40,
    width: Sizes.size40,
    justifyContent: ALIGNMENT.CENTER,
    alignItems: ALIGNMENT.CENTER,
  },
  imageCenterView: {
    flex: flexSizes.flex1,
    justifyContent: ALIGNMENT.CENTER,
    flexDirection: ALIGNMENT.ROW,
    alignItems: ALIGNMENT.CENTER,
  },
  imageIcon: {
    height: Sizes.size24,
    width: Sizes.size24,
  },
});

export default styles;
