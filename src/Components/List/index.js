import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, Alert} from 'react-native';
import {Container, TypeText, Type, IconView, ValorText} from './styles';

export default function HistoryList({data, deLeteItem}) {
  function handleDeleteItem() {
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar esse registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },

        {
          text: 'Continuar',
          onPress: () => deLeteItem(data.id),
        },
      ],
    );
  }
  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Type>
          <IconView tipo={data.type}>
            <Image
              source={
                data.type === 'despesa'
                  ? require('../../assets/icons8-down-32.png')
                  : require('../../assets/icons8-up-32.png')
              }
              style={styles.icon}
            />

            <TypeText>{data.type}</TypeText>
          </IconView>
        </Type>
        <ValorText>R$ {data.value}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});
