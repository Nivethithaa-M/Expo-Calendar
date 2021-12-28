import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Alert,
  Linking,
  Button
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import ViewModal from './modal';

const App = () => {
  const [mark, setMark] = useState({})
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState("")
  const OpenWEB = () => {
    Linking.openURL("https://www.google.com/");
  };
  const OpenMail = () => {
    Linking.openURL("https://mail.google.com/");
  };
  return (
    <ScrollView style={styles.container}>

      <Calendar
        style={styles.calendar}
        allowRangeSelection={true}
        displayLoadingIndicator
        markingType={'period'}
        theme={{
          calendarBackground: 'white',
          textSectionTitleColor: 'black',
          dayTextColor: 'red',
          todayTextColor: 'black',
          selectedDayTextColor: 'black',
          monthTextColor: 'black',
          arrowColor: 'black',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }
          }
        }}
        onDayLongPress={e => {
          setDate(e.dateString)
          setModalVisible(true)
        }}
        enableSwipeMonths={true}
        onDayPress={e => {
          let message = mark[e.dateString] ? mark[e.dateString]?.msg : "No remainder"
          return (Alert.alert('Remainder', message))
        }}
        markedDates={mark}
        hideArrows={false}
      />
      <Button onPress={OpenWEB} title="Open web" color="black"/>
      <Button onPress={OpenMail} title="Open mail" color="red" />

      <ViewModal modalVisible={modalVisible} setModalVisible={setModalVisible} date={date} mark={mark} setMark={setMark} />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    marginTop: '50%',
    paddingTop: 5,
    marginBottom:'2%',
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  container: {
    flex: 1,
    backgroundColor:'#2c3539',
  }
});
export default App;