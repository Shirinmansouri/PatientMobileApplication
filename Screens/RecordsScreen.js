import React, { Component } from 'react'
import { StyleSheet,TextInput,View, Text, TouchableHighlight } from 'react-native'

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

/*class AddPatientRecords extends Component{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
<View style={styles.container}/>
    );
  }
}
*/
export default RecordsScreen;

const styles=StyleSheet.create(
  {
    titleText:{
      fontSize: 20,
      fontWeight: 'bold',
    }

  }
)
