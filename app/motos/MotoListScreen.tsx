import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockMotos = [
{ id: '1', placa: 'ABC1234', status: 'Na Vaga' },
{ id: '2', placa: 'XYZ9876', status: 'Saiu da Vaga' },
];

export default function MotoListScreen() {
const [motos, setMotos] = useState([]);

useEffect(() => {
// chamada API Java
setMotos(mockMotos);
}, []);

return (
<View style={styles.container}>
<Text style={styles.title}>Motos no Pátio</Text>
<FlatList
data={motos}
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={styles.item}>
<Text style={styles.placa}>{item.placa}</Text>
<Text>Status: {item.status}</Text>
</View>
)}
/>
</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, padding: 16 },
title: { fontSize: 22, marginBottom: 12 },
item: {
backgroundColor: '#eee',
padding: 12,
marginVertical: 6,
borderRadius: 6,
},
placa: { fontWeight: 'bold', fontSize: 16 },
});