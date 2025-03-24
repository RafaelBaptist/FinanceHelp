import React, {createContext, useState} from 'react';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  cons[(loadingAuth, setLoadingAuth)] = useState(false);
  const navigation = useNavigation();

  async function signUp(email, password, name) {
    setLoadingAuth(true);
    try {
      const response = await api.post('/users', {
        name: name,
        password: password,
        email: email,
      });
      setLoadingAuth(false);
      navigation.goBack();
    } catch (err) {
      Alert.alert('erro ao cadastrar');
      setLoadingAuth(false);
    }
  }
  return (
    <AuthContext.Provider value={{user, signUp, loadingAuth}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
