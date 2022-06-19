import React from 'react';
import {StyleSheet, View, Text,  TouchableHighlight, } from 'react-native';


export default function botao(){
  return (
    
    <View style={styles.view}>
    <TouchableHighlight
    style={styles.btnCalcular}
    onPress={()=> calcularImc()}
    >
      <Text style={styles.btnTexto}>Calcular IMC</Text>
    </TouchableHighlight>
  </View>
        
  );
}

const styles = StyleSheet.create({
 
  view: {
    marginBottom: 20,
  },
  btnCalcular:{
    backgroundColor:'#048',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:20,
  },
  btnTexto:{
    fontSize:15,
    textTransform:'uppercase',
    color:'#fff',
  },

})