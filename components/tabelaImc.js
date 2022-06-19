import React from 'react';
import {StyleSheet, View, Image, } from 'react-native';

const bg1 = require('../assets/tabela_imc.jpg') 

export default function tabelaImc(){
  return (

    <View style={styles.tabelaContainer}> 
    <Image 
      source={bg1}
      resizeMode="contain" 
      style={styles.tabela}>
         
    </Image>
    </View>
  );
}

const styles = StyleSheet.create({

  tabelaContainer:{
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  tabela:{
    width:'100%',
    height:250,
    resizeMode:'contain',
    margin:10,

  }

})