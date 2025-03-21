import React, {createContext, useState} from 'react';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState({
    nome: 'rafael zardie',
  });

  const navigation = useNavigation();

  async function signUp(email, password, name) {
    try {
      const response = await api.post('/users', {
        name: name,
        password: password,
        email: email,
      });
      navigation.goBack();
    } catch (err) {
      Alert.alert('erro ao cadastrar');
    }
  }
  return (
    <AuthContext.Provider value={{user, signUp}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
