import { IconProps } from '@utilities/CommonTypes';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SendIcon = ({ size = 24, strokeWidth = 2 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M22 2L11 13"
      stroke="#111111"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <Path
      d="M22 2l-7 20-4-9-9-4 20-7Z"
      stroke="#111111"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SendIcon;
