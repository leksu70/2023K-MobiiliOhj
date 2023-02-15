// Leo: W3-Tunnilla-StackNavigation-App
// W3-Tunnilla/

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenStack from './W3-Tunnilla/HomeScreenStack';
import SettingsScreenStack from './W3-Tunnilla/SettingsScreenStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={ HomeScreenStack } />
        <Stack.Screen name='Settings' component={ SettingsScreenStack } />
      </Stack.Navigator>
    </NavigationContainer>
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