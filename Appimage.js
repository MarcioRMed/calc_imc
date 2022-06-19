import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


const bg1 = require('./assets/tabela_imc.jpg') 


const App = () => (
  <View style={styles.container}>
    <Image 
      source={bg1}
     resizeMode="contain" 
      style={styles.image}>
         
    </Image>

  <Text style={styles.text}>Inside</Text>
  </View>
  
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems:"center",    // eixo y
    // justifyContent: "flex-end", // eixo x
    width:'100%',
    height:'100%',
    // marginVertical:20,

  },
  image: {
    width:'100%',
    height:'100%',
  },  
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }

});

export default App;