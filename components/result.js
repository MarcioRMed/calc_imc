import React from 'react';
import {StyleSheet, View, Text } from 'react-native';


export default props=>{
  return (
 
  <View style={styles.view} >
  <Text style={styles.text} >Resultado: {props.resultado} </Text>
</View>
 
  );
}

const styles = StyleSheet.create({
  view: {
    marginBottom: 20,
    justifyContent:'center',
    alignItems: 'center',

  },
  text:{
    color:'#fff',
 
    backgroundColor: "#048",
    paddingVertical:10,
    paddingLeft:10,
    width:'50%',
  },
})