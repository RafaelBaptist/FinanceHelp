import styled from 'styled-components/native';
import {useTheme} from '../../theme/themes';

export const Background = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;

export const Area = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  margin-top: 24px;

  flex-direction: row;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 14px;
  align-items: baseline;
`;

export const Title = styled.Text`
  margin-left: 4px;
  color: ${({theme}) => theme.colors.inputText};
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 18px;
`;

export const List = styled.FlatList`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;
