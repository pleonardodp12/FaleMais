import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Navigation from './Navigation'

export default function App(){
  return (
    <>
      <StatusBar barStyle="light-content" background="#fff"/>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}