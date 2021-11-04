import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PatientsScreen from './Screens/PatientsScreen';
import ReportsScreen from './Screens/ReportsScreen';
import AddPatientRecords from './Screens/AddPatientRecords';
import Icon  from 'react-native-vector-icons/Ionicons';
import  HomeScreen from './Screens/HomeScreen';
import ViewPatientsScreen from './Screens/ViewPatientScreen';
import { StyleSheet,TextInput,View, Text, TouchableHighlight,Button,Alert,TouchableOpacity} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewPatientRecordsScreen from './Screens/ViewPatientRecordsScreen'
import ListAllPatientsScreen from './Screens/ListAllPatientsScreen'
Icon.loadFont()
const Tab=createMaterialTopTabNavigator();
const Stack=createNativeStackNavigator()

function PatientsMenu() {
  return (

     <Tab.Navigator>
        <Tab.Screen name="New Patients"
        component={AddPatientRecords}
        options={{ headerShown: true }}
      />
      <Tab.Screen
        name="View Patients"
        component={ViewPatientRecordsScreen}
        options={{ headerShown: true }}
      />
    <Tab.Screen
        name="List Patients"
        component={ListAllPatientsScreen}
        options={{ headerShown: true }}
      />
  </Tab.Navigator>

  );
}

function App ()
{
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>

  <NavigationContainer>

  <Tab.Navigator
  screenOptions=
  {{

    tabBarLabelStyle: { fontSize: 40 },
    tabBarItemStyle: { width: 100 },
    tabBarStyle: { backgroundColor: 'powderblue' }},

    ({route})=>({
    tabBarIcon : ({focused,size,color}) => {
      let iconName;
      if(route.name=== 'Patients'){
        iconName="people";
        size= focused? 25 :20;
      }
      else if (route.name==='Reports')
      {
        iconName="list";
            size= focused? 25 :20;
      }
      else if (route.name==='Home')
      {
        iconName="home";
            size= focused? 25 :20;
      }
      return (
            <Icon  size={size} name={iconName}/>
        );
    }
    })
  }
    >

    <Tab.Screen
      name ="Home"
      component={HomeScreen}
    />
    <Tab.Screen
    name ="ViewPatients"
    component={ViewPatientsScreen}
  />
  <Tab.Screen
    name ="Patients"
    component={PatientsMenu}
  />
  <Tab.Screen
    name ="Reports"
    component={ReportsScreen}
/>
  </Tab.Navigator>
  </NavigationContainer>
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
