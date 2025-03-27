import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {RegisterContainer, RegisterTypeButton, RegisterLabel} from './styles';

export default function RegisterTypes({type, sendTypeChanged = () => {}}) {
  const [typeChecked, setTypeChecked] = useState(type);

  function changeType(name) {
    setTypeChecked(name);
    sendTypeChanged(name);
  }

  return (
    <RegisterContainer>
      <RegisterTypeButton
        checked={typeChecked === 'receita'}
        onPress={() => changeType('receita')}>
        <Image
          source={require('../../assets/icons8-arrow-up-100.png')}
          style={styles.icon}
        />
        <RegisterLabel>Receita</RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton
        checked={typeChecked === 'despesa'}
        onPress={() => changeType('despesa')}>
        <Image
          source={require('../../assets/icons8-down-arrow-100.png')}
          style={styles.icon}
        />
        <RegisterLabel>Despesa</RegisterLabel>
      </RegisterTypeButton>
    </RegisterContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
