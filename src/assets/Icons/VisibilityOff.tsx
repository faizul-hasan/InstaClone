import * as React from 'react';
import { Path, Svg, SvgProps } from 'react-native-svg';

function VisibilityOff(Props: SvgProps) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...Props}
    >
      <Path d="m15 18-.722-3.25" />
      <Path d="M2 8a10.645 10.645 0 0 0 20 0" />
      <Path d="m20 15-1.726-2.05" />
      <Path d="m4 15 1.726-2.05" />
      <Path d="m9 18 .722-3.25" />
    </Svg>
  );
}

export default VisibilityOff;
