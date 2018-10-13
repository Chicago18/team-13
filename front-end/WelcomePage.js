import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
     <Image source={require('.front-end/Pictures/logo.png')}
   
      <View style={styles.container}>

      <Text>

        <Text>WELCOME! {"\n"}  
        ¡Bienvenido!
        स्वागत हे! 
        Chào Mừng!
        Bem Vinda!</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

