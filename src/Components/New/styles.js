import styled from 'styled-components';
import {useTheme} from '../../theme/ThemeContext';

export const Background = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  background-color: ${({theme}) => theme.colors.inputBackground};
  font-size: 17px;
  padding: 0 8px;
  margin-bottom: 14px;
  border-radius: 4px;
`;
export const SubmiteButton = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  border-radius: 4px;
`;
export const SubmitText = styled.Text`
  color: #fff;
  font-size: 21px;
  font-weight: bold;
`;
