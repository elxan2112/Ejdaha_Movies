import React, {Component} from 'react';
import {styles} from './myStyles';
import {View, Text,} from 'react-native';

const MovieLists = (dataJson) => dataJson.jsonFile.map(all =>{
    console.log(dataJson)
    return(
    
    <Text style={styles.textstyle}>{all.show.name}</Text>
    )
  })

  export default MovieLists;