import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DarkModeToggle from '../theme/DarkModeToggle';
import Home from '../pages/Home';
import {useTheme} from '../theme/ThemeContext';
import New from '../Components/New';

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
  const {theme} = useTheme();
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.colors.background,
          paddingTop: 20,
          opacity: 0.9,
        },
        drawerItemStyle: {
          borderRadius: 10,
        },
        drawerActiveBackgroundColor: '#56ab48',
        drawerActiveTintColor: theme.colors.inputText,
        drawerInactiveTintColor: theme.colors.inputText,
        drawerInactiveBackgroundColor: 'transparent',
      }}>
      <AppDrawer.Screen name="Home" component={Home} />
      <AppDrawer.Screen name="Registrar" component={New} />
    </AppDrawer.Navigator>
  );
}
export default AppRoutes;
