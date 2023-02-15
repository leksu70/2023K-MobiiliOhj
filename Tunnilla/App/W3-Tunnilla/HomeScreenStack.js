
import Rect from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreenStack({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.text}>This is HomeScreenStack - HELLO.</Text>

            </View>
            <View style={styles.button}>
                <Button 
                    title='Settings'
                    onPress={() => navigation.navigate('Settings', { user: 'Leo' })}
                />
            </View>
        </View>
    );
};

//  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        borderColor: 'green',
        borderWidth: 2,
    },
    button: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 50,
        borderColor: 'green',
        borderWidth: 2,
    },
    input: {
        width: 200,
        margin: 2,
    },
    text: {
        color: 'red',
    },
});