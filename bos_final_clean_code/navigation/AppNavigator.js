import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import RegistrationScreen from '../screens/RegistrationScreen.js';
import ConfirmationScreen from '../screens/ConfirmationScreen.js';
import LogInScreen from '../screens/LogInScreen.js';
import SelectorScreen from '../screens/SelectorScreen.js';


const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: Platform.OS === 'android' ? '#fff' : '#fff',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? '#2f302f' : '#2f302f'                        
                    }
                }}
            >
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title: 'Home',
                    }}
                />
                <Stack.Screen
                    name="RegistrationScreen"
                    component={RegistrationScreen}
                    options={{
                        title: 'Register',
                    }}
                /> 
                <Stack.Screen
                    name="ConfirmationScreen"
                    component={ConfirmationScreen}
                    options={{
                        title: 'Confirmation',
                    }}
                />     
                <Stack.Screen
                    name="LogInScreen"
                    component={LogInScreen}
                    options={{
                        title: 'Log In',
                    }}
                />   
                <Stack.Screen
                    name="SelectorScreen"
                    component={SelectorScreen}
                    options={{
                        title: 'Restaurant Picker',
                    }}
                /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;