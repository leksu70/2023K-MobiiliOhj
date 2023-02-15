// Leo: W3-Tunnilla-TabNavigation-Icons-App
// W3-Tunnilla/

// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './W3-Tunnilla/HomeScreen';
import SettingsScreen from './W3-Tunnilla/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'md-home';
      } else if (route.name === 'Settings') {
        iconName = 'md-settings';
        if (focused) {
          color = 'red';
        };
      };

      return <Ionicons name={ iconName } size={ size } color={ color } />;
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={ screenOptions }>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
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