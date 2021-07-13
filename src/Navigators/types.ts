import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AppParamList = {
  AppLoading: undefined;
  Home: undefined;
  Settings: undefined;
};

export type AuthParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

export type InitParamList = {
  Splash: undefined;
};

export type AppNavProps<T extends keyof AppParamList> = {
  navigation: StackNavigationProp<AppParamList, T>;
  route: RouteProp<AppParamList, T>;
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};

export type InitNavProps<T extends keyof InitParamList> = {
  navigation: StackNavigationProp<InitParamList, T>;
  route: RouteProp<InitParamList, T>;
};
