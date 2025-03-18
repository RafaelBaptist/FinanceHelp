import React from 'react';
import {View, Text, Platform} from 'react-native';
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

export default function SignUn() {
  const {theme} = useTheme();
  xto;

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
          <Input placeholder="Seu nome" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Seu email" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua senha" />
        </AreaInput>

        <SubmitButtom>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButtom>
      </Container>
      <DarkModeToggle />
    </Background>
  );
}
