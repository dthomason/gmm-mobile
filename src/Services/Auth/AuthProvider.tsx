import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, FC, useState } from 'react';

type User = null | { username: string };

export const AuthContext = createContext<{
  user: User;
  login: () => void;
  logout: () => void;
}>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: async () => {
          const fakeUser = { username: 'Henry' };

          try {
            setUser(fakeUser);
            await AsyncStorage.setItem('user', JSON.stringify(fakeUser));
          } catch {
            console.log('Login Failed');
          }
        },
        logout: async () => {
          try {
            await AsyncStorage.removeItem('user');
          } catch {
            console.log('Log Out Failed');
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
