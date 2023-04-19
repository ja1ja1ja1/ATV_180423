import * as React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity,FlatList,ScrollView } from 'react-native';
import { Entypo,Feather } from '@expo/vector-icons';


export default function Bob() {
    return (
      <View style={styles.container}>
      <Text style={styles.subTitulo}>BOB ESPONJA</Text>
        <Image style={styles.titulo} source={require('../assets/sobe.gif')} />
        <ScrollView>
        
            <View>
             <Text style={styles.subTitulo}><Entypo name="brush" size={24} color="black" />    FANART</Text> 
              <Image style={styles.img} source={require('../assets/fanart.jpg')} />

              <Text style={styles.subTitulo}><Feather name="aperture" size={24} color="black" />    GIF'S</Text> 
              
              
              <Image style={styles.gif} source={require('../assets/wou.gif')} />
              <Image style={styles.gif} source={require('../assets/boblendo.gif')} />
              
              
              
              
            </View>
          
        </ScrollView>
      </View>
    );
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#87CEFA'
  },
  titulo:{
    width: 370,
    height: 100, 
    marginBottom:5
  },
  subTitulo: {
    position:'relative',
    fontSize: 15,
    fontWeight: 'bold',
    left:10
  },
  img:{
    width: 300,
    height: 400, 
    borderRadius: 5,
    marginTop:20,
    marginBottom:20
  },
  gif:{
    width: 300,
    height: 100, 
    borderRadius: 5,
    marginTop:20,
    marginBottom:20
  }

});


  
  