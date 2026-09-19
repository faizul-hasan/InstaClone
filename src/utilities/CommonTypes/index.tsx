import { ALIGNMENT } from '@enums/ENUMS';
import { ReactNode } from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  ImageStyle,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInputSubmitEditingEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';
// import {ResizeMode, Source} from 'react-native-fast-image';

export interface ScreenProps {
  navigation: any;
  route: any;
}
export interface ReviewCardProp {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
export interface CustomModalProps {
  addItemFunc?: Function;
  editItemFunc?: Function;
}
export interface userItemProp {
  name?: string;
  id?: number;
}
// export interface ImageProps {
//   source?: Source | ImageRequireSource;
//   style?: any;
//   resizeMode?: ResizeMode;
//   loaderColor?: ColorValue;
//   loaderSize?: number | 'large' | 'small';
// }

export interface CustomButtonProps {
  navigation?: any;
  onPress: ((event: GestureResponderEvent) => void) & (() => void);
  title?: string;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  leftView?: ReactNode;
  leftViewStyle?: ViewStyle;
  leftIconStyle?: ImageStyle;
  centerView?: ReactNode;
  centerViewPosition?: ALIGNMENT.LEFT | ALIGNMENT.RIGHT;
  centerViewStyle?: ViewStyle;
  centerIconStyle?: ImageStyle;
  rightView?: ReactNode;
  rightViewStyle?: ViewStyle;
  rightIconStyle?: ImageStyle;
  isLoading?: boolean;
  loaderSize?: number | ALIGNMENT.SMALL | ALIGNMENT.LARGE | undefined;
  loaderColor?: ColorValue;
  linearGradient?: (string | number)[];
}

export interface CustomInputProps {
  style?: ViewStyle | ViewStyle[];
  leftView?: ReactNode;
  leftViewStyle?: ViewStyle;
  leftIconStyle?: ViewStyle;
  rightView?: ReactNode;
  rightViewStyle?: ViewStyle;
  rightIconStyle?: ImageStyle;
  rightIconPress?: Function;
  inputStyle?: ViewStyle | ViewStyle[] | undefined;
  placeholder?: string;
  placeholderColor?: ColorValue;
  value?: string;
  onChangeText?: Function;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  secureTextEntry?: boolean;
  onSubmitEditing?: (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  onEndEditing?: (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  multiline?: boolean;
  editable?: boolean;
  labelTitle?: string;
}

export interface ActionItemProp {
  title?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  style?: ViewStyle;
}

export interface CustomPopupProps {
  actionList?: ActionItemProp[];
  title?: string;
  titleStyle?: TextStyle;
  subTitle?: string;
  subTitleStyle?: TextStyle;
  popupStyle?: ViewStyle;
}
export interface CustomToolbarProps {
  navigation?: any;
  title?: String;
  subTitle?: String;
  leftIcon?: ReactNode;
  onPress?: Function;
  customStyle?: ViewStyle;
  leftIconStyle?: StyleProp<ImageStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subTitleStyle?: StyleProp<TextStyle>;
  rightIcon?: ReactNode;
  rightIconStyle?: StyleProp<ImageStyle>;
  onPressRight?: Function;
}

export interface SepratorProps {
  customStyle?: StyleProp<ViewStyle>;
}

export interface WrapperProps {
  children?: ReactNode;
}
export interface LoginProps {
  email?: string | null;
  pass?: string;
  firstName?: string;
  lastName?: string;
  confPass?: string;
  image?: string | null;
}
export interface BottomTabIcon {
  focused: boolean;
  color: string;
  size: number;
  image?: boolean;
}
export interface AppState {
  isLoader: boolean;
  isError: boolean;
  products: Array<any>;
  cartList: Array<any>;
  filteredList: Array<any>;
  allProducts: Array<any>;
  categories: object;
  selectedCat: {
    title: string;
    list: Array<any>;
  } | null;
  selectedProduct: object;
  isReachedLast: boolean;
  currentPage: number;
  cartTotal: number;
  orders: Array<any>;
}
export interface AuthState {
  isAuthenticated: boolean;
  user: LoginProps | null;
}
export interface AlertBoxProps {
  title: string;
  message: string;
  cancel?: boolean;
  onOkClick?: () => void;
}

export interface ProfileOptionProps {
  icon?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  title?: string;
  info?: string;
}
export interface Story {
  id: string;
  username: string;
  image: string;
  isYourStory?: boolean;
}
export interface StoryItemProps {
  story: Story;
  onPress?: (story: Story) => void;
}
