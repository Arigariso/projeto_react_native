import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity,Alert, Platform } from 'react-native';

import Fundo from '../../../assets/fundo.jpg';

import styles from './styles'

const userlogin = {
    id: 1,
    email: "arigariso@gmail.com",
    senha: "4321"
}

function Login ({navigation}) {

    function autenticacao() {

        if (userlogin.email === usuario && userlogin.senha === senha) {
            navigation.navigate("Produtos");
        }else {
            Alert.alert("Dados inválidos!", "Por favor, informe dados válidos!")
        }
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>
                <View>
                    <Text style={styles.titulo}>Olá, identifique-se!</Text>
                </View>

                <View style={styles.inputs}>
                    <TextInput 
                    placeholder="Seu e-mail" 
                    style={styles.input}
                    value={usuario}
                    onChangeText={(text) => setUsuario(text)}
                />
                    <TextInput 
                    placeholder="Sua senha" 
                    style={styles.input} 
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.textbtn }>Entrar</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Login;
