// Leo: W1-T2-Numeron_arvaus

// Kaksi TextInput komponenttia, johon voi syöttää numeroita.
// Käytä niissä numero näppäimistöä estämään tekstin syöttö.

// Kun '+' painiketta painetaan lasketaan syötettyjen numeroiden summa ja 
// tulos näytetään sovelluksessa. Kun '-' painiketta painetaan lasketaan syötettyjen
// numeroiden erotus ja tulos näytetään sovelluksessa.

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

var guesses = 0;

export default function App() {

  const [guess, setGuess] = useState('');
  const [guessed, setGuessed] = useState('');
  const [response, setResponse] = useState('Guess a number between 1-100');
 
  const setDefaults = () => {
    setResponse('Guess a number between 1-100');
    setGuess( Math.floor(Math.random() * 100) + 1 );
    setGuessed('');
    guesses = 0;
  };

  const buttonGuessed = () => {
    guesses += 1;

    if (guessed > guess) {
      setGuessed()
      setResponse( 'Your guess ' + guessed + ' is too high' );
    }
    if (guessed < guess) {
      setResponse('Your guess ' + guessed + ' is too low');
    }
    if (guessed == guess) {
      Alert.alert('You gessed the number in ' + guesses + ' guesses');
      //useEffect( () => { setResponse('Guess a number between 1-100') }, [] ); // Suoritetaan vain kerran.
      setDefaults();
    }
  };

  useEffect( () => setDefaults(), []);
//  setDefaults();

  return (
    <View style={ styles.container }>
      <View style={ styles.container }>
      <Text>Number to be guessed is { guess }</Text>
        <Text>{ response }</Text>
        <TextInput  style={ styles.input } keyboardType='number-pad' 
                    onChangeText={ guessed => setGuessed( parseInt(guessed)) } value={ guessed } />
      <Text></Text>
      </View>

      <View style={ styleButtons.container }>
        <Button onPress={ buttonGuessed } title="MAKE GUESS" />
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
