import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({text, color, handlePress=() => {}}){
    return(
        <TouchableOpacity style={{
            ...styles.button,
            backgroundColor: color
        } } onPress={handlePress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        width: "50%",
        height: 'auto',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 8,
        alignItems: 'center',
        display: 'flex',
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 20
    }
})