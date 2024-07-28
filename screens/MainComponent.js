import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Platform } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './HomeScreen';
import LoginFormScreen from './LoginFormScreen';
import SignUpScreen from './SignUpScreen';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: 'black' },
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 28, fontWeight: 'bold' }, // Adjust fontSize if needed
    headerTitle: 'Mentor Net',
    headerBackTitleVisible: false,
    
};

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='LoginFormScreen'
                component={LoginFormScreen}
                
            />
            <Stack.Screen
                name='SignUpScreen'
                component={SignUpScreen}
            />
        </Stack.Navigator>
    );
};

const Main = () => {
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <HomeNavigator />
        </View>
    );
};

export default Main;
