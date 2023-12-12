import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useState, useEffect } from "react";
export default function About({navigation}){
    const [state, setState] = useState(0)

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>About User Screen</Text>
            <Button title="Go Profile" onPress={() => navigation.navigate("Home")}/>
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