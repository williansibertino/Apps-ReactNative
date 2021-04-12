import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
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
    if (stars == 15) {
      Alert.alert('É um gatão','Gato bonito demais')
    }
    
  }

  // Função de Curtir e não curtir
  const curtidas = () => {
    if (stars == 0) {
      adicionaStars(stars + 1);
      Alert.alert('Alegria!!!','Amamos gatinhos')
    } else if (stars == 1) {
      adicionaStars(stars - 1);
      Alert.alert('Tristeza','Não gosta de gatinhos...')
    }
  }

  // Função de Zerar Stars
  const restart = () => {
    adicionaStars(stars - stars);
  }

  // Render
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text0}>{stars}</Text>
        <View style={styles.itembox0}>
          <Text style={styles.text2}>Garfield: O Lasanheiro Preguiçoso</Text>
          <Text style={styles.text3}>Dormi durante o dia, farreá a noite e vive roubando comida da cozinha.</Text>
        </View>
      </View>
      <View style={styles.box0}>
        <TouchableOpacity onPress={increment}>
          <Text style={styles.text1}>Stars</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={curtidas}>
          <Text style={styles.text1}>Curtir</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={restart}>
          <Text style={styles.text1}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbc531',
  },
  text0: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    marginRight: 5,
    color: '#2f3640',
    borderColor: '#353b48',
    width: 65,
    height: 65,
    borderWidth: 2,
    borderRadius: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#dcdde1',
  },
  text1: {
    color: '#2f3640',
    fontSize: 20,
    fontWeight: 'bold',
    width: 70,
    marginRight: 10,
    marginVertical: 10,
    borderColor: '#353b48',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 15,
    textAlignVertical: 'center',
    backgroundColor: '#e1b12c',
    fontFamily: 'DancingScript',
  },
  text2: {
    fontSize: 14,
    color: '#2f3640',
    fontWeight: 'bold',
  },
  text3: {
    fontSize: 14,
    color: '#353b48',
  },
  box0: {
    flexDirection: 'row',
    width: 300,
  },
  box1: {
    flexDirection: 'row',
    width: 300,
  },
  itembox0: {
    width: 230,
    height: 65,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderColor: '#353b48',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#dcdde1',
  }
});

// Método para exportação da classe. Sempre colocar o nome da classe
export default App;
