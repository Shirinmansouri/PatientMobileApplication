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
       <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>First Name:</Text>
       
       <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column'}]}>Alex</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>LastName:</Text>
    <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column'}]}>Ro</Text>
     </View>
     <View style={{flex: 1, flexDirection: 'row' }}>
     <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Health Id:</Text>
     <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column'}]}>John</Text>
    </View>
    
    <View style={[GlobalStyles.contentflex , {flex: 4 }]} >
    <View style={{flex: 4, flexDirection: 'row' }}>
      <Text>Date is here</Text>
      
    </View>
        <View style={{ flex: 1, backgroundColor:"white"}}/>
    </View>
    </View>
    </View>
  );
  }
}
export default ViewPatientsScreen;