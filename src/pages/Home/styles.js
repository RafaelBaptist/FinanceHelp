import styled from 'styled-components/native';
import {useTheme} from '../../theme/themes';

export const Background = styled.SafeAreaView`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;
