import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, SafeAreaView, TouchableHighlight,Button,Alert,TouchableOpacity} from 'react-native'
import {GlobalStyles} from '../Style/Global';
 class ViewPatientsScreen extends Component {
   constructor(props){
     super(props);
   }
   render(){
     return (
      <View style={GlobalStyles.container}>
      <View style={[GlobalStyles.contentflex, {flex:3 ,backgroundColor: 'silver' ,
      justifyContent:'flex-start' ,marginVertical:8}]} >

       <View style={{flex: 1, flexDirection: 'row' }}>
       <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>First Name</Text>
       <TextInput
         style={GlobalStyles.textInputStyles}
       />
      </View>
      <View style={{flex: 1, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>LastName:</Text>
    <TextInput
         style={GlobalStyles.textInputStyles}
       />
     </View>
     <View style={{flex: 1, flexDirection: 'row' }}>
     <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Health Id:</Text>
     <TextInput
         style={GlobalStyles.textInputStyles}
       />
    </View>
    <View style={{flex: 1 , flexDirection: 'row' }}>
    <TouchableHighlight
       style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>
       <Text style = {GlobalStyles.appButtonText}>Find</Text>
    </TouchableHighlight>
    </View>
    
    <View style={[GlobalStyles.contentflex , {flex: 5 }]} >
    <View style={{flex: 1, flexDirection: 'row' }}>
      <Text>Date is here</Text>
      
    </View>
        
    </View>
    </View>
    </View>
  );
  }
}
export default ViewPatientsScreen;