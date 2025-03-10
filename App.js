import React from 'react';
// import {Container, MainTitle} from './src/styles/styles';
import {StatusBar} from 'react-native';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}
