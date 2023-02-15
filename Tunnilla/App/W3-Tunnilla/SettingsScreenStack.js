import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreenStack( { route, navigation }) {
    const { user } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome { user }. This is SettingsScreen.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 20,
    },
    input: {
      width: 200,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 2,
    },
    text: {
        color: 'green',
    },
  });