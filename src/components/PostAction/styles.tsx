import { ALIGNMENT } from '@enums/ENUMS';
import { colors, Sizes } from '@utilities/constants/common';
import { StyleSheet } from 'react-native';

export const PostActionStyles = StyleSheet.create({
  container: {
    height: Sizes.size58,
    paddingHorizontal: Sizes.size14,
    flexDirection: ALIGNMENT.ROW,
    alignItems: ALIGNMENT.CENTER,
    justifyContent: ALIGNMENT.SPACE_BETWEEN,
    backgroundColor: colors.white,
  },

  leftActions: {
    flexDirection: ALIGNMENT.ROW,
    alignItems: ALIGNMENT.CENTER,
    gap: Sizes.size18,
  },

  action: {
    flexDirection: ALIGNMENT.ROW,
    alignItems: ALIGNMENT.CENTER,
    gap: 5,
  },

  count: {
    color: colors.black,
    fontSize: Sizes.size16,
    fontWeight: 600,
  },

  bookmarkButton: {
    width: Sizes.size40,
    height: Sizes.size40,
    alignItems: ALIGNMENT.CENTER,
    justifyContent: ALIGNMENT.CENTER,
  },
});
