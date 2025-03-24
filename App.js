import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';
import {ThemeProvider} from './src/theme/ThemeContext';
import Routes from './src/routes';
import {useTheme} from './src/theme/ThemeContext';

import AuthProvider from './src/contexts/auth';

const AppContent = () => {
  const {theme} = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar
            backgroundColor={theme.statusBarBackground}
            barStyle={theme.statusBarStyle}
          />
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </StyledThemeProvider>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
