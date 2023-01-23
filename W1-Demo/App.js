import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const buttonPressed = (e) => {
    Alert.alert('Nappulaa painettu!');
  };
  
  return (
    <View style={style1.container}>
      <Text>1:36:00</Text>
      <Button title="Nappula1" onPress={ buttonPressed } />
      <Button title="Nappula2" onPress={ buttonPressed } />
      <Button title="Nappula3" onPress={ buttonPressed } />
      <StatusBar style="auto" />
    </View>
  );
}


const style1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
