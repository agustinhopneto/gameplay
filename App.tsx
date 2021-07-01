import React from 'react';
import { StatusBar } from 'react-native';
import { SignIn } from './src/screens/SignIn';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SignIn />
    </>
  );
};

export default App;
