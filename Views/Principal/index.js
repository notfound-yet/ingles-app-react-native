import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Image, Button, Header } from 'react-native-elements';
// import { Container } from './styles';

export default class Principal extends React.Component {

    
      constructor(props) {
        super(props);
        this.state ={ 
          timer: 99,
          listPalavras: [
          
        ],
          errou: false,
          pontos: 0,
          palavras: [],
          palavraCerta: [],
          tentativa: 0,
          pontos: 0

        }
      }
      
      componentDidMount = async() => {
        try{
        this.interval = setInterval(
          () => this.setState((prevState)=> ({ timer: prevState.timer - 1 })),
          1000
        );
        //alert("oi");
        //const lista = await AsyncStorage.getItem('palavras');
        const value = await AsyncStorage.getItem('palavras');
        await this.setState({listPalavras: JSON.parse(value)});
        //console.log(lista);
        this.state.listPalavras.map(item => {
          console.log(item);
        })
        await this.jogar();
        } catch (e) {
          alert("Sem Palavras");
          this.props.navigation.navigate("Home");
        }
      }

      jogar = async() => {
        try {
        let tentativa = 0;
        let palavras = [];
        let list = this.shuffle(this.state.listPalavras);

        let palavraCerta = list[await Math.floor(Math.random() * 4)];
        do{
            palavras.push(list[tentativa]);
            tentativa++;
        }while(tentativa % 5 !== 0);
        
        await this.setState({
          palavras,
          palavraCerta,
          timer: 45
        });
      } catch (e) {
        alert("Acabou as palavras");
        this.props.navigation.navigate("Home");
      }
          //await this.getCoordinates();
        
      };

      shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

      tentar = async(escolha) => {
        if(this.state.palavraCerta.traducao === escolha){
          await this.setState({pontos: this.state.pontos + 5})
          
        }else {
          alert("Errouuuu !!!");
        }
        this.jogar();
      }

      static navigationOptions = {
        header: null,
      };
      
      componentDidUpdate(){
        if(this.state.timer === 1){ 
          alert("Acabou o tempo !!");
          clearInterval(this.interval);
          this.props.navigation.navigate("Home");
        }
      }
      
      componentWillUnmount(){
       clearInterval(this.interval);
      }

      handleRender = () => {

        return <>
          
          <Text  style={[styles.texto , { color: 'black', fontSize: 18, textAlign: 'center'}]}>Qual a Tradução para a palavra</Text>
          <Text  style={[styles.texto , { color: '#FF6700', fontWeight: 'bold', fontSize: 40}]}>{ this.state.palavraCerta.palavra  }</Text>
  
          { this.state.palavras.map( (item, index) => {
            return (
              <Button 
                  key={index}
                  buttonStyle={{width: 300, marginTop: 20, borderRadius: 10, backgroundColor: '#FF6700', borderColor: '#FF6700', height: 70, borderWidth: 1 }}
                  titleStyle={{fontSize: 27, fontWeight: '700'}}
                  onPress={() => this.tentar(item.traducao)}
                  title={item.traducao}
              />
            )
          })}
          </>
      
    };
      
      render() {
        return (
          <View style={styles.container}>
            <View style={{marginTop: 22}}>
                <Text style={{color: '#FF6700', fontSize: 44, fontWeight: '700'}}> {this.state.timer} </Text>
            </View>
            <Text style={[styles.texto , { fontSize: 27, fontWeight: '700', color: 'black'}]}>Pontos: <Text style={{ color: '#FF6700'}}>{ this.state.pontos }</Text></Text>
            { this.handleRender() }
          </View> 
        )
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#fff",
      marginLeft: 10,
    }
  });