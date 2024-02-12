import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface InputProps {
  onChangeText: (text: string) => void;
  placeholder: string; 
}

export const InputComponent = ({ onChangeText, placeholder }: InputProps) => {
  const [isEmpty, setIsEmpty] = useState(false);

  const validacion = (text: string) => {
    onChangeText(text);
    if (text.trim() === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder} 
        keyboardType="numeric"
        style={styles.cuadro}
        onChangeText={validacion}
      />
      {isEmpty && <Text style={styles.validacion2}>Completa el campo</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  cuadro: {
    borderWidth: 1,
    borderColor: '#2F2BA6',
    padding: 10,
  },
  validacion2: {
    color: 'red',
  },
});
