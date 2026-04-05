import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import styles from '../sytles/styleLista'


export default function Lista({ navigation, carrinho }) {

  const [listaCarrinho, setListaCarrinho] = useState(carrinho);

  const produtos = [
    {
      id: 1,
      nome: 'Album Sabrina Carpenter Short n Sweet',
      preco: 120,
      imagem: require('../assets/sabrinaCarpenter.jpg')
     
    },
    {
      id: 2,
      nome: 'Album OLivia Rodrigo Guts',
      preco: 140,
      imagem: require('../assets/oliviaRodrigo.jpg')
      
    },
    {
      id: 3,
      nome: 'Album Olivia Rodrigo Sour',
      preco: 200,
      imagem: require('../assets/sour.jpg')
      
    }
  ];

  function adicionar(item) {
    const novo = [...listaCarrinho, item];
    setListaCarrinho(novo);
  }

  return (
    <ImageBackground
     source={require('../assets/fotofundo.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>

        {/* 🔙 VOLTAR */}
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: 10,
            borderRadius: 10,
            marginBottom: 10
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: '#fff' }}>← Voltar</Text>
        </TouchableOpacity>

        {/* 🛒 CARRINHO */}
        <TouchableOpacity
          style={styles.carrinho}
          onPress={() => navigation.navigate('Carrinho', { carrinho: listaCarrinho })}
        >
          <Text style={styles.carrinhoTexto}>
            🛒 {listaCarrinho.length}
          </Text>
        </TouchableOpacity>

        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.produto}>
              <Image source={item.imagem} style={styles.imagem} />
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.preco}>R$ {item.preco}</Text>

              <TouchableOpacity
                style={styles.botao}
                onPress={() => adicionar(item)}
              >
                <Text style={styles.botaoTexto}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          )}
        />

      </View>
    </ImageBackground>
  );
}
