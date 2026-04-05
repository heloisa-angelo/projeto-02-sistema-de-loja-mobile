import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    backgroundColor: 'rgba(45, 12, 87, 0.75)', // roxo transparente
    margin: 20,
    padding: 25,
    borderRadius: 20,
  },

  voltarBotao: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // transparência para o botão de voltar
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },

  voltarTexto: {
    color: '#fff', // texto branco no botão
    fontSize: 16,
    fontWeight: 'bold',
  },

  produto: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // fundo branco semitransparente para os produtos
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 5,
    flexDirection: 'row', // Layout em linha para imagem e informações
    alignItems: 'center', // Alinha a imagem e texto verticalmente
  },

  imagem: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082', // roxo para o nome do produto
  },

  preco: {
    fontSize: 16,
    color: '#7B2CBF', // roxo mais claro para o preço
  },

  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0C3FC', // cor clara para o total
    marginTop: 20,
    textAlign: 'center',
  },

});

export default styles;