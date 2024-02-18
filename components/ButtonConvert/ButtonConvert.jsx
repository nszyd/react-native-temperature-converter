
import { TouchableOpacity, Text } from 'react-native';
import { s } from './ButtonConvert.style.js';


export function ButtonConvert({unit, onPress}){
    return(
        <TouchableOpacity onPress={onPress} style={s.button}>
            <Text style={s.buttontxt}>Convert To {unit} </Text>
        </TouchableOpacity>
    )
}