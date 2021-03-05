import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    
    
    produtos: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginLeft: 45,
        marginRight: 45,
        marginTop: 20,
        margin: 20,
        paddingBottom: 20,
        paddingTop: 20
    },
    imagem: {
        height: 300
    },
    titulo: {
        marginTop: 50,
        marginBottom: 30,
        color: "#363636",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
    fundoprodutos: {
        backgroundColor: "#DCDCDC",
    },
    precoantigo: {
        textDecorationLine:"line-through",
        fontSize: 15,
        color: "#A9A9A9"
    },
    preco: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red"
    },
    nome: {
        fontSize: 20,
        color: "#696969"
        
    }
})

export default styles;