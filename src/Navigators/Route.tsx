import { Center } from '@/Components/Center';
import { AuthContext } from '@/Services/Auth/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC, useContext, useEffect, useState } from 'react';
import { Button, Text } from 'react-native';

import { AuthNavProps, AuthParamList } from './AuthParamList';

const Stack = createStackNavigator<AuthParamList>();

export function Login({ navigation }: AuthNavProps<'Login'>) {
  const { user } = useContext(AuthContext);

  return (
    <Center>
      <Text>This is the Login</Text>
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  );
}

export function Register({ navigation }: AuthNavProps<'Register'>) {
  return (
    <Center>
      <Text>Register Now!!</Text>
      <Button
        title="go to Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Center>
  );
}

interface RouteProps {}

export const Route: FC<RouteProps> = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          // decode it
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <NavigationContainer>
      {user ? (
        <Text>You Exist</Text>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{
              headerTitle: 'Sign In',
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerTitle: 'Sign Up',
            }}
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
