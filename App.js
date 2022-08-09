import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, StatusBar} from "react-native";
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const App = ()=>{
  const [randomColor, setRandomColor] = useState("rgb(32, 0, 126)")
  
  const changeBG = ()=>{
    let color = "rgb("+
    Math.floor(Math.random() * 256) +
      "," + 
      Math.floor(Math.random() * 256) + 
      "," + 
      Math.floor(Math.random() * 256) +
      ")";

      setRandomColor(color);
  };

  const resetBG = ()=>{
    setRandomColor("#ffffff");
  }

  return(
    <>
    {/* <View style={{backgroundColor:"rgb(32, 0, 126)"}}> */}
    {/* <View style={styles.container}> */}
    <StatusBar backgroundColor={randomColor}/>
    <View style={[styles.container, {backgroundColor:randomColor}]}>
    <TouchableOpacity onPress={changeBG}>
      <Text style={styles.text}>Tap Me</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={resetBG}>
      <Text style={styles.textReset}>Reset</Text>
    </TouchableOpacity>
    </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 15,
    textTransform: "uppercase",
  },
  textReset:{
    marginTop: 20,
    fontSize: 30,
    paddingVertical:10,
    paddingHorizontal:40,
    borderRadius: 15,
    color: "white",
    backgroundColor: "pink",
  }
})