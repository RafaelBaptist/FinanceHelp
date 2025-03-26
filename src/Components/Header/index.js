import React from 'react';
import {Container, Title, ButtonMenu} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Header({title}) {
  const navigation = useNavigation();
  return (
    <Container>
      <ButtonMenu onPress={() => navigation.openDrawer()} />

      {title && <Title>{title}</Title>}
    </Container>
  );
}
