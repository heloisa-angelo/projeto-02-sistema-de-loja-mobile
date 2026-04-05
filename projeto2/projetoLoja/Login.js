import { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, Alert, ImageBackground 
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../sytles/styleLogin'


export default function Login({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const admin = { nome: 'admin', senha: '1234' };

  async function logar() {
    if (!nome || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (nome === admin.nome && senha === admin.senha) {
      navigation.navigate('Admin');
      return;
    }

    const dados = await AsyncStorage.getItem('@clientes');
    const clientes = dados ? JSON.parse(dados) : [];

    const user = clientes.find(c => c.nome === nome && c.senha === senha);

    if (user) {
      await AsyncStorage.setItem('@usuario', JSON.stringify(user));
      navigation.navigate('Lista', user);
    } else {
      Alert.alert('Erro', 'Usuário não encontrado');
    }
  }

  return (
    <ImageBackground 
      source={require('../assets/fotofundo.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

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

        <TouchableOpacity style={styles.button} onPress={logar}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.link}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}