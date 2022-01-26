import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView ,ImageBackground,Image, ScrollView,StatusBar,TouchableOpacity,Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const image={uri:"https://reactjs.org/logo-og.png"}

const Navigation =() =>
{

    const[count,myCount]=useState(0)

   
    return    (
    
    <View style={styles.container}>
       
        <Text style={{textAlign:'center', marginTop:30,fontSize:20}}>COUNTER APPLICATION</Text>

        <Text>{count}</Text>
        <TouchableOpacity
     
        onPress={()=>{myCount(count+1)}}>
            <Text>press</Text>
      </TouchableOpacity>
         
    </View>
  

    
    );

}

const styles = StyleSheet.create({
    container: {
         height:100,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:'coral',
        
    },
   
    button:
    {
        color:'red',
        margin:30,
          padding:30
    },
    
    pentagon: {
        alignItems:'center',
        padding:60,
        backgroundColor: 'transparent'
      },
      pentagonInner: {
        width: 300,
        borderBottomColor: 'red',
        borderBottomWidth: 0,
        borderLeftColor: 'transparent',
        borderLeftWidth: 18,
        borderRightColor: 'transparent',
        borderRightWidth: 18,
        borderTopColor: 'red',
        borderTopWidth: 50
      },
      pentagonBefore: {
        position: 'absolute',
        height: 0,
        width: 0,
        top: -35,
        left: 0,
        borderStyle: 'solid',
        borderBottomColor: 'red',
        borderBottomWidth: 35,
        borderLeftColor: 'transparent',
        borderLeftWidth: 45,
        borderRightColor: 'transparent',
        borderRightWidth: 45,
        borderTopWidth: 0,
        borderTopColor: 'transparent',
      },

      triangleShape: {
          padding:30,
        marginLeft:50,
        width: 0,
        height: 0,
        borderLeftWidth: 70,
        borderRightWidth: 70,
        borderBottomWidth: 140,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#f50057'
      },
  ss:{
   padding:20,
   
  }
    
  });

  export default Navigation;