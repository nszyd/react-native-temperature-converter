
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { s } from './App.style.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import hotBackground from './assets/hot.png';
import coldBackground from './assets/cold.png';
import { Input } from './components/Input/Input.jsx';
import { useEffect, useState } from 'react';
import { DisplayTemperature } from './components/DisplayTemperature/DisplayTemperature.jsx';
import { UNITS, getOppositeUnit, convertTemperatureTo, isIceTemperature } from './utils/temperature.js';
import { ButtonConvert } from './components/ButtonConvert/ButtonConvert.jsx';
export default function App() {

  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentBackground, setCurrentBackground] = useState(coldBackground);
  const oppositeUnit = getOppositeUnit(currentUnit);

  useEffect(() => {
    if(isIceTemperature(inputValue, currentUnit)){
      setCurrentBackground(coldBackground);
    } else {
      setCurrentBackground(hotBackground);
    }
  }, [inputValue, currentUnit]);


  function getConvertedTemperature(){
    if(isNaN(inputValue)){
      return "";
    }else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }




  return (
  <ImageBackground  style={s.backgroundImg} source={currentBackground}>
  <SafeAreaProvider>
    <SafeAreaView style={s.root}>
      <View style={s.workspace}>
        <DisplayTemperature unit={oppositeUnit} temperature={getConvertedTemperature()}/>
        <Input unit={currentUnit} onChange={setInputValue} defaultValue={0}/>
        <ButtonConvert unit={currentUnit} onPress={() => {
          setCurrentUnit(oppositeUnit);
        }}/>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
 </ImageBackground>
  );
}


