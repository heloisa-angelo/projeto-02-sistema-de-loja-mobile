import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    backgroundColor: 'rgba(45, 12, 87, 0.75)',
    margin: 20,
    padding: 25,
    borderRadius: 20,
  },

  title: {
    fontSize: 32,
    color: '#E0C3FC', 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#F3E8FF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
    color: '#4B0082', 
  },

  button: {
    backgroundColor: '#7B2CBF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    elevation: 6,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  imagemPreview: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },

  produtoItem: {
    marginTop: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 12,
    elevation: 5,
  },

  produtoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B0082',
    marginBottom: 10,
  },

  imagemProduto: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default styles;