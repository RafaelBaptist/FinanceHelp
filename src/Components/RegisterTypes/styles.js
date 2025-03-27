import styled from 'styled-components/native';
import {useTheme} from '../../theme/ThemeContext';

export const RegisterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
  background-color: ${({theme, checked}) =>
    checked
      ? theme.colors.buttonBackgroundReceive
      : theme.colors.buttonBackgroundReceiveInactive};
  /* background-color: ${({theme}) => theme.colors.buttonBackgroundReceive}; */
  width: 47%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 45px;
  border-radius: 4px;
  border-width: 1.5px;
  border-color: ${props => (props.checked ? '#3b3dbf' : 'transparent')};
  margin-bottom: 14px;
`;

export const RegisterLabel = styled.Text`
  color: ${({theme}) => theme.colors.inputText};
  margin-left: 8px;
  font-size: 17px;
`;
