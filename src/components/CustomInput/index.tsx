import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import { CustomInputProps } from '@utilities/CommonTypes';
import { colors } from '@utilities/constants/common';

const CustomInput = forwardRef(
  (
    {
      style = {},
      leftView = undefined,
      leftViewStyle = {},
      leftIconStyle = {},
      rightView = undefined,
      rightViewStyle = {},
      // rightIconStyle = {},
      rightIconPress = () => {},
      inputStyle = {},
      placeholder = '',
      placeholderColor = colors.black,
      value = '',
      onChangeText = () => {},
      keyboardType = 'default',
      returnKeyType = 'default',
      secureTextEntry = false,
      onSubmitEditing = () => {},
      onEndEditing = () => {},
      autoCapitalize = 'none',
      multiline = false,
      editable = true,
      labelTitle = '',
    }: CustomInputProps,
    ref,
  ) => {
    const inputRef = useRef<TextInput | null>(null);

    const setInputRef = (ref: TextInput | null) => {
      inputRef.current = ref;
    };
    useImperativeHandle(ref, () => ({
      focus() {
        inputRef?.current?.focus();
      },
      blur() {
        inputRef?.current?.blur?.();
      },
    }));
    const getLeftView = () => {
      return leftView ? (
        <View style={[styles.imageView, leftViewStyle]}>{leftView}</View>
      ) : (
        <View style={[styles.imageView, leftIconStyle]} />
      );
    };

    const getRightView = () => {
      return rightView ? (
        <TouchableOpacity
          style={[styles.imageView, rightViewStyle]}
          onPress={() => rightIconPress()}
        >
          {rightView}
        </TouchableOpacity>
      ) : (
        <View style={[styles.imageView, rightViewStyle]} />
      );
    };
    return (
      <>
        {labelTitle && <Text style={styles.labelTitle}>{labelTitle}</Text>}
        <View style={[styles.appButtonContainer, style]}>
          {leftView && getLeftView()}
          <TextInput
            ref={(ref: TextInput) => {
              if (ref) {
                setInputRef(ref);
              }
            }}
            style={[styles.textInputStyle, inputStyle]}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
            onEndEditing={onEndEditing}
            multiline={multiline}
            editable={editable}
            returnKeyType={returnKeyType}
            autoCapitalize={autoCapitalize}
          />
          {rightView && getRightView()}
        </View>
      </>
    );
  },
);

export default CustomInput;
