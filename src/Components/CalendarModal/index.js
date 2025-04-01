import React, {useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {
  Container,
  ButtonFilterText,
  ModalContent,
  ButtonFilter,
} from './styles';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {ptBR} from './localeCalendar';
import {useTheme} from '../../theme/ThemeContext';
LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';
export default function CalendarModal({setVisible, handleFilter}) {
  const [dateNow, setDateNow] = useState(new Date());
  const [markDates, setMarkDates] = useState({});
  const {theme} = useTheme();
  function handleOnDayPress(date) {
    // console.log(date.dateString);

    setDateNow(new Date(date.dateString));
    let markedDay = {};

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#56ab48',
      textColor: '#fff',
    };

    setMarkDates(markedDay);
  }
  function handleFilterDate() {
    handleFilter(dateNow);
    setVisible();
  }
  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{flex: 1}}> </View>
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markDates}
          enableSwipeMonths={true}
          theme={{
            backgroundColor: theme.colors.background,
            calendarBackground: theme.colors.background,
            textSectionTitleColor: theme.colors.inputText,
            dayTextColor: theme.colors.inputText,
            selectedDayBackgroundColor: '#56ab48',
            todayTextColor: '#ff0000',
            arrowColor: '#56ab48',
            selectedDayTextColor: '#fff',
            monthTextColor: '#40ff1e',
          }}
        />
        <ButtonFilter onPress={handleFilterDate}>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  );
}
