import React,{useState} from 'react'
import {View,Button,TextInput,ScrollView,StyleSheet} from 'react-native'

import firebase from '../database/firebase'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import { State } from 'react-native-gesture-handler'
import { Picker } from 'react-native'

const crearUsuario = (props) => {
    const [state, setState]= useState({
        usuario: "",
        pass: "",
        nombre: "",
        rol: ""
    });
    const handleChangeText = (name,value) => {
        setState({ ...state, [name]: value })
    };
    const crearNuevoUsuario = async () => {
        if (state.usuario === ''){
            alert('Ingrese un usuario')
        } else {
            if (state.pass === ''){
                alert('Ingrese una contraseña')
            } else {
                if (state.nombre === ''){
                    alert('Ingrese el nombre del usuario')
                } else {
                    if (state.rol === ''){
                        alert('Debe escoger un rol')
                        } else {
                        try{
                        await firebase.db.collection('users').add({
                            usuario: state.usuario,
                            pass: state.pass,
                            nombre: state.nombre,
                            rol: state.rol
                        })                
                        props.navigation.navigate('login');
                        alert('Se agrego el usuario ' + state.nombre + ' exitosamente.')

                        } catch (error){
                            console.log(error);
                        }
                    }
                }
            }
        }
    }
    const cancelar = async () => {
        props.navigation.navigate('login');
    }
    return (
      <ScrollView style={styles.container}>
          <View style={styles.inputGroup}>
              <TextInput 
              placeholder="Usuario" 
              onChangeText={(value) => handleChangeText('usuario', value)} />
          </View>
          <View style={styles.inputGroup}>
              <TextInput placeholder="Contraseña" 
              onChangeText={(value) => handleChangeText('pass', value)}/>
          </View>
          <View style={styles.inputGroup}>
              <TextInput placeholder="Nombre" 
              onChangeText={(value) => handleChangeText('nombre', value)}/>
          </View>
          <View style={styles.inputGroup}>
            
              <TextInput placeholder="Rol" 
              onChangeText={(value) => handleChangeText('rol', value)}/>
          </View>
          <View>
              <Button title="Crear Usuario" onPress={() => crearNuevoUsuario()}/>
              <Button title="Cancelar"  onPress={() => cancelar()}/>
          </View>
      </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:35
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc'
    }

})
export default crearUsuario