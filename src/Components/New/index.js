import React, {useState} from 'react';
import {Background, Input, SubmiteButton, SubmitText} from './styles';
import Header from '../Header';
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {useTheme} from '../../theme/ThemeContext';
import RegisterTypes from '../RegisterTypes';
import api from '../../services/api';
import {format} from 'date-fns';
import {useNavigation} from '@react-navigation/native';

export default function New() {
  const navigation = useNavigation();
  const {theme} = useTheme();

  const [labelInput, setLabelInput] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [type, setType] = useState('receita');

  function handleSubmit() {
    Keyboard.dismiss();

    if (isNaN(parseFloat(valueInput)) || type === null) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${type}  - Valor: ${parseFloat(valueInput)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd(),
        },
      ],
    );
  }

  async function handleAdd() {
    Keyboard.dismiss();
    await api.post('/receive', {
      description: labelInput,
      value: Number(valueInput),
      type: type,
      date: format(new Date(), 'dd/MM/yyyy'),
    });

    setLabelInput('');
    setValueInput('');
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header title="Novo registro" />

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
          <RegisterTypes type={type} sendTypeChanged={item => setType(item)} />

          <SubmiteButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmiteButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
