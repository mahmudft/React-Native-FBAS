import { Text, View, StyleSheet, TextInput,Button } from "react-native";
import { useState, useEffect } from "react";

export default function Home({navigation}) {
    const [state, setState] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Home User Screen</Text>
            <TextInput value={state} onChangeText={setState} style={styles.input}/>
            <Button title="Go Profile" onPress={() => navigation.navigate("Profile")}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderColor: 'green',
        backgroundColor: "lightgray",
        width: '100%',
        height: '100%'
    },
    textStyle: {
        color: "purple",
        fontSize: 20
    },
    buttonStyle: {
        color: "green"
    },
    input:{
        width: "80%",
        marginHorizontal: 5,
        height: 50,
        borderColor: "black",
        borderWidth: 1
    }
})