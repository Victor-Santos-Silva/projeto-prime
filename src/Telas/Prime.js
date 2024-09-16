import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Prime() {
    return (
        <>
            <View style={estilos.topo}>
                <Text style={estilos.titleTop}>Detalhes do Livro</Text>
            </View>

            <View style={estilos.listaDescricao}>
                <Text style={estilos.nomeLista}>LIVRO: Harry Potter</Text>
            </View>

            <View>
                <Text style={estilos.descricao}>
                    Harry, por um lado, é um bruxo, sabe criar poções mágicas, voar em vassouras e consegue até ficar invisível. Por outro, é um menino normal. Um pouco tímido, companheiro, tem medos, expectativas e às vezes fica furioso. E tem preocupações parecidas com as das crianças comuns, como a nota de uma prova difícil.
                </Text>

                <Text style={estilos.preco}>
                    VALOR:                   R$ 40,00
                </Text>
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 150,
        backgroundColor: "#008fb0"
    },
    titleTop: {
        color: "white",
        width: "100%",
        textAlign: "center",
        paddingTop: 80,
        fontSize: 20,
        borderRadius: 10,
        fontWeight: "bold",
    },
    listaDescricao: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
    },
    nomeLista: {
        backgroundColor: "#1ba2c3",
        color: "white",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        borderRadius: 10,
        padding: 10
    },
    descricao: {
        backgroundColor: "#1ba2c3",
        color: "white",
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 16,
        lineHeight: 26,
        textAlign: "justify",
        fontWeight: "bold",
        borderRadius: 10,
    },
    preco: {
        backgroundColor: "#1ba2c3",
        color: "white",
        fontWeight: "bold",
        fontSize: 26,
        marginTop: 8,
        marginLeft: 20,
        marginRight: 20,
        textAlign: "center",
        padding: 10,
        borderRadius: 10,
    }
});
