import React, {createContext, useEffect, useState} from 'react';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTheme} from '../theme/ThemeContext';
import {darkTheme, lightTheme} from '../theme/themes';
import DarkModeToggle from '../theme/DarkModeToggle';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const {theme} = useTheme();

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@finToken');

      if (storageUser) {
        const response = await api
          .get('/me', {
            headers: {
              Authorization: `Bearer ${storageUser}`,
            },
          })
          .catch(() => {
            setUser(null);
          });

        api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
        if (response?.data) {
          setUser(response.data);
        }
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

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
  async function signIn(email, password) {
    setLoadingAuth(true);

    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });

      const {id, name, token} = response.data;
      const data = {
        id,
        name,
        token,
        email,
      };
      await AsyncStorage.setItem('@finToken', token);
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        email,
      });
      setLoadingAuth(false);
    } catch (err) {
      console.log('errro ao logar', err);
      setLoadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signUp, signIn, loadingAuth, loading}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
