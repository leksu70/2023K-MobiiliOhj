// Leo: W2-T3-Laskin_historialla-App

// Jatka laskin tehtävää (Tehtävä 3).
// Lisää sovellukseen FlatList komponentti, jossa näytetään kaikki sovelluksella tehdyt laskutoimitukset. 

// Huom! Tietoa ei vielä tallenneta pysyvästi vaan historia nollautuu aina kun sovellus käynnistetään uudelleen.

// import { template } from '@babel/core';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [vala, setVala] = useState('');
  const [valb, setValb] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const initialFocus = useRef(null);

  const addHistory = (a, b, c, d) => {
    setHistory( [...history, { vala: a, valb: b, oper: c, res: d}] );
  };

  const buttonPlusPressed = () => {
    calculate = vala + valb;
    operator = '+';
    setResult( calculate );
    addHistory(vala, valb, operator, calculate);
    initialFocus.current.focus();
    setVala('');
    setValb('');
  };

  const buttonMinusPressed = () => {
    calculate = vala - valb;
    operator = '-';
    setResult( calculate );
    addHistory(vala, valb, operator, calculate);
    initialFocus.current.focus();
    setVala('');
    setValb('');
  };
  
  return (
    <View style={ styles.container }>
      
      <View style={ styles.container }>
        <Text>Result: { result }</Text>
        <TextInput ref={ initialFocus } style={ styles.input } keyboardType='number-pad' 
          onChangeText={ vala => setVala( Number(vala) ) } value={ vala } />
        <TextInput style={ styles.input } keyboardType='number-pad' 
          onChangeText={ valb => setValb( Number(valb) ) } value={ valb } />
        <Text></Text>
      </View>

      <View style={ styleButtons.container }>
        <Button onPress={ buttonPlusPressed } title="+" />
        <Text>     </Text>
        <Button onPress={ buttonMinusPressed } title="-" />
      </View>

      <View style={ styleHistory.container }>
        <Text></Text>
        <Text style={ styleHistory.title }>History</Text>
        <FlatList 
          data={history}
          renderItem={({ item }) =>
            <Text style={ styleHistory.text }>{item.vala} {item.oper} {item.valb} = {item.res}</Text>  
          }
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    width:200, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 2,
  },
});

const styleButtons = StyleSheet.create( {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

const styleHistory = StyleSheet.create( {
  container: {
    flex: 6,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});