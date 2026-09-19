/* eslint-disable react-native/no-inline-styles */
import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { headerStyle } from './styles';
import AddIcon from '@assets/Icons/AddIcon';
import DownArrow from '@assets/Icons/DownArrow';
import HeartIcon from '@assets/Icons/HeartIcon';
import { colors } from '@utilities/constants/common';
import DotIcon from '@assets/Icons/DotIcon';
const HomeHeader = () => {
  const [notification] = useState<boolean>(false);
  return (
    <View style={headerStyle.headerContainer}>
      <TouchableOpacity style={headerStyle.AddBtn}>
        <AddIcon
          strokeWidth={1.25}
          color={colors.black}
          height={32}
          width={32}
        />
      </TouchableOpacity>
      <TouchableOpacity style={headerStyle.txtContainer}>
        <Text style={headerStyle.instaTxt}>Instagram</Text>
        <DownArrow strokeWidth={2.25} />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row' }}>
        <HeartIcon strokeWidth={2} />
        {notification ? (
          <DotIcon
            stroke={colors.red}
            fill={colors.red}
            style={headerStyle.dot}
            strokeWidth={4.35}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
export default HomeHeader;
