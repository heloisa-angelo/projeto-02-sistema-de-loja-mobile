import React, { useState, useEffect } from 'react';
import {
  View, TextInput, Text, TouchableOpacity, FlatList, Image, ImageBackground
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../sytles/styleAdmin'

export default function Admin({ navigation }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState('');
  const [produtos, setProdutos] = useState([]);

  useEffect(() => { carregar(); }, []);

  async function carregar() {
    const dados = await AsyncStorage.getItem('@produtos');
    setProdutos(dados ? JSON.parse(dados) : []);
  }

  async function adicionar() {
    const dados = await AsyncStorage.getItem('@produtos');
    const lista = dados ? JSON.parse(dados) : [];

    lista.push({ id: Date.now(), nome, preco, imagem });

    await AsyncStorage.setItem('@produtos', JSON.stringify(lista));

    setNome('');
    setPreco('');
    setImagem('');

    carregar();
  }

  return (
     <ImageBackground>
      
      
      <View style={styles.container}>
        <Text style={styles.title}>Admin</Text>

        <TextInput placeholder="Produto" style={styles.input} value={nome} onChangeText={setNome} />
        <TextInput placeholder="Preço" style={styles.input} value={preco} onChangeText={setPreco} />
        <TextInput placeholder="Link da imagem (URL)" style={styles.input} value={imagem} onChangeText={setImagem} />

        {imagem !== '' && (
          <Image source={{ uri: imagem }} style={{ width: 100, height: 100, marginTop: 10 }} />
        )}

        <TouchableOpacity style={styles.button} onPress={adicionar}>
          <Text style={styles.buttonText}>Adicionar Produto</Text>
        </TouchableOpacity>

        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginTop: 10 }}>
              <Text>{item.nome} - R$ {item.preco}</Text>
              {item.imagem && <Image source={{ uri: item.imagem }} style={{ width: 80, height: 80 }} />}
            </View>
          )}
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
