import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ff0000;
`;

export const MainTitle = styled.Text`
  color: ${props => props.cor};
  font-size: 25px;
`;
