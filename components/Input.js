import { StyleSheet,Text, TextInput, View } from "react-native";

export default function RInput({value,handleInput}){
    function showChange(el){
        console.log(el.nativeEvent.target)
    }
    return (<View style={{width: "80%",padding: 12,display: "flex",flexDirection:'column', gap: 10}}>
        <Text>Username</Text>
        <TextInput value={value}
        placeholder="username" 
        style={styles.input} 
        onChangeText={handleInput} 
        onBlur={() => console.log("blur")} 
        onChange={showChange}/>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      width: "80%",
      borderWidth: 1,
      padding: 10,
    },
  });
  