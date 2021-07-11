import { Center } from '@/Components/Center';
import { IndexExampleContainer } from '@/Containers';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function Search() {
  return (
    <Center>
      <View>This is the Search</View>
    </Center>
  );
}

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={IndexExampleContainer} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
