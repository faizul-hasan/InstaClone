import { colors, fonts, Sizes } from '@utilities/constants/common';
import { StyleSheet } from 'react-native';

export const SignupStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#737373',
  },
  header: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginTop: 50,
  },
  inputContainer: { flex: 1, marginHorizontal: 20 },
  inputStyle: {
    height: Sizes.size50,
    marginTop: Sizes.size1,
    borderColor: '#737373',
  },
  textInputStyle: {
    fontFamily: fonts.Primary,
    backgroundColor: colors.black,
    fontSize: Sizes.size16,
    color: colors.white,
  },
  inputRightView: {
    width: Sizes.size30,
    height: Sizes.size30,
    marginRight: Sizes.size15,
  },
  forgotPassTxt: {
    color: colors.white,
    marginTop: Sizes.size14,
    alignSelf: 'center',
  },
  signupButton: {
    fontWeight: 500,
    height: Sizes.size50,
    borderRadius: Sizes.size25,
    marginTop: Sizes.size30,
    fontSize: Sizes.size14,
    backgroundColor: '#2731F5',
  },
  footerContainer: { justifyContent: 'flex-end', marginBottom: 20 },
  createAccountBtn: {
    alignSelf: 'center',
    borderRadius: Sizes.size25,
    height: Sizes.size50,
    width: '90%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2731F5',
  },
  createAccTxt: {
    alignSelf: 'center',
    color: '#2731F5',
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  metaIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    marginTop: 10,
  },
  metaTxt: {
    color: colors.white,
    marginTop: 10,
    marginLeft: 10,
    fontSize: 16,
  },
});
