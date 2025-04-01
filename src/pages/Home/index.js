import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
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
import CalendarModal from '../../Components/CalendarModal';
export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState([]);

  const [dateMovements, setDateMovements] = useState(new Date());

  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let date = new Date(dateMovements);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');
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
  }, [isFocused, dateMovements]);
  async function handleDelete(id) {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id,
        },
      });
      setDateMovements(new Date());
    } catch (err) {
      console.log(err);
    }
  }

  function filterDateMovements(dateSelected) {
    setDateMovements(dateSelected);
  }
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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
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
        renderItem={({item}) => (
          <HistoryList data={item} deLeteItem={handleDelete} />
        )}
        showsHorizontalScrollIindicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>

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
