import React from "react";

import { StyleSheet, Text, View, TextInput } from "react-native";


export default props=>{
  return ( 
  
    <View style={styles.view}>
    <Text style={styles.text}>Informe seu Peso</Text>
    <TextInput
      style={styles.textInput}
      autoFocus={true}
      keyboardType={"numeric"}

      // onChangeText={(text) => setPeso(text)}
      onChangeText={(text) => props.Peso(text)}
      

      //funcionando 
      // onChangeText={setPeso}
      // value={peso}
      
      placeholder="ex.: 85"
      placeholderTextColor={"#999"}
    ></TextInput>
  </View> 
 
 );
};

// --- Estilos ------------------------------------
const styles = StyleSheet.create({

  text: {
    color: "#000",
    fontWeight: "600",
  },

  textInput: {
    width: "50%",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
  },

  view: {
    marginBottom: 20,
    width:'100%',
    // flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
