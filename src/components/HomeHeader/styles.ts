import { ALIGNMENT } from '@enums/ENUMS';
import { Sizes } from '@utilities/constants/common';
import { StyleSheet } from 'react-native';

export const headerStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: ALIGNMENT.ROW,
    alignItems: ALIGNMENT.CENTER,
    justifyContent: ALIGNMENT.SPACE_BETWEEN,
    marginHorizontal: Sizes.size10,
  },
  AddBtn: {
    width: Sizes.size45,
    height: Sizes.size45,
    alignItems: ALIGNMENT.CENTER,
    justifyContent: 'center',
  },
  txtContainer: {
    alignItems: ALIGNMENT.CENTER,
    flexDirection: ALIGNMENT.ROW,
  },
  instaTxt: {
    fontSize: Sizes.size24,
    marginRight: Sizes.size5,
  },
  dot: {
    bottom: Sizes.size8,
    zIndex: Sizes.size1,
    right: Sizes.size16,
  },
});
