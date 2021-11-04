import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight, FlatList ,Button} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import {GlobalStyles} from '../Style/Global';
import DropDownPicker from 'react-native-dropdown-picker';

class AddPatientRecords extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      FirstName:'Shirin',
      LastName:'Mansouri',
      Age:'56',
      Address:'l4j6t6',
      DateOfBirth:'1960/01/01',
      PatientId: '123456',
      date: new Date(Date.now()),
      isPickerShow: false,
      options : ['one', 'two', 'three'],
      defaultOption : 'one',
      item : null,
    };
  }
   showPicker = () => {
     this.setState({isPickerShow:true});
   }
   onChange = (event, value) => {
   this.setState({date:value});
   if (Platform.OS === 'android') {
      this.setState({isPickerShow:false});
   }
  }
  handleDate=(text)=>
  {
    this.setState({date:text});

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
    <View style={[GlobalStyles.contentflex, {flex:3 ,backgroundColor: 'silver' ,
    justifyContent:'flex-start' ,marginVertical:8 , marginVertical : 50}]} >
     <View style={{flex: 4, flexDirection: 'row' }}>
     <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>First Name:</Text>
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
    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Date Of Birth:</Text>
    <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column' }]}>{this.state.DateOfBirth}</Text>
    </View>
    <View style={{flex: 4, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Age:</Text>
    <Text style={[GlobalStyles.titleText , {flex: 1 ,flexDirection:'column' }]}>{this.state.Age}</Text>
    </View>
    </View>

    <View style={[GlobalStyles.contentflex , {flex: 6 }]} >
    <View style={{flex: 1, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Date/Time:</Text>
    <TextInput style={[GlobalStyles.textInputStyles, {flex: 2 ,flexDirection:'column' }]} placeholder='MM/DD/YYYY' />


    </View>
    <View style={{flex: 1, flexDirection: 'row' }}>

    <Text style={[GlobalStyles.titleText, {flex: 1 ,flexDirection:'column' }]}>Type Of Data:</Text>
    <DropDownPicker
        items={[
            {label: 'Blood Pressure (X/Y mmHg)', value: 'Blood Pressure (X/Y mmHg)' , selected: true},
            {label: 'Respiratory Rate (X/min)', value: 'Respiratory Rate (X/min)'},
            {label: 'Blood Oxygen Level (X%)', value: 'Blood Oxygen Level (X%)'},
            {label: 'Heartbeat Rate (X/min)', value: 'Heartbeat Rate (X/min)'},
        ]}
        defaultNull={this.state.item}
        placeholder="Select an item"
        containerStyle={GlobalStyles.dropDownContainer}
        style={{backgroundColor: '#fafafa' ,borderWidth: 2 ,flexDirection: 'column' , flex: 4}}
        onChangeItem={
          (item)=> {
          this.setState({
            item: item.value

        });
      }}
    />
    </View>
    <View style={{flex: 1, flexDirection: 'row' }}>
    <Text style={[GlobalStyles.titleText]}>Reading/Value:</Text>
    <TextInput
         style={GlobalStyles.textInputStyles}
       />
    </View>
    <View style={{flex: 1 , flexDirection: 'row' }}>
    <TouchableHighlight
       style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>
       <Text style = {GlobalStyles.appButtonText}> Add</Text>
    </TouchableHighlight>
    <TouchableHighlight style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>

       <Text style = {GlobalStyles.appButtonText}> Cancel</Text>
    </TouchableHighlight>
    </View>
    </View>
      <View style={[GlobalStyles.contentflex , {flex: 2 ,backgroundColor: 'white'}]} >
      </View>
</View>


    );
  }
}
export default AddPatientRecords;
