import { IndexStartupContainer } from '@/Containers';
import { SignInContainer } from '@/Containers/SignIn/SignIn';
import { navigationRef } from '@/Navigators/Root';
import { StartupState } from '@/Store/Startup';
import { useTheme } from '@/Theme';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState, FunctionComponent } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

let MainNavigator: FunctionComponent | null;

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false);
  const applicationIsLoading = useSelector(
    (state: { startup: StartupState }) => state.startup.loading,
  );
  const isSignedIn = false;

  useEffect(() => {
    if (MainNavigator == null && !applicationIsLoading) {
      MainNavigator = require('@/Navigators/Main').default;
      setIsApplicationLoaded(true);
    }
  }, [applicationIsLoading]);

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setIsApplicationLoaded(false);
      MainNavigator = null;
    },
    [],
  );

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator headerMode={'none'}>
          {!isSignedIn ? (
            <Stack.Screen name="SignIn" component={SignInContainer} />
          ) : (
            <Stack.Screen name="Startup" component={IndexStartupContainer} />
          )}
          {isApplicationLoaded && MainNavigator != null && (
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
