import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useState, useEffect } from "react";
export default function Home(){
    const [state, setState] = useState(0)

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Home User Screen</Text>
            <Text style={styles.textStyle}>{state}</Text>
            <TextInput keyboardType="numeric"/>
            <Button onPress={() => setState((previousvalue) => previousvalue+1)} color="green" style={styles.buttonStyle} title="Select"/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderColor: 'green',
        backgroundColor: "lightgray",
        width: '100%',
        height: 'auto'
    },
    textStyle: {
        color: "purple",
        fontSize: 20
    },
    buttonStyle: {
        color: "green"
    }
})