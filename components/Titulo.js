import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Titulo = ({ nombre }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.subtitulo}>React Native - User Authentication</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4388e5',
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginTop: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  nombre: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitulo: {
    color: '#E3F2FD',
    fontSize: 14,
    marginTop: 5,
    fontStyle: 'italic',
  },
});

export default Titulo;