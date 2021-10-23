
import React, { Component } from 'react'
import { StyleSheet,View, Text} from 'react-native'
import {GlobalStyles} from '../Style/Global';
import { DataTable } from 'react-native-paper';
import { Table, Row} from 'react-native-table-component';


class ViewPatientRecordsScreen extends Component {
   constructor(props){
     super(props);
   }
   render(){
     return (
    <View style={GlobalStyles.recordContainer}>
     <View style={GlobalStyles.patientData}>
     <Table borderStyle={"none"}>
        <Row
          data={CONTENT.firstRow}
          flexArr={[1, 1]}
        />
        <Row
          data={CONTENT.secondRow}
          flexArr={[1,1]}
        />
        <Row
          data={CONTENT.thirdRow}
          flexArr={[1, 1]}
         />
        <Row
          data={CONTENT.fourthRow}
          flexArr={[1, 1]}
         />
      </Table>  
     </View>
     <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{flex: 1}}>#</DataTable.Title>
          <DataTable.Title style={{flex: 2}}>Date & Time  </DataTable.Title>
          <DataTable.Title style={{flex: 2}}>Type of Data </DataTable.Title>
          <DataTable.Title style={{justifyContent:"flex-end", flex: 2}}>Reading/Value</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row >
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>1</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>2021-09-30 11:00</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>Blood Pressure</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Text style={GlobalStyles.recordRow}>120/80</Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>2</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>2021-09-30 11:00</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>Blood Oxygen Level</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Text style={GlobalStyles.recordRow}>98%</Text>
          </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row >
          <DataTable.Cell style={{flex: 1}}>
              <Text style={GlobalStyles.recordRow}>3</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>2021-09-30 11:00</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 3}}>
              <Text style={GlobalStyles.recordRow}>Heartbeat Rate</Text>
          </DataTable.Cell>
          <DataTable.Cell style={{flex: 2}} numeric>
              <Text style={GlobalStyles.recordRow}>75</Text>
          </DataTable.Cell>
        </DataTable.Row>

      </DataTable>
      </View>
    </View>
  );
  }
}

const CONTENT = {
  firstRow: ['HealthId:', '1234'],
  secondRow: ['Name:', 'John Doe'],
  thirdRow: ['Age:', '36'],
  fourthRow: ['Address:', '123 SomeStreet', ]
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'orange' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#2ecc71' },
  row: { height: 28 },
  text: { textAlign: 'center' },
});

export default ViewPatientRecordsScreen;
