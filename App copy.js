import React, { useState } from "react";
import { 
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
    
} from "react-native";
// ----------------------------------------

//--- components ---
import TabelaImc from './components/tabelaImc'

import Footer from './components/footer'

// import Peso from './components/peso'

import Title from './components/title'

import Botao from './components/botao'

import Result from './components/result'




// ------------------------------
export default function calcimc() {

  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [resultadoImc, setResultadoImc] = useState(null);

//--- Regra de Negocio ---
  const calcularImc=()=>{
   // const calcularImc(){}l
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

    //--- informações ---
    console.log('imc', imc)
    console.log('peso ' , peso)
    console.log('altura ', altura)
    console.log('resultado ', resultadoImc)  
  }

  return (
    <SafeAreaView style={styles.container}>

{/* --- Titulo --- */}
        <Title/>


{/* Input Peso */}
      
      {/* <Peso/> */}

  

{/* --- Input Altura --- */}
      <View style={styles.view}>
        <Text style={styles.text} >Informe sua Altura</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={false}
          keyboardType={"numeric"}
          // onChange={(text) => setAltura(text)}
          onChangeText={setAltura}
          value={altura}
          placeholder='ex.: 1.80'
          placeholderTextColor={'#999'}
        ></TextInput>
      </View>

{/* --- Botão ---  */}
     

      <Botao/>

{/* --- Resultado --- */}
   
   
{/* <Result/> */}




   
    <TabelaImc/>

    <Footer/>

    </SafeAreaView>
  );
}


// --- Estilos ------------------------------------
const styles = StyleSheet.create({
  container: {
    flex:1,
    // alignItems:'center',
    // justifyContent:'space-around',
    padding: 10,
    backgroundColor:'#ddd'
  },

  text:{
    color:'#000',
    fontWeight:'600',
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
 
});


// cores alternativas

// backgroundColor:'#048',
// backgroundColor:'#299'