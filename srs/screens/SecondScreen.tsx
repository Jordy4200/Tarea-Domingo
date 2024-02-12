import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { InputComponent } from '../reutilizable/InputComponent'; 

export const SecondScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const dividir = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado('Por favor ingresa números válidos');
    } else if (n2 === 0) {
      setResultado('No existe numero para divir para a 0');
    } else {
      const res = n1 / n2;
      setResultado(res.toString());
    }
  };

  return (
    <View style={styles.container}>
      <InputComponent 
        placeholder="Número 1" 
        onChangeText={(text) => setNum1(text)} 
      />
      <InputComponent 
        placeholder="Número 2" 
        onChangeText={(text) => setNum2(text)} 
      />
      <Button title="Dividir" onPress={dividir} />
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
