import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {AuthContext} from '../contexts/auth';
import {darkTheme, lightTheme} from '../theme/themes';
import DarkModeToggle from '../theme/DarkModeToggle';
import {useTheme} from '../theme/ThemeContext';

function Routes() {
  const {signed, loading} = useContext(AuthContext);
  const {theme} = useTheme();
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.background,
        }}>
        <ActivityIndicator size="large" color=" #005732" />
      </View>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
