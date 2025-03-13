import React from 'react';
import {View, Text} from 'react-native';
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButtom,
  SubmitText,
} from '../SignIn/styles';
import {Platform} from 'react-native';

export default function SignUn() {
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
    </Background>
  );
}
