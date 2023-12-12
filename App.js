import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch, Image } from 'react-native';
import Home from './screens/Home.js';
import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';
import { useState } from 'react';
import RInput from './components/Input.js';
import { PaperProvider } from 'react-native-paper';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './screens/About.js';
import Profile from './screens/Profile.js';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// const Stack = createNativeStackNavigator()
export default function App() {
  const [counter, setCounter] = useState(0)
  const [email, setEmail] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  return (
    // <PaperProvider>
      // <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home} options={{
            title:"Android Home"
          }}/>
          <Drawer.Screen name='About' component={About}/>
          <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
      // </NavigationContainer>
    // </PaperProvider>
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
