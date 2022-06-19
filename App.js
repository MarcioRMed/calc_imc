import React, { useState } from "react";
import { 
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ViewBase,
  Image,
} from "react-native";




const bg1 = require('./assets/tabela_imc.jpg') 


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
      <View >        
        <Text style={styles.title}>
          Indice de Massa Corporal  
        </Text>
      </View>

{/* --- Input Peso --- */}
      <View style={styles.view}> 
        <Text style={styles.text}>Informe seu Peso</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          keyboardType={"numeric"}
          // onChange={(text) => setPeso(text)}
          onChangeText={setPeso}
          value={peso}
          placeholder='ex.: 85'
          placeholderTextColor={'#999'}
        ></TextInput>
      </View>

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
      <View style={styles.view}>
        <TouchableHighlight
        style={styles.btnCalcular}
        onPress={()=> calcularImc()}
        >
          <Text style={styles.btnTexto}>Calcular IMC</Text>
        </TouchableHighlight>
      </View>

{/* --- Resultado --- */}
    <View style={styles.view} >
      <Text style={styles.text} >Resultado: {resultadoImc}</Text>
    </View>


{/* --- Tabela IMC --- */}
    <View style={styles.tabelaContainer}> 
    <Image 
      source={bg1}
      resizeMode="contain" 
      style={styles.tabela}>
         
    </Image>
    </View>


{/* --- Footer --- */}
    <View >
      <Text style={styles.desenvolvedor}>Márcio Ramos Medeiros - 2022</Text>
    </View>

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
  title:{
    marginTop: 16,
    marginBottom: 16,
    paddingVertical: 8,
    border:0,
    borderRadius: 6,
    backgroundColor: "#048",
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300"
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

  desenvolvedor:{
    padding:10,
    color:'#000',
    fontWeight:'600',
    textAlign:'center',
  },
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
});


// cores alternativas

// backgroundColor:'#048',
// backgroundColor:'#299'