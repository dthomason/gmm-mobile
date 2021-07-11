export type StackNavigatorParamlist = {
  FeedList: undefined;
  Login: undefined;
  SplashScreen: undefined;
  Details: {
    id: number;
    name: string;
    handle: string;
    date: string;
    content: string;
    image: string;
    avatar: string;
    comments: number;
    retweets: number;
    hearts: number;
  };
};

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
};

export type UserToken = string;

export type UserTheme = 'light' | 'dark';

export type UserDetail = {
  user: User;
  theme: UserTheme;
  token: UserToken;
};
