import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ViewPatientsScreen from './Screens/ViewPatientScreen';
import { StyleSheet,TextInput,View, Text, TouchableHighlight,Button,Alert,TouchableOpacity} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewPatientRecordsScreen from './Screens/ViewPatientRecordsScreen'
import ListAllPatientsScreen from './Screens/ListAllPatientsScreen'
import  HomeScreen from './Screens/HomeScreen';
import AddPatientRecords from './Screens/AddPatientRecords';



const Stack=createNativeStackNavigator()

function StackScreens()
{
  return (
  <NavigationContainer>
      <Stack.Navigator  >
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Add Patient Record" component={AddPatientRecords}  />
        <Stack.Screen name="View Patient Record" component={ViewPatientRecordsScreen}  />
      </Stack.Navigator>
  </NavigationContainer>

  );
}


function App ()
{
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
       {
           StackScreens()
       }

  </View>
);
}




export default App;

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
      marginHorizontal: 5,
      marginVertical: 40
  }
});
