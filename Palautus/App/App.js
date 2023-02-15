// Leo: W2-T4-Ostoslista-App

// Luo yksinkertainen ostoslista sovellus.

// Käyttäjä syöttää ostoksen tekstikenttään ja kun painetaan 'Add'- painiketta,
// lisätään ostos sovelluksen lista komponenttiin (FlatList). Kun käyttäjä
// painaa 'Clear'- painketta, lista tyhjennetään.

// import { template } from '@babel/core';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [item, setItem] = useState('');
  const [cart, setCart] = useState([]);

  const initialFocus = useRef(null);

  const addCart = (a) => {
    setCart( [...cart, { item: a}] );
  };

  const buttonAddPressed = () => {
    addCart(item);
    initialFocus.current.focus();
    setItem('');
  };

  const buttonClearPressed = () => {
    setCart([]);
    initialFocus.current.focus();
    setItem('');
  };
  
  return (
    <View style={ styles.container }>
      
      <View style={ styles.container }>
        <TextInput ref={ initialFocus } style={ styles.input } inputMode='text' 
          onChangeText={ item => setItem( item ) } value={ item } />
      </View>

      <View style={ styleButtons.container }>
        <Button onPress={ buttonAddPressed } title="ADD" />
        <Button onPress={ buttonClearPressed } title="CLEAR" />
      </View>

      <View style={ styleHistory.container }>
        
        <Text style={ styleHistory.title }>Shopping List</Text>
        <FlatList 
          data={cart}
          renderItem={({ item }) =>
            <Text style={ styleHistory.text }>{item.item}</Text>  
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
    paddingTop: 50,
  },
});

const styleHistory = StyleSheet.create( {
  container: {
    flex: 6,
    alignItems: 'center',
  },
  text: {
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    color: 'blue',
    paddingTop: 25,
  },
});