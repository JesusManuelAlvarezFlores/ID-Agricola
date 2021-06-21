import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

 const Stack =createStackNavigator()

 import principal from './screens/principal';
 import login from './screens/login';
 import crearUsuario from './screens/crearUsuario';
 import detalleTrabajo from './screens/detalleTrabajo';
 import crearTrabajo from './screens/crearTrabajo';
function MyStack(){
  return(
    <Stack.Navigator>
        <Stack.Screen name="login" component={login} options={{title: 'ID-Agricola App'}}/>
        <Stack.Screen name="crearUsuario" component={crearUsuario}/>
        <Stack.Screen name="principal" component={principal}/>
        <Stack.Screen name="detalleTrabajo" component={detalleTrabajo}/>
        <Stack.Screen name="crearTrabajo" component={crearTrabajo}/>
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
