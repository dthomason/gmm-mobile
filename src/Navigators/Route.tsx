import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text, View } from 'react-native';

interface RoutesProps {}

function Login() {
  return (
    <View>
      <Text>This is the Login</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export const Route: FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
