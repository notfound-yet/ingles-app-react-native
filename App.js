import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView  } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Image, Button } from 'react-native-elements';
import Principal from './Views/Principal';
import Adicionar from './Views/Adicionar';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      text: '',
    }
  }

  static navigationOptions = {
    header: null,
  };

  mudarRota = (rota) => {
    this.props.navigation.navigate(rota);
  } 

  render() {
    return (
      <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
        <View style={{ backgroundColor: '#fff', padding: 25, borderRadius: 20, marginTop: 30}}>
        <Image 
          style={{ width: 200, height: 200 }}
          source={require('./assets/inglesApp.png')} 
        />
        <View >
          <Button 
            buttonStyle={{ marginTop: 20, borderRadius: 10, backgroundColor: '#FF6700', height: 50 }}
            titleStyle={{fontSize: 21}}
            title="Jogar"
            onPress={() => this.mudarRota('Principal')}
          />
          <Button 
            buttonStyle={{ marginTop: 20, borderRadius: 10, borderColor: '#FF6700', height: 50, borderWidth: 1 }}
            titleStyle={{fontSize: 21, color: '#FF6700'}}
            type="outline"
            onPress={() => this.mudarRota('Add')}
            title="Adicionar Palavras"
          />
        </View>
        </View>
      </KeyboardAvoidingView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLogin: {
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginTop: 20,
    textAlign: 'center', 
    borderRadius: 10,
    fontSize: 21,
    borderColor: '#FF6700',
    borderWidth: 1
  }
});

const AppNavigator = createStackNavigator(
  {
      Home: App,
      Principal: Principal,
      Add: Adicionar
  },
  {
    initialRouteName: "Home",
    header: {
      visible: false,
    },
  }
);

export default createAppContainer(AppNavigator);
