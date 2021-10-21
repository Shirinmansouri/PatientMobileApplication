import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PatientsScreen from './PatientsScreen'
import RecordsScreen from './RecordsScreen'
import Icon  from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

const Tab=createMaterialTopTabNavigator();

function App ()
{
  return (
  <NavigationContainer>
  <Tab.Navigator



  screenOptions={{
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
      else if (route.name==='Records')
      {
        iconName="list";
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
    name ="Patients"
    component={PatientsScreen}
  />
  <Tab.Screen
    name ="Records"
    component={RecordsScreen}
/>
  </Tab.Navigator>
  </NavigationContainer>
);
}

export default App;
