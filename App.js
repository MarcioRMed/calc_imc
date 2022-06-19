import React, { useState } from "react";
import {SafeAreaView, StyleSheet,   
} from "react-native";
// ----------------------------------------

//--- components ---
import Footer from './components/footer'
import TabelaImc from './components/tabelaImc'
import Title from './components/title'
import Peso from './components/peso'
import Altura from './components/altura'
import Result from './components/result'
import Botao from './components/botao'


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
    
    // criar lógica para verificar o uso de virgula indevido
    // if(altura ==  altura + ','){
    //   alert('Por favor usar ponto " . " em vez de virugla " , "')
    // }
    
    
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

    <Title/>

    <Peso Peso={setPeso} />

    <Altura Altura={setAltura} />

    <Botao aoClicar={calcularImc} />
                    
    <Result resultado={resultadoImc}  />
   
    <TabelaImc/>

    <Footer/>

    </SafeAreaView>
  );
}


// --- Estilos ------------------------------------
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-around',
    padding: 10,
    backgroundColor:'#ddd'
  },
 
});


// cores alternativas

// backgroundColor:'#048',
// backgroundColor:'#299'