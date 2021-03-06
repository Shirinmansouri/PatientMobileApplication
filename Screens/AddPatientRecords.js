import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight, FlatList ,Button} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import {GlobalStyles} from '../Style/Global';
import DropDownPicker from 'react-native-dropdown-picker';
import { Table, Row} from 'react-native-table-component';
import ajax from './ajax';
import { any } from 'prop-types';


class AddPatientRecords extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      value: 'Blood Pressure',
      patient: [any],
      dateTime: '', 
      nurseName: '', 
      type: '',
      category: '',
      singleValue: '',
      date: new Date(Date.now()),
      options : ['one', 'two', 'three'],
      defaultOption : 'one',
    };

  }

   //use API
   async componentDidMount(){
    //get patient from API
    const patient = await ajax.fetchPatientbyId(this.props.route.params.patientId)
    //set records to state
    this.setState({patient});
   }

  addPatientRecord = async () => {
      // POST request using fetch with async/await
    //for non 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dateTime: this.state.dateTime, 
          nurseName: this.state.nurseName, 
          type: this.state.type,
          category: "Heart Beat Rate",
          singleValue: this.state.singleValue,
        })
    };

   try{

    const response = await fetch('http://127.0.0.1:5000/patients/'+ this.props.route.params.patientId +"/tests", requestOptions).catch(err => console.log(err));
    // console.log(response._bodyBlob)
    // console.log(response)
    // const data = await response.json();
    // console.log(data)
  } catch (error) {
    console.error(error);
  } 
  
  this.props.navigation.navigate('Add Patient Record')
}

  //  showPicker = () => {
  //    this.setState({isPickerShow:true});
  //  }
  //  onChange = (event, value) => {
  //  this.setState({date:value});
  //  if (Platform.OS === 'android') {
  //     this.setState({isPickerShow:false});
  //  }
  // }
  // handleDate=(text)=>
  // {
  //   this.setState({date:text});

  // }

  render()
  {
    const { open, value } = this.state;
    return (
   <View style={GlobalStyles.container}>
     <View
      style={{
        height: 20,
      }} />
    <View style={[GlobalStyles.patientData , {backgroundColor: 'silver' }]}>
     <Table borderStyle={"none"}>
        <Row
          data={['HealthId:', this.state.patient[0].servicePlan]}
          flexArr={[1, 1]}
        />
        <Row
          data={['Name:', this.state.patient[0].firstName + ' ' + this.state.patient[0].lastName]}
          flexArr={[1,1]}
        />
        <Row
          data={['Date of birth:', this.state.patient[0].dateOfBirth]}
          flexArr={[1, 1]}
         />
        <Row
          data={['Address:', this.state.patient[0].address]}
          flexArr={[1, 1]}
         />
      </Table>
     </View>
     <View
      style={{
        height: 20,
      }}
    />

    <View style={[GlobalStyles.contentflex , {flex: 6 }]} >
    <View style={{flex: 0.8, flexDirection: 'row' }}>
        <Text style={[GlobalStyles.titleText]}>Date / Time:      </Text>
        <TextInput style={GlobalStyles.textInputStyles} onChangeText={(text)=> {this.setState({dateTime: text});}}/>
      </View>
      <View style={{flex: 0.8, flexDirection: 'row' }}>
        <Text style={[GlobalStyles.titleText]}>Nurse Name:    </Text>
        <TextInput style={GlobalStyles.textInputStyles} onChangeText={(text)=> {this.setState({nurseName: text});}}/>
      </View>
      <View style={{flex: 0.8, flexDirection: 'row' }}>
        <Text style={[GlobalStyles.titleText]}>Type:                   </Text>
        <TextInput style={GlobalStyles.textInputStyles} onChangeText={(text)=> {this.setState({type: text});}}/>
      </View>
      <View style={{flex: 0.8, flexDirection: 'row' }}>
        <Text style={[GlobalStyles.titleText]}>Reading/Value:</Text>
        <TextInput style={GlobalStyles.textInputStyles} onChangeText={(text)=> {this.setState({singleValue: text});}}/>
      </View>
      <View style={{flex: 4, flexDirection: 'row' }}>
        <Text style={[GlobalStyles.titleText]}>Type Of Data:</Text>
        
        {/* <RadioButton.Group
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
      >
        <View>
          <Text>Blood Pressure (X/Y mmHg)</Text>
          <RadioButton value="Blood Pressure" />
        </View>
        <View>
          <Text>Respiratory Rate (X/min)</Text>
          <RadioButton value="Respiratory Rate" />
        </View>
        <View>
          <Text>Blood Oxygen Level (X%)</Text>
          <RadioButton value="Blood Oxygen Level" />
        </View>
        <View>
          <Text>Heartbeat Rate (X/min)</Text>
          <RadioButton value="Heart Beat Rate" />
        </View>
        </RadioButton.Group> */}
      </View> 
      <View style={{flex: 1 , flexDirection: 'row' }}>
        <TouchableHighlight
           onPress={this.addPatientRecord} style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]}>
          <Text style = {GlobalStyles.appButtonText}> Add</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Add Patient Record')} style = {[GlobalStyles.appButtonContainer ,  {flex: 1 ,flexDirection:'column' }]} >
          <Text style = {GlobalStyles.appButtonText}> Cancel</Text>
        </TouchableHighlight>
      </View>
    </View>
    <View
      style={{
        height: 20,
      }}
    />
</View>
    );
  }
}
export default AddPatientRecords;
