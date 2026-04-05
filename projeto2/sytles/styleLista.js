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

  carrinho: {
    backgroundColor: '#7B2CBF', // roxo do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'flex-end',
    marginTop: 20,
  },

  carrinhoTexto: {
    color: '#fff', // texto branco no carrinho
    fontSize: 18,
    fontWeight: 'bold',
  },

  produto: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // fundo branco semitransparente para os produtos
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 5,
  },

  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignSelf: 'center',
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082', // roxo para o nome do produto
    textAlign: 'center',
    marginBottom: 5,
  },

  preco: {
    fontSize: 16,
    color: '#7B2CBF', // roxo mais claro para o preço
    textAlign: 'center',
    marginBottom: 10,
  },

  botao: {
    backgroundColor: '#7B2CBF', // roxo do botão
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 4,
  },

  botaoTexto: {
    color: '#fff', // texto branco no botão
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;