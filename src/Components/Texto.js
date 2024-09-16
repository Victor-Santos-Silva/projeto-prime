import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto() {
    const [texto, setTexto] = useState('Texto do novo componente');

    useEffect(() => {
        setTexto("Quantos livros você quer?")
    }, []);

    return (
        <Text style={estilos.texto}>{texto}</Text>
    )
}

const estilos = StyleSheet.create({
    texto: {
        backgroundColor: "#1ba2c3",
        color: "white",
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "center",
        margin: "auto",
        padding: 15,
        marginTop: 8,
        borderRadius: 10,
    }
});