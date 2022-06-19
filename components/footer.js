import React from 'react';
import {StyleSheet, View, Text } from 'react-native';


export default function footer(){
  return (

    <View >
      <Text style={styles.desenvolvedor}>Márcio Ramos Medeiros - 2022</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  desenvolvedor:{
    padding:10,
    color:'#000',
    fontWeight:'600',
    textAlign:'center',
  },

})