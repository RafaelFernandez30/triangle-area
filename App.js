import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Buttonm, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const baseInputRef = useRef();

  function CalcularArea() {
    if (base > 0 && altura > 0) {
      const areaCalculada = (parseFloat(base) * parseFloat(altura)) / 2;
      setArea(areaCalculada.toFixed(2).toString());
      setAltura('');
      setBase('');
      baseInputRef.current.clear();// clear limpa para não deixar sujo
      baseInputRef.current.focus();//focus da um foco aonde é para inserir
    } else {
      setMensagemErro("🤢Insira todos os dados!🤮 ");
    }
  }
  return (
    <View style={styles.container}>
      <Text>Insira os dados abaixo para o cálculo da área do triângulo. </Text>
      <TextInput
        placeholder="Base"
        style={styles.input}
        keyboardType={'numeric'}
        value={base}
        onChangeText={(base) => setBase(base)}
        ref={baseInputRef}
      />

      <TextInput
        placeholder="Altura"
        style={styles.input}
        keyboardType={'numeric'}
        value={altura}
        onChangeText={(altura) => setAltura(altura)} />
      {mensagemErro ? <Text style={styles.TextoErro}>{mensagemErro}</Text> : null}
      <Button title="👾Calcular😝" onPress={CalcularArea} />
      <Text>{area ? `Resultado: ${area}` : ''}</Text>
      <StatusBar style="auto" 
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    textAlign: 'center',
  },
  TextoErro: {
    color: 'red',
    marginTop: 10,
  },
});