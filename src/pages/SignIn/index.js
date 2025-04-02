import React, {useState, useContext} from 'react';
import {Platform, ActivityIndicator} from 'react-native';
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
import {AuthContext} from '../../contexts/auth';
export default function SignIn() {
  const {theme} = useTheme();
  const navigation = useNavigation();
  const {signIn, loadingAuth} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleLogin() {
    signIn(email, password);
  }
  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={require('../../assets/Logo.png')} />
        <AreaInput>
          <Input
            placeholder="Digite o seu email"
            value={email}
            onChangeText={text => setEmail(text)}
            placeholderTextColor={theme.placeholderColor}
            style={{color: theme.textColor}}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Digite a sua senha"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            placeholderTextColor={theme.placeholderColor}
            style={{color: theme.textColor}}
          />
        </AreaInput>
        <SubmitButtom activeOpacity={0.7} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#005732" />
          ) : (
            <SubmitText>Entrar</SubmitText>
          )}
        </SubmitButtom>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Registrar-se</LinkText>
        </Link>
      </Container>
      <DarkModeToggle />
    </Background>
  );
}
