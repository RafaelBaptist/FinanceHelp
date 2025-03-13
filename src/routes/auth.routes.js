import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import SignUn from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUn}
        options={{
          headerStyle: {
            backgroundColor: '#56ab48',
            borderBottomWidth: 1,
            borderBottomColor: '#fff',
          },
          headerTintColor: '#fff',
          headerTitle: 'Voltar',
          headerBackTitleVisible: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
