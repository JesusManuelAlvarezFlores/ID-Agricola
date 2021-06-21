import React,{useState,useEffect} from 'react'
import {View,Button,Text,TextInput,ScrollView,ActivityIndicator ,StyleSheet} from 'react-native'
import firebase from '../database/firebase'

const detalleTrabajo = (props) => {
    const initialState = {
      id: "",
      Nombre: "",
      descripcionCorta: "",
      descripcionLarga: "",
      evidencias: "",
      estatus: ""
    };
    const [user, setUser] = useState(initialState);
    const [loading, setLoading] = useState(true);

    const getUserById = async (id) => {
       const dbRef =  firebase.db.collection("trabajos").doc(id);
       const doc = await dbRef.get();
       const user = doc.data();
       setUser({...user,id: doc.id});
       //setLoading(false);
       //console.log(user);
    };  
      
    useEffect(() => {
        getUserById(props.route.params.userId);
    },[]);
    
    const handleChangeText = (value , prop) => {
        setUser({ ...user, [prop]: value })
    };
    const cancelar = async () => {
        props.navigation.navigate('principal');
    };
    
    const actualizarTrabajo = async () => {
        const dbRef = firebase.db.collection("trabajos").doc(user.id);
        await dbRef.set({
        Nombre: user.Nombre,
        descripcionCorta: user.descripcionCorta,
        descripcionLarga: user.descripcionLarga,
        estatus: "Terminado",
        evidencias: user.evidencias
        });
        setUser(initialState);
        props.navigation.navigate("principal");
    };

    return (
      <ScrollView>
      
      <View>
        <Text >Trabajo:</Text>
        <Text >{user.Nombre}</Text>
      </View>
      <View>
        <Text >{user.descripcionCorta}</Text>
      </View>
      <View>
          <Text >Indicaciones:</Text>
          <Text >{user.descripcionLarga}</Text>
      </View>
      <View>
        <TextInput 
          placeholder="Evidencias" 
          //style={styles.inputGroup}
          value={user.evidencias} 
          onChangeText={(value) => handleChangeText(value , "evidencias")}
        />
      </View>
          <Button title="Terminar" onPress={() => actualizarTrabajo()} color="#19AC52" />
          <Button title="Cancelar" onPress={() => cancelar()}/>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    btn: {
      marginBottom: 7,
    },
  });
export default detalleTrabajo