import styled from 'styled-components';

export const Background = styled.View`
  flex: 1;
  background-color: #f0f4ff;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  /* background-color: #b1d6ee; */
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
  margin-bottom: 15px;
`;

export const SubmitButtom = styled.TouchableOpacity`
  border-radius: 8px;
  width: 90%;
  border-radius: 8px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: #56ab48;
  margin-top: 10px;
`;
export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;
export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const LinkText = styled.Text`
  color: #005732;
`;
