import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PatientsScreen from './PatientsScreen'
import RecordsScreen from './RecordsScreen'
import Icon  from 'react-native-vector-icons/Ionicons'
Icon.loadFont()

const Tab=createBottomTabNavigator();

function App ()
{
  return (
  <NavigationContainer>
  <Tab.Navigator screenOptions={({route})=>({
    tabBarIcon : ({focused,size,color}) => {
      let iconName;
      if(route.name=== 'PatientsScreen'){
        iconName="bed-patient";
      }
      else if (route.name==='RecordsScreen')
      {
        iconName="list";
      }
      return (
            <Icon  size={30} name={iconName}/>
        );
    }
    })}>
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
