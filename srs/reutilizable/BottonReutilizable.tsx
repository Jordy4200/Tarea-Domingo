import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

export const BottonReutilizable = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.ContenedorBotton}
        onPress={onPress}>
        <Text style={styles.colorBotton}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    ContenedorBotton:{
        backgroundColor:'#007AFF',
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 5
    },
    colorBotton:{
        textAlign:'center',
        color: 'white',
        fontSize: 16,
        fontWeight:'bold'
    }
})