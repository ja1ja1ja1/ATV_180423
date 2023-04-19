import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign,Entypo } from '@expo/vector-icons';

import Bob from './bob';
import Gumball from './Gumball';
import Titans from './Titans';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator initialRouteName="Gumball" screenOptions={{headerShown:false}}  >
      <Tab.Screen
        name="Bob"
        component={Bob}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="heart"  size={size} color={color}/>
          ),
        }}
      />

      <Tab.Screen
        name="Gumball"
        component={Gumball}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="smile-circle"  size={size} color={color}/> 
          )
        }}
      />

      <Tab.Screen
        name="Titans"
        component={Titans}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="light-bulb" size={size} color={color} /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
}