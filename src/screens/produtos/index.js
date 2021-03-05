import React from 'react';
import {View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

import Fogaob from '../../../assets/produtos/fogaobrastemp.jpeg';
import Fogaoa from '../../../assets/produtos/fogaoatlas.jpeg';
import Geladeirae from '../../../assets/produtos/geladeiraeletrolux.jpeg';
import Geladeirac from '../../../assets/produtos/geladeiraconsul.jpeg';
import Microondase from '../../../assets/produtos/microondaseletrolux.jpeg';
import Microondasc from '../../../assets/produtos/microondasconsul.jpeg';
import Lavadora from '../../../assets/produtos/lavadorabrastemp.jpeg';

const prod = [
    {
        nome: "Fogão Brastemp",
        imagem: <Image source={Fogaob}/>,
        preco: "R$ 999,00",
        precoantigo: "R$ 1098,00"
    },
    {
        nome: "Fogão Atlas",
        imagem: <Image source={Fogaoa}/>,
        preco: "R$ 599,00",
        precoantigo: "R$ 749,00"
    },
    {
        nome: "Geladeira Eletrolux",
        imagem: <Image source={Geladeirae}/>,
        preco: "R$ 4599,99",
        precoantigo: "R$ 4742,10"
    },
    {
        nome: "Geladeira Consul",
        imagem: <Image source={Geladeirac}/>,
        preco: "R$ 2899,00",
        precoantigo: "R$ 3115,99"
    },
    {
        nome: "Microondas Eletrolux",
        imagem: <Image source={Microondase}/>,
        preco: "R$ 759,99",
        precoantigo: "R$ 819,90"
    },
    {
        nome: "Microondas Consul",
        imagem: <Image source={Microondasc}/>,
        preco: "R$ 850,00",
        precoantigo: "R$ 929,00"
    },
    {
        nome: "Lavadora Brastemp",
        imagem: <Image source={Lavadora}/>,
        preco: "R$ 978,00",
        precoantigo: "R$ 999,00"
    }
]

function Produtos() {
    return (
        <View style={styles.fundoprodutos}>
            <ScrollView>
            
                <Text style={styles.titulo}>Nossos Produtos:</Text>
                {
                    prod.map((produto, key) => {
                        return (
                            <View style={styles.produtos}>
                                <Text style={styles.nome}>{produto.nome}</Text>
                                <Text style={styles.imagem}>{produto.imagem}</Text>
                                <Text style={styles.precoantigo}>R$ {produto.precoantigo}</Text>
                                <Text style={styles.preco}>R$ {produto.preco}</Text>
                            </View>
                        )
                    }
                    )
                }
            
            </ScrollView>
        </View>
    )
}

export default Produtos;