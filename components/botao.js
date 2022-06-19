import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default (props) => {
  return (
    <View style={styles.view}>
      <TouchableHighlight
        style={styles.btnCalcular}
        // onPress={()=> calcularImc()}
        onPress={() => props.aoClicar()}
      >
        <Text style={styles.btnTexto}>Calcular</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginBottom: 20,
    width:'100%',
    justifyContent:'center',
    alignItems: 'center',
  },

  btnCalcular: {
    backgroundColor: "#048",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 20,  
 
 
  },




  
  btnTexto: {
    fontSize: 15,
    textTransform: "uppercase",
    color: "#fff",
    fontWeight:'600',
  
   
  
  },




});
