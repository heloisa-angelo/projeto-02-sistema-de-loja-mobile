import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, Alert, ImageBackground 
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../sytles/stylesCadastrodeClientes' 

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  async function cadastrar() {
    if (!nome || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const dados = await AsyncStorage.getItem('@clientes');
    const clientes = dados ? JSON.parse(dados) : [];

    const novo = { id: Date.now(), nome, senha };
    clientes.push(novo);

    await AsyncStorage.setItem('@clientes', JSON.stringify(clientes));
    await AsyncStorage.setItem('@usuario', JSON.stringify(novo));

    Alert.alert('Sucesso', 'Conta criada!');
    navigation.navigate('Lista', novo);
  }

  return (
    <ImageBackground 
      source={('./assets/fotofundo.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>

        <TextInput 
          placeholder="Nome" 
          style={styles.input}
          value={nome} 
          onChangeText={setNome} 
        />

        <TextInput 
          placeholder="Senha" 
          secureTextEntry 
          style={styles.input}
          value={senha} 
          onChangeText={setSenha} 
        />

        <TouchableOpacity style={styles.button} onPress={cadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Já tenho conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}