import React from 'react';
import { Svg, Path, SvgProps } from 'react-native-svg';

const AddIcon = (props: SvgProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <Path d="M5 12h14" />
      <Path d="M12 5v14" />
    </Svg>
  );
};

export default AddIcon;
