import { StyleSheet } from 'react-native';
import { Sizes, colors, fonts } from '@utilities/constants/common';
import { ALIGNMENT } from '@enums/ENUMS';

const styles = StyleSheet.create({
  appButtonContainer: {
    flexDirection: ALIGNMENT.ROW,
    alignItems: ALIGNMENT.CENTER,
    height: Sizes.size10,
    borderRadius: Sizes.size10,
    borderWidth: Sizes.size1,
    borderColor: colors.lightGray,
  },
  textInputStyle: {
    flex: 1,
    backgroundColor: colors.black,
    alignSelf: ALIGNMENT.STRETCH,
    color: colors.white,
    fontFamily: fonts.Primary,
    marginLeft: Sizes.size5,
  },
  imageView: {
    height: Sizes.size40,
    width: Sizes.size40,
    justifyContent: ALIGNMENT.CENTER,
    alignItems: ALIGNMENT.CENTER,
  },
  imageIcon: {
    height: Sizes.size24,
    width: Sizes.size24,
  },

  labelTitle: {
    color: colors.black,
    fontFamily: fonts.Primary,
    marginLeft: Sizes.size10,
    fontSize: Sizes.size15,
    margin: Sizes.size16,
    marginBottom: Sizes.size0,
  },
});

export default styles;
