import React from 'react';
import Svg, { Circle, SvgProps } from 'react-native-svg';

const DotIcon = (props: SvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <Circle cx="12" cy="12" r="1" />
    </Svg>
  );
};
export default DotIcon;
