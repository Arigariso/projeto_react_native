import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity,Alert, Platform } from 'react-native';

import Homefundo from '../../../assets/fundo.jpg';

import styles from './styles';

function Home ({navigation}) {

    function entrar () {
       navigation.navigate("Login");
    }

    return (
        <ImageBackground source={Homefundo} style={styles.fundo}>
                <View>
                    <Text style={styles.titulo}>Olá!</Text>
                    <Text style={styles.titulo}>Seja Bem-vindo!</Text>
                    <Text style={styles.txt1}>Aqui na nossa loja, programadores têm desconto de 50%!</Text>
                    <TouchableOpacity style={styles.btn} onPress={entrar}>
                        <Text style={styles.textbtn}>Confira!</Text>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
            
    )
}

export default Home;