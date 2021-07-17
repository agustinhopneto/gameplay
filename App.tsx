import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from '@expo-google-fonts/rajdhani';
import { StatusBar, LogBox } from 'react-native';

import { Background } from './src/components/Background';

import { AuthProvider } from './src/hooks/auth';

import { Routes } from './src/routes';
import { ToastProvider } from './src/hooks/toast';

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine.',
  'componentWillReceiveProps has been renamed, and is not recommended for use.',
  'componentWillMount has been renamed, and is not recommended for use.',
  'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.',
]);

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ToastProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ToastProvider>
    </Background>
  );
};

export default App;
