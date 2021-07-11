import { Brand } from '@/Components';
import { useTheme } from '@/Theme';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
  TouchableOpacity,
} from 'react-native';
import { TextInput, useTheme as usePaperTheme } from 'react-native-paper';

export const SignInContainer = () => {
  const [username, setUsername] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const { Layout, Fonts } = useTheme();
  const scale = useMemo(() => new Animated.Value(0), []);
  const inputScale = useMemo(() => new Animated.Value(0), []);
  const bottomButtonOpacity = useMemo(() => new Animated.Value(0), []);
  const [trigger, setTrigger] = useState(false);

  const { t } = useTranslation();

  const handleSignIn = () => {
    setTrigger(true);
    console.log('CLICKED LOGIN');
  };

  const handleSubmit = () => {
    console.log('Submitted');
  };

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      delay: 1000,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  useEffect(() => {
    Animated.timing(bottomButtonOpacity, {
      toValue: 1,
      delay: 2000,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [bottomButtonOpacity]);

  useEffect(() => {
    if (trigger) {
      Animated.timing(inputScale, {
        toValue: 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [trigger, inputScale]);

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Animated.View
        style={[styles.logoContainer, { transform: [{ scale: scale }] }]}
      >
        <Brand />
      </Animated.View>
      <Animated.View
        style={[
          {
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
          { transform: [{ scale: inputScale }] },
        ]}
      >
        <TextInput
          style={{
            backgroundColor: '#ffffffac',
            marginBottom: 4,
            height: 60,
            width: '80%',
          }}
          theme={{
            colors: {
              text: 'rgb(28, 28, 30)',
              primary: 'green',
            },
          }}
          label="Username"
          mode={'flat'}
          returnKeyType="next"
          value={username.value}
          onChangeText={text => setUsername({ value: text, error: '' })}
          outlineColor={'black'}
          error={!!username.error}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={{
            backgroundColor: '#ffffffac',
            marginBottom: 4,
            height: 60,
            width: '80%',
          }}
          theme={{
            colors: {
              text: 'rgb(28, 28, 30)',
              primary: 'green',
            },
          }}
          mode="flat"
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: '' })}
          error={!!password.error}
          secureTextEntry
        />
      </Animated.View>
      <Text style={Fonts.textCenter}>{t('welcome')}</Text>
      <Animated.View style={[{ opacity: bottomButtonOpacity }]}>
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    height: 60,
    width: '85%',
    flexWrap: 'nowrap',
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  fbButton: {
    backgroundColor: '#2E71DC',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 1,
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  effects: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1.5,
    elevation: 1,
  },
  text: {
    fontWeight: '800',
    fontSize: 60,
    color: 'black',
  },
});
