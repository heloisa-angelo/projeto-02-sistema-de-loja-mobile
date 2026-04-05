import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './projetoLoja/Login';
import Lista from './projetoLoja/Lista';
import Admin from './projetoLoja/Admin';
import Carrinho from './projetoLoja/Carrinho';
import Cadastro from './projetoLoja/CadastroDeClientes';

export default function App() {
  const [tela, setTela] = useState("Login");
  const [usuario, setUsuario] = useState(null);
  const [carrinho, setCarrinho] = useState([]);

  const navigation = {
    navigate: (destino, params = {}) => {
      if (params.usuario) setUsuario(params.usuario);
      if (params.carrinho) setCarrinho(params.carrinho);
      setTela(destino);
    },

    goBack: () => setTela("Login")
  };

  useEffect(() => {
    async function inicializar() {
      setTela("Login");

      const dados = await AsyncStorage.getItem('@produtos');
      if (!dados) {
        const produtosPadrao = [
          { id: 1, nome: 'Funko Pop Spider-Man', preco: 120,   },
          { id: 2, nome: 'Camiseta Spider-Man', preco: 80,  },
          { id: 3, nome: 'Action Figure Spider-Man', preco: 200, }
        ];
        await AsyncStorage.setItem('@produtos', JSON.stringify(produtosPadrao));
      }
    }
    inicializar();
  }, []);

  if (tela === "Login") return <Login navigation={navigation} />;
  if (tela === "Cadastro") return <Cadastro navigation={navigation} />;
  if (tela === "Admin") return <Admin navigation={navigation} />;
  if (tela === "Lista") return <Lista navigation={navigation} usuario={usuario} carrinho={carrinho} />;
  if (tela === "Carrinho") return <Carrinho navigation={navigation} carrinho={carrinho} />;

  return null;
}