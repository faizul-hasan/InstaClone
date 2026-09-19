import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const DownArrow = (props: SvgProps) => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <Path d="m6 9 6 6 6-6" />
    </Svg>
  );
};
export default DownArrow;
