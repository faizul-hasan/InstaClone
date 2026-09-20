import { IconProps } from '@utilities/CommonTypes';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BookmarkIcon = ({ size = 28, strokeWidth = 2 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z"
      stroke="#111111"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BookmarkIcon;
