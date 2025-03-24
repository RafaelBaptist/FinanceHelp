import React, {useContext, useState} from 'react';
import {Platform, Alert, ActivityIndicator} from 'react-native';
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButtom,
  SubmitText,
} from '../SignIn/styles';
import DarkModeToggle from '../../theme/DarkModeToggle';
import {useTheme} from '../../theme/ThemeContext';
import {AuthContext} from '../../contexts/auth';

export default function SignUp() {
  const {signUp, loadingAuth} = useContext(AuthContext);
  const {theme} = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
    if (name === '' || email === '' || password === '') return;
    signUp(email, password, name);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
          <Input
            placeholder="Seu nome"
            value={name}
            onChangeText={text => setName(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Seu email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Sua senha"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButtom onPress={handleSignUp}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#005732" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButtom>
      </Container>
      <DarkModeToggle />
    </Background>
  );
}
