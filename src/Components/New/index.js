import React, {useState} from 'react';
import {Background, Input, SubmiteButton, SubmitText} from './styles';
import Header from '../Header';
import {Keyboard, SafeAreaView, TouchableWithoutFeedback} from 'react-native';
import {useTheme} from '../../theme/ThemeContext';

export default function New() {
  const {theme} = useTheme();

  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState('receita');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header title="Registrando" />

        <SafeAreaView style={{marginTop: 14, alignItems: 'center'}}>
          <Input
            placeholder="Descrição deste registro"
            placeholderTextColor={theme.colors.inputText}
            value={labelInput}
            onChangeText={text => setLabelInput(text)}
          />
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            placeholderTextColor={theme.colors.inputText}
            value={valueInput}
            onChangeText={text => setValueInput(text)}
          />
          <SubmiteButton>
            <SubmitText>Registrar</SubmitText>
          </SubmiteButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
