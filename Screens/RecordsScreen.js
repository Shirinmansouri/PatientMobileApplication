import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight, FlatList ,Button} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import {GlobalStyles} from '../Style/Global';
import DropDownPicker from 'react-native-dropdown-picker';

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



export default RecordsScreen;

const styles=StyleSheet.create(
  {
    titleText:{
      fontSize: 20,
      fontWeight: 'bold',
    }

  }
)
