import React,{useState} from 'react'
import {View,Button,TextInput,ScrollView,StyleSheet} from 'react-native'
import firebase from '../database/firebase'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import { State } from 'react-native-gesture-handler'

const paginaVacia = (props) => {
    const [state, setState]= useState({
        usuario: "",
        pass: ""
    });
    const handleChangeText = (name,value) => {
        setState({ ...state, [name]: value })
    };
    return (
      <ScrollView style={styles.container}>
      
          <View>
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
export default paginaVacia