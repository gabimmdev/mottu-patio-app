import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';
import MotoListScreen from '../motos/MotoListScreen';
import ConsultaPlacaScreen from '../placa/ConsultaPlacaScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Motos" component={MotoListScreen} />
        <Stack.Screen name="Consulta" component={ConsultaPlacaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
