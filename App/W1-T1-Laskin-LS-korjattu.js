// Leo: W1-T1-Laskin

// Kaksi TextInput komponenttia, johon voi syöttää numeroita.
// Käytä niissä numero näppäimistöä estämään tekstin syöttö.

// Kun '+' painiketta painetaan lasketaan syötettyjen numeroiden summa ja 
// tulos näytetään sovelluksessa. Kun '-' painiketta painetaan lasketaan syötettyjen
// numeroiden erotus ja tulos näytetään sovelluksessa.

import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [vala, setVala] = useState('');
  const [valb, setValb] = useState('');
  const [result, setResult] = useState('');

  const initialFocus = useRef(null);

  const buttonPlusPressed = () => {
    setResult( vala + valb );
    initialFocus.current.focus();
    setVala('')
    setValb('');
  };

  const buttonMinusPressed = () => {
    setResult( vala - valb );
    initialFocus.current.focus();
    setVala('')
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

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  input: {
    width:200, 
    borderColor: 'gray', 
    borderWidth: 1,
  },
});

const styleButtons = StyleSheet.create( {
  container: {
    flex: 1,
    flexDirection: 'row',
    
    alignItems: 'flex-start',
  
  },
  
});
