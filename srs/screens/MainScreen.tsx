import React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import { BottonReutilizable } from '../reutilizable/BottonReutilizable';

export const MainScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido</Text>
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/69/e1/fc/69e1fcc167be527e049922efc185942c.png' }}
        style={styles.imagen}
      />
      <BottonReutilizable
        title="Acceder"
        onPress={() =>  navigation.navigate('SecondScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imagen: {
    width: 400,
    height: 200,
    marginBottom: 20,
  },
});
