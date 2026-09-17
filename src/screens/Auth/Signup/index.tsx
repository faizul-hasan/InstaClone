import { View, Text, Image, TextInput } from 'react-native';
import React, { SetStateAction, useRef, useState } from 'react';
import { SignupStyles } from './styles';
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

const SignupScreen = () => {
  const [Email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);
  const [Fullname, setFullname] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const emailRef = useRef<TextInput | null>(null);
  const passRef = useRef<TextInput | null>(null);
  const fullnameRef = useRef<TextInput | null>(null);
  const usernameRef = useRef<TextInput | null>(null);

  return (
    <SafeAreaView style={SignupStyles.container}>
      <View style={SignupStyles.container}>
        <View style={SignupStyles.header}>
          <Text style={SignupStyles.text}>English(US)</Text>
          <Image
            source={require('../../../assets/Icons/logo.png')}
            style={SignupStyles.logo}
          />
        </View>
        <View style={SignupStyles.inputContainer}>
          <CustomInput
            ref={emailRef}
            style={SignupStyles.inputStyle}
            placeholder={placeholder.Email2}
            placeholderColor={colors.gray}
            inputStyle={SignupStyles.textInputStyle}
            onChangeText={(text: SetStateAction<string>) => setEmail(text)}
            value={Email}
            keyboardType={'name-phone-pad'}
            onSubmitEditing={() => passRef.current?.focus()}
            returnKeyType={'next'}
            rightView={<UsernameIcon stroke={colors.gray} />}
            rightViewStyle={SignupStyles.inputRightView}
            labelTitle={placeholder.username}
          />

          <CustomInput
            ref={passRef}
            style={SignupStyles.inputStyle}
            placeholder={placeholder.password}
            inputStyle={SignupStyles.textInputStyle}
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
            rightViewStyle={SignupStyles.inputRightView}
            rightIconStyle={{ tintColor: colors.white }}
            rightIconPress={() => setIsPassVisible(!isPassVisible)}
            secureTextEntry={!isPassVisible}
            leftViewStyle={SignupStyles.inputRightView}
            labelTitle={placeholder.pass}
          />

          <CustomInput
            ref={fullnameRef}
            style={SignupStyles.inputStyle}
            placeholder={placeholder.FullName}
            placeholderColor={colors.gray}
            inputStyle={SignupStyles.textInputStyle}
            onChangeText={(text: SetStateAction<string>) => setFullname(text)}
            value={Fullname}
            keyboardType={'name-phone-pad'}
            onSubmitEditing={() => usernameRef.current?.focus()}
            returnKeyType={'next'}
            rightView={<UsernameIcon stroke={colors.gray} />}
            rightViewStyle={SignupStyles.inputRightView}
            labelTitle={placeholder.username}
          />
          <CustomInput
            ref={usernameRef}
            style={SignupStyles.inputStyle}
            placeholder={placeholder.username}
            placeholderColor={colors.gray}
            inputStyle={SignupStyles.textInputStyle}
            onChangeText={(text: SetStateAction<string>) => setUsername(text)}
            value={username}
            keyboardType={'name-phone-pad'}
            onSubmitEditing={() => passRef.current?.focus()}
            returnKeyType={'next'}
            rightView={<UsernameIcon stroke={colors.gray} />}
            rightViewStyle={SignupStyles.inputRightView}
            labelTitle={placeholder.username}
          />

          <CustomButton
            title={string.SignUp}
            onPress={() => navigate('App')}
            style={SignupStyles.signupButton}
          />
        </View>
        <View style={SignupStyles.footerContainer}>
          <View style={SignupStyles.metaContainer}>
            <Image
              source={require('../../../assets/Icons/MetaIcon.png')}
              style={SignupStyles.metaIcon}
            />
            <Text style={SignupStyles.metaTxt}>Meta</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
