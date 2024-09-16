import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Prime from './src/Telas/Prime';
import Texto from './src/Components/Texto';
import Contador from './src/Components/Contador';

export default function App() {
  return (
    <ScrollView style={estilo.body}>
      <Prime />
      <Texto />
      <Contador />
      <StatusBar style="auto" />
    </ScrollView>
  );

};

const estilo = StyleSheet.create({
  body: {
    backgroundColor: "#6ad9fc"
  }
})