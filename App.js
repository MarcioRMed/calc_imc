import React, { useState } from "react";
import { 
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ViewBase,
} from "react-native";

export default function calcimc() {

  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [resultadoImc, setResultadoImc] = useState(null);

  console.log('peso ' , peso)
  console.log('altura ', altura)
  console.log('resultado ', resultadoImc)
  
  
  // const calcularImc(){}l

  const calcularImc=()=>{
  
  if(peso==0 || !peso){
      alert('Informe o Peso')
      return
    }
    
    if(altura==0 || !altura){
      alert('Informe a altura')
      return
    }
    
    
    // fórmula
    // imc = peso/(altura * altura)
    
    // const imc = peso/(Math.pow(altura,2))    
    const imc = peso/(altura * altura)
    setResultadoImc(imc.toFixed(1))

    console.log('imc', imc)
    console.log('peso ' , peso)
    console.log('altura ', altura)
    console.log('resultado ', resultadoImc)
  
  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text>Calculadora de Indice de Massa Corporal IMC </Text>
      </View>

      <View style={styles.view}>
        <Text>Informe seu Peso</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          keyboardType={"numeric"}
          // onChange={(text) => setPeso(text)}
          onChangeText={setPeso}
          value={peso}
        ></TextInput>
      </View>

      <View style={styles.view}>
        <Text>Informe sua Altura</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={false}
          keyboardType={"numeric"}
          // onChange={(text) => setAltura(text)}
          onChangeText={setAltura}
          value={altura}
        ></TextInput>
      </View>

{/* --- Botão ---  */}
      <View style={styles.view}>
        <TouchableHighlight
        style={styles.btnCalcular}
        onPress={()=> calcularImc()}
        >
          <Text style={styles.btnTexto}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>


    <View style={styles.view} >
      <Text>Resultado: {resultadoImc}</Text>
    </View>


    </SafeAreaView>
  );
}


// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 10,
  },

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
});
