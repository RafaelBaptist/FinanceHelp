import React, {useContext, useState} from 'react';
import {Platform, Alert} from 'react-native';
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
  const {signUp} = useContext(AuthContext);
  const {theme} = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp() {
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
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButtom>
      </Container>
      <DarkModeToggle />
    </Background>
  );
}
