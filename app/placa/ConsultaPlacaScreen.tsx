import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function ConsultaPlacaScreen() {
const [placa, setPlaca] = useState('');
const [dados, setDados] = useState<any>(null);

const consultar = () => {
// Aqui você faria o web scraping via back-end
// Simulando:
setDados({
marca: 'Honda',
modelo: 'CB 500',
ano: 2021,
});
};

return (
<View style={styles.container}>
<Text style={styles.title}>Consultar por Placa</Text>
<TextInput placeholder="Digite a placa" style={styles.input} value={placa} onChangeText={setPlaca} />
<Button title="Consultar" onPress={consultar} />
{dados && (
    <View style={styles.resultado}>
      <Text>Marca: {dados.marca}</Text>
      <Text>Modelo: {dados.modelo}</Text>
      <Text>Ano: {dados.ano}</Text>
    </View>
  )}
</View>
);
}

const styles = StyleSheet.create({
container: { padding: 20 },
title: { fontSize: 22, marginBottom: 12 },
input: {
borderWidth: 1,
padding: 8,
marginBottom: 10,
borderRadius: 4,
},
resultado: {
marginTop: 20,
backgroundColor: '#eee',
padding: 12,
borderRadius: 6,
},
});