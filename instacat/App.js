import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// this.state - usa-se na versão antiga do react
// use.state - usa na versão mais atual

// Nova forma de se criar uma função no javascript 
// Também tem que colocar nome da classe
const App = () => {
  // State // declarando nome da variável / nome da função / e valor inicial que a função vai receber.
  const [stars, adicionaStars] = useState(0);

  // versão atualizada de como criar uma função
  // function increment () {} -  var increment = function {} -versões antigas -mesma coisa
  // Função curtir demais
  const increment = () => {
    adicionaStars(stars + 1);
  }

  // Função de Curtir e não curtir
  const curtidas = () => {
    if (stars == 0) {
      adicionaStars(stars + 1);
    } else if (stars == 1) {
      adicionaStars(stars - 1);
    }
  }

  // Função de Zerar Stars
  const restart = () => {
    adicionaStars(stars - stars);
  }

  // Render
  return (
    <View style={styles.container}>
      <Text style={styles.text0}>{stars}</Text>
      <TouchableOpacity onPress={increment}>
        <Text style={styles.text}>Stars</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={curtidas}>
        <Text style={styles.text}>Curtir</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={restart}>
        <Text style={styles.text}>Restart</Text>
      </TouchableOpacity>
    </View>
  )
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text0: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    padding: 10,
    borderColor: '#000',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 100,
    textAlign: 'center',
    textAlignVertical: 'center',


  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    borderColor: '#000',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 3,
    textAlignVertical: 'center',
  }
});

// Método para exportação da classe. Sempre colocar o nome da classe
export default App;
