import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34, 34, 34, 0.6);
`;

export const ButtonFilterText = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
`;
export const ButtonFilter = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #56ab48;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  flex: 2;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: 14px;
`;
