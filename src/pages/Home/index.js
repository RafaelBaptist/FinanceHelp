import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {Background, ListBalance, Area, Title, List} from './styles';
import DarkModeToggle from '../../theme/DarkModeToggle';
import Header from '../../Components/Header';
import api from '../../services/api';
import {format} from 'date-fns';
import {useIsFocused} from '@react-navigation/native';
import BalanceItem from '../../Components/BalanceItem';
import HistoryList from '../../Components/List';

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);

  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let dateFormated = format(dateMovements, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        },
      });
      if (isActive) {
        setMovements(receives.data);
        setListBalance(balance.data);
      }
    }
    getMovements();
    return () => (isActive = false);
  }, [isFocused]);

  return (
    <Background>
      <Header title="Minhas movimentações" />
      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIindicator={false}
        keyExtractor={item => item.tag}
        renderItem={({item}) => <BalanceItem data={item} />}
      />
      <Area>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons8-agenda-50.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
      </Area>
      <List
        data={movements}
        keyExtractor={item => item.id}
        renderItem={({item}) => <HistoryList data={item} />}
        showsHorizontalScrollIindicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />

      <DarkModeToggle />
    </Background>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 10,
    width: 25,
    height: 25,
    marginRight: 4,
  },
});
