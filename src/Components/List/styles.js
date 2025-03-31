import styled from 'styled-components';
import {useTheme} from '../../theme/themes';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.backgroundReceive};
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 10px;
`;

export const Type = styled.View`
  flex-direction: row;
`;
export const TypeText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-style: italic;
`;

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${props =>
    props.tipo === 'despesa' ? ' #DC143C' : '#049301'};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  margin-bottom: 2px;
`;
export const ValorText = styled.Text`
  color: ${({theme}) => theme.colors.inputText};
`;
