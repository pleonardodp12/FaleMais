import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Feather } from '@expo/vector-icons'

import HomeScreen from './screens/Home';
import FaleMaisScreen from './screens/FaleMais';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: "home"
  },
  FaleMais: {
    lib: Feather,
    name: "phone-call"
  }
}

export default function Navigation(){
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size}) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color}/>;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#F5F0FE',
          borderTopColor: 'rgba(255,255,255, 0.2)'
        },
        activeTintColor: '#512996',
        inactiveTintColor: '#92929c'
      }}
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="FaleMais"
        component={FaleMaisScreen}
      />

    </Tab.Navigator>
  );
}