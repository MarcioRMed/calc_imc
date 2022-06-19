import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


export default function resultado(){
  return (
    
    <View style={styles.view} >
    <Text style={styles.text} >Resultado: {resultadoImc}</Text>
  </View>
        
  );
}

const styles = StyleSheet.create({ 
  view: {
    marginBottom: 20,
  },
  text:{
    color:'#000',
    fontWeight:'600',
  },

})