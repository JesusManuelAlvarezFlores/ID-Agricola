import React,{useState} from 'react'
import {View,Button,TextInput,ScrollView,StyleSheet} from 'react-native'
import firebase from '../database/firebase'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import { State } from 'react-native-gesture-handler'

const crearTrabajo = (props) => {
    const [state, setState]= useState({
        Nombre: "",
        descripcionCorta: "",
        descripcionLarga: "",
        estatus: "Por Iniciar",
        evidencias: ""
    });
    const handleChangeText = (name,value) => {
        setState({ ...state, [name]: value })
    };
    const crearNuevoUsuario = async () => {
        if (state.usuario === ''){
            alert('Ingrese un Nombre')
        } else {
            if (state.pass === ''){
                alert('Ingrese una descripcion corta')
            } else {
                if (state.nombre === ''){
                    alert('Ingrese una descripcion larga')
                } else {
                    try{
                    await firebase.db.collection('trabajos').add({
                        Nombre: state.Nombre,
                        descripcionCorta: state.descripcionCorta,
                        descripcionLarga: state.descripcionLarga,
                        estatus: 'Por Iniciar',
                        evidencias: ''
                    })                
                    props.navigation.navigate('principal');
                    alert('Se agrego la tarea ' + state.Nombre + ' exitosamente.')
                    } catch (error){
                        console.log(error);
                    }
                }
            }
        }
    }
    const cancelar = async () => {
        props.navigation.navigate('Principal');
    }
    return (
      <ScrollView style={styles.container}>
          <View style={styles.inputGroup}>
              <TextInput 
              placeholder="Nombre" 
              onChangeText={(value) => handleChangeText('Nombre', value)} />
          </View>
          <View style={styles.inputGroup}>
              <TextInput placeholder="Descripcion Corta" 
              onChangeText={(value) => handleChangeText('descripcionCorta', value)}/>
          </View>
          <View style={styles.inputGroup}>
              <TextInput placeholder="Descripcion Larga" 
              onChangeText={(value) => handleChangeText('descripcionLarga', value)}/>
          </View>
          <View>
              <Button title="Crear Tarea" onPress={() => crearNuevoTrabajo()}/>
              <Button title="Cancelar" onPress={() => cancelar()}/>
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
export default crearTrabajo