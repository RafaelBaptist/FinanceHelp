// src/pages/SignIn/styles.js
import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: ${({theme}) => theme.colors.inputBackground};
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: ${({theme}) => theme.colors.inputText};
  margin-bottom: 15px;
`;

export const SubmitButtom = styled.TouchableOpacity`
  border-radius: 8px;
  width: 90%;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.buttonBackground};
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.buttonText};
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: ${({theme}) => theme.colors.linkText};
`;
