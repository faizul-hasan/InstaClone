import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const RepostIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#111111"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path d="m2 9 3-3 3 3" />
    <Path d="M13 18H7a2 2 0 0 1-2-2V6" />
    <Path d="m22 15-3 3-3-3" />
    <Path d="M11 6h6a2 2 0 0 1 2 2v10" />
  </Svg>
);
export default RepostIcon;
