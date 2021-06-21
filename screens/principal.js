import React, {useEffect,useState} from 'react'
import {View,Text,Button, ScrollView} from 'react-native'
import firebase from '../database/firebase'
import { ListItem, Avatar} from 'react-native-elements'

const principal = (props) => {

     const [users, setUsers] = useState([])
     
     useEffect(() => {
        firebase.db.collection("trabajos").onSnapshot(querySnapshot => {
            const users = [];
                querySnapshot.docs.forEach(doc => {
                   const {Nombre,descripcionCorta,estatus,evidencias}=doc.data()
                   users.push({
                       id: doc.id,
                       Nombre,
                       descripcionCorta,
                       estatus,
                       evidencias
                   })
                });
            setUsers(users)
        })
     }, [])
     
    const crearTrabajo = async () => {
        props.navigation.navigate('crearTrabajo');
    }
    return (
      <ScrollView>
          <Button title="Crear Trabajo" onPress={() => crearTrabajo()}/>
          
          {
              users.map(user => {
                  return (
                    <ListItem key={user.id} bottomDivider onPress={() => {
                        props.navigation.navigate('detalleTrabajo', {
                            userId: user.id
                        })
                    }}>
                        <ListItem.Chevron/>
                        <Avatar source={{uri:'https://www.gob.mx/cms/uploads/article/main_image/64652/secundaria_cierreagr.jpg'}}
                        rounded/>
                        <ListItem.Content>
                            <ListItem.Title>{user.Nombre}</ListItem.Title>
                            <ListItem.Subtitle>{user.descripcionCorta}</ListItem.Subtitle>
                            <ListItem.Subtitle>{user.estatus}</ListItem.Subtitle>
                            <ListItem.Subtitle>Evidencia: {user.evidencias}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                  )
              })
          }
      </ScrollView>
    )
}
export default principal