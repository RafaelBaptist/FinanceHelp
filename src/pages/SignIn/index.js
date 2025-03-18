import React from 'react';
import {Platform} from 'react-native';
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButtom,
  SubmitText,
  Link,
  LinkText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import DarkModeToggle from '../../theme/DarkModeToggle';
import {useTheme} from '../../theme/ThemeContext';

export default function SignIn() {
  const {theme} = useTheme();
  const navigation = useNavigation();

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../../assets/Logo.png')} />
        <AreaInput>
          <Input placeholder="Digite o seu email" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Digite a sua senha" />
        </AreaInput>
        <SubmitButtom activeOpacity={0.7}>
          <SubmitText>Entrar</SubmitText>
        </SubmitButtom>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Registrar-se</LinkText>
        </Link>
      </Container>
      <DarkModeToggle />
    </Background>
  );
}
