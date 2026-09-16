import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { SetStateAction, useRef, useState } from 'react';
import { LoginStyles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@utilities/constants/common';
import CustomButton from '@components/CustomButton';
import { string } from '@utilities/constants/string';
import { placeholder } from '@utilities/constants/labels';
import CustomInput from '@components/CustomInput';
import UsernameIcon from '@assets/Icons/UsernameIcon';
import VisibilityOff from '@assets/Icons/VisibilityOff';
import Visibility from '@assets/Icons/Visibility';
import { navigate } from '@navigation/rootNavigator';
import screens from '@utilities/constants/screens';

const LoginScreen = () => {
  const [Email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

  const emailRef = useRef<TextInput | null>(null);
  const passRef = useRef<TextInput | null>(null);

  return (
    <SafeAreaView style={LoginStyles.container}>
      <View style={LoginStyles.container}>
        <View style={LoginStyles.header}>
          <Text style={LoginStyles.text}>English(US)</Text>
          <Image
            source={require('../../../assets/Icons/logo.png')}
            style={LoginStyles.logo}
          />
        </View>
        <View style={LoginStyles.inputContainer}>
          <CustomInput
            ref={emailRef}
            style={LoginStyles.inputStyle}
            placeholder={placeholder.Email}
            placeholderColor={colors.gray}
            inputStyle={LoginStyles.textInputStyle}
            onChangeText={(text: SetStateAction<string>) => setEmail(text)}
            value={Email}
            keyboardType={'email-address'}
            onSubmitEditing={() => passRef.current?.focus()}
            returnKeyType={'next'}
            rightView={<UsernameIcon stroke={colors.gray} />}
            rightViewStyle={LoginStyles.inputRightView}
            labelTitle={placeholder.username}
          />

          <CustomInput
            ref={passRef}
            style={LoginStyles.inputStyle}
            placeholder={placeholder.password}
            inputStyle={LoginStyles.textInputStyle}
            placeholderColor={colors.gray}
            onChangeText={(text: SetStateAction<string>) => setPass(text)}
            value={pass}
            returnKeyType={'done'}
            rightView={
              !isPassVisible ? (
                <VisibilityOff stroke={colors.gray} />
              ) : (
                <Visibility stroke={colors.gray} />
              )
            }
            rightViewStyle={LoginStyles.inputRightView}
            rightIconStyle={{ tintColor: colors.white }}
            rightIconPress={() => setIsPassVisible(!isPassVisible)}
            secureTextEntry={!isPassVisible}
            leftViewStyle={LoginStyles.inputRightView}
            labelTitle={placeholder.pass}
          />

          <CustomButton
            title={string.Login}
            onPress={() => navigate('App')}
            style={LoginStyles.loginButton}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={[LoginStyles.forgotPassTxt]}>
              {string.forgotPassword}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={LoginStyles.footerContainer}>
          <TouchableOpacity
            style={LoginStyles.createAccountBtn}
            onPress={() => navigate(screens.signup)}
          >
            <Text style={LoginStyles.createAccTxt}>{string.CreateAccount}</Text>
          </TouchableOpacity>
          <View style={LoginStyles.metaContainer}>
            <Image
              source={require('../../../assets/Icons/MetaIcon.png')}
              style={LoginStyles.metaIcon}
            />
            <Text style={LoginStyles.metaTxt}>Meta</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
