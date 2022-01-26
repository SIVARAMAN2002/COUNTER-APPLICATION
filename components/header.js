import React from 'react';

import { StyleSheet,Text } from 'react-native';

const Header = () =>
{
    return(
       
        <View style={Styles.header}>
            <Text style={Styles.title}>TODO</Text>
        </View>
    );
}

const Styles=StyleSheet.create({
    header:
    {
       height:80,
       paddingTop:38,
       backgroundColor:'coral'
    },
title:
{
  textAlign:'center',
  color:"black"
}
});


export default Header;