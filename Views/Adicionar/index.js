import React from 'react';
import { StyleSheet, Text, View, TextInput, Span, ScrollView, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
// import { Container } from './styles';

    
export default class Adicionar extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            palavra: " ",
            traducao: " ",
            listaPalavras: [{
                palavra: 'Home',
                traducao: 'Casa'
            },
            {
                palavra: 'Love',
                traducao: 'Amor'
            }]
        }
    }

    static navigationOptions = {
        header: null,
    };

    componentDidMount = async() => {
        //const palavras = await localStorage.getItem('palavras');

        //if(palavras === []){
            
        //}
        //await this.setState({listaPalavras: palavras});
        const value = await AsyncStorage.getItem('palavras');

        value ? await this.setState({listaPalavras: JSON.parse(value)}) : null;
    }

    adicionarPalavra = async() => {
        const { listaPalavras } = this.state;

        let lista = listaPalavras;

        lista.push({palavra : this.state.palavra, traducao: this.state.traducao});

        await this.setState({listaPalavras: lista});
        
    }

    salvar = async() => {
        await AsyncStorage.setItem('palavras', JSON.stringify(this.state.listaPalavras));
    }

    carregar = async() => {
        let lista = [
            {
                palavra: 'Of',
                traducao: 'De'
            },
            {
                palavra: 'You',
                traducao: 'Voce'
            },
            {
                palavra: 'In',
                traducao: 'Dentro'
            },
            {
                palavra: 'He',
                traducao: 'Ele'
            },
            {
                palavra: 'She',
                traducao: 'Ela'
            },
            {
                palavra: 'With',
                traducao: 'Com'
            },
            {
                palavra: 'I',
                traducao: 'Eu'
            },
            {
                palavra: 'Have',
                traducao: 'Ter'
            },
            {
                palavra: 'By',
                traducao: 'Por'
            },
            {
                palavra: 'Hot',
                traducao: 'Quente'
            },
            {
                palavra: 'Out',
                traducao: 'Fora'
            },
            {
                palavra: 'Up',
                traducao: 'Para-Cima'
            },
            {
                palavra: 'Each',
                traducao: 'Cada'
            },
            {
                palavra: 'Which',
                traducao: 'Qual'
            },
            {
                palavra: 'Do',
                traducao: 'Fazer'
            },
            {
                palavra: 'Said',
                traducao: 'Dizer'
            },
            {
                palavra: 'Time',
                traducao: 'Tempo'
            },
            {
                palavra: 'Will',
                traducao: 'Vontade'
            },
            {
                palavra: 'Way',
                traducao: 'Caminho'
            },
            {
                palavra: 'Many',
                traducao: 'Muitos'
            },
            {
                palavra: 'Write',
                traducao: 'Escrever'
            },
            {
                palavra: 'Long',
                traducao: 'Longo'
            },
            {
                palavra: 'Look',
                traducao: 'Olhar'
            },
            {
                palavra: 'More',
                traducao: 'Mais'
            },
            {
                palavra: 'Go',
                traducao: 'Ir'
            },
            {
                palavra: 'Come',
                traducao: 'Vir'
            },
            {
                palavra: 'Know',
                traducao: 'Saber'
            },
            {
                palavra: 'Down',
                traducao: 'Baixo'
            },
            {
                palavra: 'Now',
                traducao: 'Agora'
            },
            {
                palavra: 'Find',
                traducao: 'Achar'
            },
            {
                palavra: 'Any',
                traducao: 'Qualquer'
            },
            {
                palavra: 'Take',
                traducao: 'Pegar'
            },
            {
                palavra: 'Work',
                traducao: 'Trabalho'
            },
            {
                palavra: 'Place',
                traducao: 'Lugar'
            },
            {
                palavra: 'Live',
                traducao: 'Viver'
            },
            {
                palavra: 'Only',
                traducao: 'Somente'
            },
            {
                palavra: 'Year',
                traducao: 'Ano'
            },
            {
                palavra: 'Good',
                traducao: 'Bom'
            },
            {
                palavra: 'Very',
                traducao: 'Muito'
            },
            {
                palavra: 'Say',
                traducao: 'Dizer'
            },
            {
                palavra: 'Low',
                traducao: 'Baixo'
            },
            {
                palavra: 'Great',
                traducao: 'Otimo'
            },
            {
                palavra: 'Old',
                traducao: 'Velho'
            },
            {
                palavra: 'Share',
                traducao: 'Parte'
            },
            {
                palavra: 'Slave',
                traducao: 'Escravo'
            },
            {
                palavra: 'Duck',
                traducao: 'Pato'
            },
            {
                palavra: 'Dear',
                traducao: 'Querido'
            },
            {
                palavra: 'Log',
                traducao: 'Lenha'
            },
            {
                palavra: 'Score',
                traducao: 'Placar'
            },
            {
                palavra: 'Silver',
                traducao: 'Prata'
            },
            {
                palavra: 'Nose',
                traducao: 'Nariz'
            },
            {
                palavra: 'Salt',
                traducao: 'Sal'
            },
            {
                palavra: 'String',
                traducao: 'Corda'
            },
            {
                palavra: 'Corn',
                traducao: 'Milho'
            },
            {
                palavra: 'Wing',
                traducao: 'Asa'
            },
            {
                palavra: 'Flow',
                traducao: 'Correr'
            },
            {
                palavra: 'Join',
                traducao: 'Juntar'
            },
            {
                palavra: 'Each',
                traducao: 'Cada'
            }
        ];

        const nova = this.shuffle(lista);

        await this.setState({listaPalavras: nova});

        await AsyncStorage.setItem('palavras',  JSON.stringify(this.state.listaPalavras));
    }

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
    
    render() {
        return (
            <View style={{padding: 10, paddingTop: 100, flex: 1 }}>
                <View style={{justifyContent: 'center', flex: 1}}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{ width: '48%'}}>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Digite a Palavra"
                            onChangeText={(text) => this.setState({palavra: text})}
                        />
                        <Text style={{padding: 10, fontSize: 24}}>
                            {this.state.palavra}
                        </Text>
                    </View>
                <View style={{ width: '48%'}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Digite a Tradução"
                        onChangeText={(text) => this.setState({traducao: text})}
                    />
                    <Text style={{padding: 10, fontSize: 24}}>
                        {this.state.traducao}
                    </Text>
                </View>
                </View>
                <Button 
                    buttonStyle={{ marginTop: 20, borderRadius: 10, backgroundColor: '#FF6700', height: 50 }}
                    titleStyle={{fontSize: 21}}
                    title="Adicionar"
                    onPress={() => this.adicionarPalavra()}
                    disabled={(this.state.palavra !== "" && this.state.traducao === this.state.palavra)}
                />
                <ScrollView style={{padding: 20, flex: 1}} >
                    <View style={{ flexDirection: 'column', justifyContent: 'center', paddingBottom: 20}}>
                        <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 22, width: '48%', fontWeight: '700' }}>
                            P = Palavra
                        </Text>
                        <Text style={{fontSize: 22,  width: '48%', fontWeight: '700' }}>
                            T = Traducao
                        </Text>
                        </View>
                    </View>
                    {this.state.listaPalavras.map((item, index) => {
                        return (<View style={{ flexDirection: 'column', justifyContent: 'center'}}>
                                    <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 20, width: '48%' }}>
                                        P: <Text style={{ color: '#FF6700'}}>{item.palavra}</Text>
                                    </Text>
                                    <Text style={{fontSize: 20,  width: '48%'}}>
                                        T: <Text style={{ color: '#FF6700'}}>{item.traducao}</Text>
                                    </Text>
                                    </View>
                                </View>)})}
                </ScrollView>
                </View>
                <View style={{height: '20%'}}>
                <Button 
                    buttonStyle={{ marginTop: 20, borderRadius: 10, backgroundColor: '#FF6700', height: 50 }}
                    titleStyle={{fontSize: 21}}
                    title="Salvar"
                    onPress={() => this.salvar()}
                />
                <Button 
                    buttonStyle={{ marginTop: 20, borderRadius: 10, borderColor: '#FF6700', height: 50, borderWidth: 1 }}
                    titleStyle={{fontSize: 21, color: '#FF6700'}}
                    type="outline"
                    onPress={() => this.carregar()}
                    title="Resetar palavras"
                />
                </View>
            </View>
        )
    }
}

