import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import { ALIGNMENT } from '@enums/ENUMS';
import { CustomButtonProps } from '@utilities/CommonTypes';
import { Sizes } from '@utilities/constants/common';

const CustomButton = ({
  onPress = () => {},
  title,
  style,
  titleStyle,
  leftView,
  leftViewStyle,
  centerView,
  centerViewPosition,
  centerViewStyle,
  rightView,
  rightViewStyle,
  isLoading,
  loaderSize,
  loaderColor,
}: CustomButtonProps) => {
  const getLeftView = () => {
    return leftView ? (
      <View style={[styles.imageView, leftViewStyle]}>{leftView}</View>
    ) : (
      <View style={[styles.imageView, leftViewStyle]} />
    );
  };

  const getCenterView = () => {
    if (!!centerView) {
      return (
        <View style={[styles.imageCenterView, centerViewStyle]}>
          {centerViewPosition === ALIGNMENT.LEFT ? centerView : null}
          <Text
            style={[
              styles.appButtonText,
              { flex: Sizes.size0, marginHorizontal: Sizes.size10 },
              titleStyle,
            ]}
          >
            {title}
          </Text>
          {centerViewPosition === ALIGNMENT.RIGHT ? centerView : null}
        </View>
      );
    } else {
      return <Text style={[styles.appButtonText, titleStyle]}>{title}</Text>;
    }
  };

  const getRightView = () => {
    return rightView ? (
      <View style={[styles.imageView, rightViewStyle]}>{rightView}</View>
    ) : (
      <View style={[styles.imageView, rightViewStyle]} />
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.appButtonContainer, style]}
      disabled={isLoading}
    >
      {!isLoading && (leftView || rightView) && getLeftView()}
      {isLoading ? (
        <ActivityIndicator size={loaderSize} animating color={loaderColor} />
      ) : (
        getCenterView()
      )}
      {!isLoading && (leftView || rightView) && getRightView()}
    </TouchableOpacity>
  );
};

export default CustomButton;
