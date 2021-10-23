import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight, FlatList } from 'react-native'
import {GlobalStyles} from '../Style/Global';
class  RecordsScreen extends Component {
   constructor(props){
     super(props);
   }
   render()
   {
    return (
      <View style={{flex:1 , justifyContent: 'center' , alignItems: 'center'}}>
<Text>Records </Text>
      </View>
    );
  }
}

class AddPatientRecords extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      FirstName:props.FirstName,
      LastName:props.LastName,
      Age:props.Age,
      Address:props.Address,
      DateOfBirth:props.DateOfBirth,
      PatientId: props.PatientId,
    };
  }
  handleFistName=(text)=>
  {
    this.setState({FirstName:text});

  }
  handleLastName=(text)=>{
    this.setState({LastName:text});
  }
  handleAge=(text)=>{
    this.setState({Age:text});
  }
  handleAddress=(text)=>{
    this.setState({Address:text});
  }
  handleDateOfBirth=(text)=>{
    this.setState({DateOfBirth:text});
  }
  render()
  {
    return (
   <View style={GlobalStyles.container}>
    <View style={[GlobalStyles.contentflex, {flex:1 ,backgroundColor: 'silver' ,
    justifyContent:'flex-start' ,marginVertical:8}]} >
     <View style={{flex: 4, flexDirection: 'row' }}>
     <Text style={[GlobalStyles.titleText, {flex: 2 ,flexDirection:'column' }]}>First Name:</Text>
     <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column'}]}>{this.state.FirstName}</Text>
    </View>
    <View style={{flex: 4, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>LastName:</Text>
    <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column'}]}>{this.state.LastName}</Text>
     </View>
     <View style={{flex: 4, flexDirection: 'row' }}>
     <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Address:</Text>
     <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column'}]}>{this.state.Address}</Text>
    </View>
    <View style={{flex: 4, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 2 ,flexDirection:'column' }]}>Date Of Birth:</Text>
    <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column' }]}>{this.state.DateOfBirth}</Text>
    </View>
    <View style={{flex: 4, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 2 ,flexDirection:'column' }]}>Age:</Text>
    <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column' }]}>{this.state.Age}</Text>
    </View>
    </View>

    <View style={[GlobalStyles.contentflex , {flex: 4 }]} />



    </View>
    );
  }
}

export default AddPatientRecords;

const styles=StyleSheet.create(
  {
    titleText:{
      fontSize: 20,
      fontWeight: 'bold',
    }

  }
)
