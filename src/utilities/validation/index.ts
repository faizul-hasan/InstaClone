import { LoginProps } from '@utilities/CommonTypes';
import { Buttons, common } from '../constants/labels';
import { InputFieldError } from '../constants/string';
import { Alert } from 'react-native';

export const regexExp = {
  // eslint-disable-next-line no-useless-escape
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
};

export function loginValidate({ email = '', pass = '' }: LoginProps) {
  if (email.trim().length === 0) {
    Alert.alert(common.Alert, InputFieldError.EMPTY_EMAIL, [
      { text: Buttons.OK },
    ]);
    return false;
  } else if (!regexExp.email.test(email.trim())) {
    Alert.alert(common.Alert, InputFieldError.VALID_EMAIL, [
      { text: Buttons.OK },
    ]);
    return false;
  } else if (pass.trim().length === 0) {
    Alert.alert(common.Alert, InputFieldError.EMPTY_PASSWORD, [
      { text: Buttons.OK },
    ]);
    return false;
  } else if (pass.trim().length < 6) {
    Alert.alert(common.Alert, InputFieldError.VALID_PASSWORD, [
      { text: Buttons.OK },
    ]);
    return false;
  }
  return true;
}

export function signupValidate({
  firstName = '',
  lastName = '',
  confPass = '',
  pass = '',
}: LoginProps) {
  if (firstName.trim().length === 0) {
    Alert.alert(common.Alert, InputFieldError.EMPTY_FIRST, [
      { text: Buttons.OK },
    ]);
    return false;
  } else if (lastName.trim().length === 0) {
    Alert.alert(common.Alert, InputFieldError.EMPTY_LAST, [
      { text: Buttons.OK },
    ]);
    return false;
  } else if (confPass.trim() !== pass) {
    Alert.alert(common.Alert, InputFieldError.MISMATCH_PASSWORD, [
      { text: Buttons.OK },
    ]);
    return false;
  }
  return true;
}
