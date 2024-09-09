import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


export default function Prime() {
    return (
        <>
            <View style={estilos.topo}>
                <Text style={estilos.titleTop}>Detalhes do sistema</Text>
            </View>

            <View style={estilos.listaDescricao}>
                <Text style={estilos.nomeLista}>LIVRO: HARRY POTTER</Text>
            </View>

            <View>
                <Text style={estilos.descricao}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
        backgroundColor: "#3e1fdd"
    },
    titleTop: {
        width: "100%",
        textAlign: "center",
        paddingTop: 70,
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    listaDescricao: {
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 15,
        marginLeft: 20,
        marginRight: 20,
    },
    nomeLista: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#3e1fdd",
        backgroundColor: "#febcff",
        padding: 10
    },
    descricao: {
        backgroundColor: "#febcff",
        color: "#3e1fdd",
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 16,
        lineHeight: 26,
        textAlign: "justify",
        fontWeight: "bold"
    },
    preco: {
        color: "#febcff",
        fontWeight: "bold",
        fontSize: 26,
        marginTop: 8,
        marginLeft: 20,
        marginRight: 20,
        textAlign: "center",
        padding: 10,
        backgroundColor: "#3e1fdd",
    }
})
