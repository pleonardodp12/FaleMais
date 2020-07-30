import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import FaleMaisScreen from './screens/FaleMais';


const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
            >
                <AppStack.Screen name="Home" component={HomeScreen}/>
                <AppStack.Screen name="FaleMais" component={FaleMaisScreen}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;