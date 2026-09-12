import { StyleSheet } from 'react-native';
import { Percentages, fontSizes, fonts } from '@utilities/constants/common';
import { DimensionValue } from 'react-native';

export const TabBarStyle = StyleSheet.create({
  tabBarlabel: {
    fontSize: fontSizes.extraSmall,
    fontFamily: fonts.Primary,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  profileIconStyle: {
    width: Percentages.hundred as DimensionValue,
    height: Percentages.hundred as DimensionValue,
    borderRadius: 50,
  },
});
