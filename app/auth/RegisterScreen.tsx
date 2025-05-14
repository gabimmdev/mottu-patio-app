import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function RegisterScreen({ navigation }) {
const { control, handleSubmit } = useForm();

const onSubmit = data => {
console.log('Cadastrar funcionário:', data);
navigation.navigate('Login');
};

return (
<View style={styles.container}>
<Text style={styles.title}>Cadastro</Text>
<Controller
    control={control}
    name="nome"
    defaultValue=""
    render={({ field: { onChange, value } }) => (
      <TextInput
        placeholder="Nome"
        style={styles.input}
        onChangeText={onChange}
        value={value}
      />
    )}
  />

  <Controller
    control={control}
    name="email"
    defaultValue=""
    render={({ field: { onChange, value } }) => (
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={onChange}
        value={value}
      />
    )}
  />

  <Controller
    control={control}
    name="senha"
    defaultValue=""
    render={({ field: { onChange, value } }) => (
      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        onChangeText={onChange}
        value={value}
      />
    )}
  />

  <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} />
</View>
);
}

const styles = StyleSheet.create({
container: { padding: 20 },
title: { fontSize: 20, marginBottom: 20 },
input: {
borderWidth: 1,
padding: 8,
marginBottom: 10,
borderRadius: 4,
},
});