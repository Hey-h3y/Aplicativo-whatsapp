import React, {useState} from 'react';
import { StyleSheet, Text, View, Linking, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [Mensagem, setMensagem] = useState('');
  const [Numero, setNumero] = useState('');

  function Enviarmsg(num,message){
    if(message != '' && num != ''){
    
    var url = "whatsapp://send?text=" +
          'Nova mensagem \n' + new Date + '\n' + message +
          '&phone=55' +
          num;
        Linking.openURL(url)
          .then(data => {
            console.log("WhatsApp Opened successfully " + data);  //<---Success
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");  //<---Error
          });
    }else{
      alert('preencha os campos corretamente');
    }

  }

  return (
    <View style={styles.baseApp}>
      <Text style={styles.text}>Digite sua Mensage e o numero que deseja enviar a mensagem com DDD</Text>
      <TextInput 
      placeholder="Insira sua mensagem"
      style={styles.textinputmessage}
      onChangeText={text => setMensagem(text)}></TextInput>
      <TextInput 
      placeholder="DDD | Numero"
      style={styles.textinputnumber}
      keyboardType = 'numeric'
      onChangeText={text => setNumero(text)}></TextInput>

      <TouchableOpacity onPress={() => Enviarmsg(Numero, Mensagem)} style={styles.btn}><Text style={styles.text}>Enviar MSG</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  baseApp: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9df2a6'
  },
  textinputnumber: {
    borderWidth:1,
    width: '80%',
    height: 40,
    marginTop: 15,
    borderRadius: 25,
    textAlign: 'center',
    backgroundColor: '#d0f5d4'
  },
  textinputmessage: {
    borderWidth:1,
    width: '80%',
    height: 80,
    marginTop: 15,
    borderRadius: 15,
    textAlign: 'center',
    backgroundColor: '#d0f5d4'
  },
  text: {
    width: '80%',
    fontSize: 20,
    textAlign: 'center',
  },
  btn: {
    borderWidth:1,
    width: '60%',
    height: 40,
    marginTop: 30,
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#64e871',
    alignItems: 'center',
  }
});
