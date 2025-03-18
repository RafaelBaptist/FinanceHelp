import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';
import {ThemeProvider} from './src/theme/ThemeContext';
import Routes from './src/routes';
import {useTheme} from './src/theme/ThemeContext';

const AppContent = () => {
  const {theme} = useTheme();
  o;

  return (
    <StyledThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={theme.statusBarBackground}
          barStyle={theme.statusBarStyle}
        />
        <Routes />
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
