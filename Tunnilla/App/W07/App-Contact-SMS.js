import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as SMS from 'expo-sms';

export default function App() {
  const [currentContact, setCurrentContact] = useState({});

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers]
      })

      if (data.length > 0) {
        setCurrentContact(data[0]);
        console.log(data[0]);
      }
    }
  }

  const sendSms = async () => {
    const isSMSAvailable = await SMS.isAvailableAsync();

    if (isSMSAvailable && currentContact && currentContact.phoneNumbers && currentContact.phoneNumbers[0].number) {
      const { result } = await SMS.sendSMSAsync(
        [currentContact.phoneNumbers[0].number],
        `Hello ${currentContact.name}`
      );
    }
  }

  return (

    <View style={styles.container} >
      <Text>Current contact: {currentContact.name}</Text>
      <Button title="Get contact" onPress={getContacts} />
      <Button title="Send SMS" onPress={sendSms} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});