//comando rfc é um atalho para construir a estrutura do react
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Contador() {

    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState(" ");

    /* useEffect(() => {
        setMsg("O valor do livro foi atualizado: " + count + ' Vez(es)')
    }, [count]); */

    return (
        <>
            <Text style={estilo.texto}>
                Quantidade de livros: {count}
            </Text>

            <Text>
                {msg}
            </Text>

            <View style={estilo.buttonList}>
                <Button
                    onPress={() => {
                        setCount(count + 1)
                    }}

                    title='Aumentar' />
            </View>

            <View style={estilo.buttonList}>
                <Button
                    onPress={() => {
                        if (count > 0) {
                            setCount(count - 1)
                        }
                    }}
                    title='Dimiuir' />
            </View>
        </>
    )
}

const estilo = StyleSheet.create({
    buttonList: {
        padding: 10,
        width: 200,
        margin: "auto",
        textAlign: "center",
    },
    texto: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 20,
        marginTop: 8,
        marginLeft: 40,
        marginTop: 20
    }
});


