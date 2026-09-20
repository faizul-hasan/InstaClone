import { ALIGNMENT } from '@enums/ENUMS';
import {
  colors,
  flexSizes,
  Percentages,
  Sizes,
} from '@utilities/constants/common';
import { DimensionValue, StyleSheet } from 'react-native';
export const PostCardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },

  // HEADER

  header: {
    height: Sizes.size60,
    paddingHorizontal: Sizes.size14,
    flexDirection: ALIGNMENT.ROW,
    alignItems: ALIGNMENT.CENTER,
    justifyContent: ALIGNMENT.SPACE_BETWEEN,
    backgroundColor: colors.white,
  },

  headerLeft: {
    flexDirection: ALIGNMENT.ROW,
    alignItems: ALIGNMENT.CENTER,
    flex: flexSizes.flex1,
  },

  profileImage: {
    width: Sizes.size38,
    height: Sizes.size38,
    borderRadius: Sizes.size19,
    marginRight: Sizes.size10,
  },

  username: {
    color: colors.black,
    fontSize: Sizes.size17,
    fontWeight: '700',
    maxWidth: Percentages.percent75 as DimensionValue,
  },

  moreButton: {
    width: Sizes.size40,
    height: Sizes.size40,
    alignItems: ALIGNMENT.CENTER,
    justifyContent: ALIGNMENT.CENTER,
  },

  // IMAGE
  imageContainer: {
    position: ALIGNMENT.RELATIVE,
    overflow: ALIGNMENT.HIDDEN,
  },
  postImage: {
    width: Percentages.hundred as DimensionValue,
    height: Percentages.hundred as DimensionValue,
  },

  // IMAGE BADGE

  imageBadge: {
    position: ALIGNMENT.ABSOLUTE,
    left: Sizes.size30,
    bottom: Sizes.size28,
    width: Sizes.size42,
    height: Sizes.size42,
    borderRadius: Sizes.size21,
    justifyContent: ALIGNMENT.CENTER,
    alignItems: ALIGNMENT.CENTER,
  },

  badgeImage: {
    width: Sizes.size42,
    height: Sizes.size42,
    borderRadius: Sizes.size21,
  },

  badgeIcon: {
    position: ALIGNMENT.ABSOLUTE,
    right: -3,
    bottom: -2,
    width: Sizes.size17,
    height: Sizes.size17,
    borderRadius: Sizes.size10,
    backgroundColor: '#7638FF',
    alignItems: ALIGNMENT.CENTER,
    justifyContent: ALIGNMENT.CENTER,
  },

  // LIKES

  likeContainer: {
    paddingHorizontal: Sizes.size14,
    marginTop: Sizes.size2,
  },

  likedByText: {
    color: colors.black,
    fontSize: Sizes.size15,
    lineHeight: Sizes.size21,
    fontWeight: 400,
  },

  boldText: {
    fontWeight: 700,
  },

  // CAPTION

  captionContainer: {
    paddingHorizontal: Sizes.size14,
    marginTop: Sizes.size3,
    paddingBottom: Sizes.size12,
  },

  caption: {
    color: colors.black,
    fontSize: Sizes.size15,
    lineHeight: Sizes.size20,
    fontWeight: 400,
  },
});
