import { View, TextInput, Text } from "react-native";
import { s } from "./Input.style.js";

export function Input({defaultValue, onChange, unit}){

    return (
        <View style={s.root}>
        <TextInput  style={s.input} maxLength={4} defaultValue={defaultValue.toString()}
          onChangeText={ (text) => {
            onChange(text);
          }} placeholder="Type your temperature"/> 
        <Text style={s.unit}>{unit}</Text>
        </View>
    )
}