
import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight } from 'react-native'

 class PatientsScreen extends Component {
   constructor(props){
     super(props);
   }
   render(){
    return (
      <View style={{flex:1 , justifyContent: 'center' , alignItems: 'center'}}>
<Text>Patients </Text>
      </View>
    );
  }
}

export default PatientsScreen;
