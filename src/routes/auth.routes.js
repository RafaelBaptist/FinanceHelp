import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import SignUn from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />

      <AuthStack.Screen name="SignUp" component={SignUn} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
