import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
export default function Profile({navigation}){
    const [state, setState] = useState(0)

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Profile User Screen</Text>
            <Button title="Go About" onPress={() => navigation.navigate("About")}/>
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