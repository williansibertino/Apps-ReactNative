import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native'; // TextInput Button
import Constants from 'expo-constants';

import { TextInput, Button } from 'react-native-paper';

export default class App extends React.Component {
  //states (disponiveis no contexto do app)
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Inderterminado',
    // Usando para trocar cor de fundo do background
    cor: '#7f8c8d',
    borda: '#95a5a6'
  };


  // Metodos
  calcularIMC = () => {
    // const peso = 94;
    // const altura = 1.83;
    const resultado = this.state.peso / (this.state.altura*this.state.altura);

    this.setState({
      imc: Math.ceil(resultado)
    });

    // Condições
    if(resultado < 18.5) {
      this.setState({
        legenda: 'Magreza',
        cor: '#e74c3c',
        borda: '#c0392b'
      });
    } else if (resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Normal',
        cor: '#2ecc71',
        borda: '#27ae60'
      });
    } else if (resultado >= 25 && resultado < 30) {
      this.setState({
        legenda: 'SobrePeso',
        cor:'#f1c40f',
        borda: "#f39c12"
      });
    } else if (resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade',
        cor: '#e67e22',
        borda: '#d35400'
      });
    } else if (resultado >= 40) {
      this.setState({
        legenda: 'Obesidade Grave',
        cor: '#c0392b',
        borda:'#e74c3c'
      });
    }

  }

  // Renderização
  render(){
    //const imc = 30;
    //const legenda = 'Magrelo';
    // imc = peso / altura² 


    return (
      <View style={styles.app}>
        <Text style={styles.legenda}>Seu IMC</Text>

        <View style={[styles.painel, { backgroundColor: this.state.cor, borderColor: this.state.borda }]}>
          <Text style={styles.resultado}>{this.state.imc}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
        </View>

        <View>
          <TextInput label='Insira seu Peso (kg)' style={styles.peso} 
          onChangeText = {
            valorEntrada => {
              this.setState({ peso: valorEntrada.replace(',','.')});
            }} 
          />
          <TextInput label='Insira sua altura (m)' style={styles.altura} 
          onChangeText = { 
            (valorEntrada) => {
              this.setState({ altura: valorEntrada.replace(',','.')});
          }} 
          />
          <Button style={styles.botao} mode="contained" title="Calcular" onPress={this.calcularIMC}>Calcular</Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  legenda: {
    marginTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fafafa',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fafafa',
  },
  peso: {
    marginVertical:8,
    width: 300,
    alignSelf: 'center',
    //borderColor:'#000',
    //borderWidth: 1,
    //borderRadius: 10,
    //padding: 10,
  },
  altura: {
    marginVertical: 8,
    width: 300,
    alignSelf: 'center',
  },
  // box painel
  painel: {
    width: 150,
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
  botao: {
    width: 300,
    alignSelf: 'center',
    marginTop: 10,
  }
});