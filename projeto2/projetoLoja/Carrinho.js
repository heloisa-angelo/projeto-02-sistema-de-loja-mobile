import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import styles from '../sytles/stylesCarrinho'

export default function Carrinho({ navigation, carrinho }) {

  function total() {
    return carrinho.reduce((soma, item) => soma + item.preco, 0);
  }

  return (
    <ImageBackground
      // source={require('./assets/fotofundo.jpg')}
      // style={styles.background}
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

        <FlatList
          data={carrinho}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.produto}>
              <Image source={item.imagem} style={styles.imagem} />
              <View>
                <Text>{item.nome}</Text>
                <Text>R$ {item.preco}</Text>
              </View>
            </View>
          )}
        />

        <Text style={styles.totalText}>
          Total: R$ {total()}
        </Text>

      </View>
    </ImageBackground>
  );
}
