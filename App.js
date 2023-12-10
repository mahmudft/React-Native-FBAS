import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Switch, Image } from 'react-native';
import Home from './screens/Home.js';
import Button from './components/Button.js';
import { useState } from 'react';
import RInput from './components/Input.js';
import ScrollableContainer from './components/ScrollableContainer.js';
import ProductList from './components/products/ProductList.js';
import Contact from './components/Contact/Contact.js';

export default function App() {
  const [counter, setCounter] = useState(0)
  const [email, setEmail] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app! {counter}</Text>
      <Button text="Signup" color={"black"} handlePress={() =>setCounter((prev) => prev +1)}/>
      <RInput value={email} handleInput={setEmail}/>
      <StatusBar
        // animated={true}
        backgroundColor="green"
        hidden={false}
      />
      <Image
      style={{backgroundColor: "white",width: 144, height: 144}}
      source={require('./assets/slack.png')}
      />
        <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? 'green' : 'gray'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled((prev) => !prev)}
        value={isEnabled}
      />
      <Home/>
      <StatusBar style="auto" />
      <ScrollableContainer/> */}
      <Contact/>
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
