import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import Titulo from './components/Titulo';

const LoginScreen = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  console.log('Renderizando LoginScreen');

  const handleSignIn = () => {
    if (usuario.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Debes ingresar usuario y contraseña');
      return;
    }
    setAutenticado(true);
    Alert.alert('Autenticado', '¡El usuario ha sido autenticado!');
  };

  return (
    <View style={styles.container}>
      <Titulo nombre="Jessica Yuliana Villa Martinez" />
      <View style={styles.form}>
        <Text style={styles.label}>Ususario</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={usuario}
          onChangeText={setUsuario}
          editable={!autenticado}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!autenticado}
        />

        <TouchableOpacity
          style={[styles.button, autenticado && styles.buttonDisabled]}
          onPress={handleSignIn}
          disabled={autenticado}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041222ff',
  },
  form: {
    marginTop: 50,
    paddingHorizontal: 30,
  },
  label: {
    fontSize: 14,
    color: '#838a8eff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#CFD8DC',
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4388e5',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  buttonDisabled: {
    backgroundColor: '#90A4AE',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;