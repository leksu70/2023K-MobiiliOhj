import { Button, FlatList, StyleSheet, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenStack from './W3-Tunnilla/HomeScreenStack';
import SettingsScreenStack from './W3-Tunnilla/SettingsScreenStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);

  const getRepositories = () => { // ASYNC
    
    //const url = 'https://api.github.com/search/repositories?q=' + keyword;
    //fetch(url)
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    // synnyttää promise-olion. Sille on nyt annettu nimi response.
    .then( response => response.json() ) // Myös ASYNC eli promise. Parametri voi olla vaikka res
    .then( data => setRepositories(data.items) ) // response body eli data, joka on js-olio.
    //.catch( error => Alert.alert('Error', error) ); // promise ei täyty eli tulee virhe-olio.
    // console.log( data.items[0] );
  };

  const ItemSeparator = () => {
    <View
      style={{ 
        height: 1,
        width: '100%',
        backgroundColor: "gray" }}
    />
  };

  return (
    <View>
      <StatusBar hidden={ true } />
      <FlatList
        keyExtractor={ item => item.id }
        data={ repositories }
        renderItem={ ({ item }) => 
          <View>
            <Text style={{ fontWeight: 'bold'}}>{item.full_name}</Text>
            <Text>{ item.description }</Text>
          </View> }
        ItemSeparatorComponent={ ItemSeparator }
      />
      
      <TextInput style={{ fontSize: 18, width: 300}} 
        placeholder='keyword'
        onChangeText={ text => setKeyword(text) }
        value={ keyword } />
      <Button title='Find' onPress={ getRepositories } />
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
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 2,
  },
});

const styleButtons = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 50,
  },
});

const styleHistory = StyleSheet.create({
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