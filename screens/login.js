import React,{useState} from 'react'
import {View,Button,TextInput,ScrollView,StyleSheet,Image} from 'react-native'
import firebase from '../database/firebase'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import { State } from 'react-native-gesture-handler'
import { color } from 'react-native-elements/dist/helpers'

const login = (props) => {
    const [state, setState]= useState({
        usuario: "",
        pass: ""
    });
    const handleChangeText = (name,value) => {
        setState({ ...state, [name]: value })
    };
    const crearNuevoUsuario = async () => {
        props.navigation.navigate('crearUsuario');
    }
    const iniciarSesion = async () => {
        if (state.usuario === ''){
            alert('Ingrese un usuario')
        } else {
            if (state.pass === ''){
                alert('Ingrese una contraseña')
            } else {
                try{

                    props.navigation.navigate('principal');
                } catch (error){
                    console.log(error);
                }
            }
        }        
    }
    
    return (
      <ScrollView style={styles.container}>
        <Image source={{uri: 'https://cdn.evbuc.com/images/108240965/461460577656/1/original.20200810-234926'}} style={{height: 200 ,width: 200}}/>
         <View style={styles.inputGroup}>
              <TextInput 
              placeholder="Usuario" 
              onChangeText={(value) => handleChangeText('usuario', value)} />
          </View>
          <View style={styles.inputGroup}>
              <TextInput placeholder="Contraseña" 
              onChangeText={(value) => handleChangeText('pass', value)}/>
          </View>
          <View>
              <Button title="Ingresar" onPress={() => iniciarSesion()}/>
          </View>
          <View style={{flex: 1, marginTop: 2}}>

              <Button title="Crear Usuario" onPress={() => crearNuevoUsuario()}/>
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
export default login