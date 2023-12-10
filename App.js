import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Switch, Image } from 'react-native';
import Home from './screens/Home.js';
import Button from './components/Button.js';
import { useState } from 'react';
import RInput from './components/Input.js';

export default function App() {
  const [counter, setCounter] = useState(0)
  const [email, setEmail] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! {counter}</Text>
      <Button text="Signup" color={"black"} handlePress={() =>setCounter((prev) => prev +1)}/>
      <RInput value={email} handleInput={setEmail}/>
      <StatusBar
        // animated={true}
        backgroundColor="green"
        hidden={false}
      />
      <Image
      style={{backgroundColor: "white",width: 144, height: 144}}
      // source={{
      //   uri: "https://assets-global.website-files.com/621c8d7ad9e04933c4e51ffb/622b292dc8158c9ddd048da6_clearspace_2%402x.png"
      // }}
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
