import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Platform } from 'react-native';
import Constants from 'expo-constants';

// Import screens
import HomeScreen from './HomeScreen';
import LoginFormScreen from './LoginFormScreen';
// import SignUpScreen from './SignUpScreen';
import ChatRoom from '../studentpages/chatroom';
import StudentLanding from '../landingpages/StudentLanding';
import TeacherLanding from '../landingpages/TeacherLanding';
import OwnerLanding from '../landingpages/OwnerLanding';
import Profile from '../studentpages/profile';
import TeacherProfile from '../teacherpages/profile';
import SchoolProfile from '../ownerpages/profile';

// Create a stack navigator
const Stack = createStackNavigator();

// Define common screen options
const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: 'black' },
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 28, fontWeight: 'bold' },
    headerTitle: 'Mentor Net',
    headerBackTitleVisible: false,
};

// Home Navigator component
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
            {/* Uncomment this line if the SignUpScreen is needed */}
            {/* <Stack.Screen name='SignUpScreen' component={SignUpScreen} /> */}
            <Stack.Screen
                name='StudentLanding'
                component={StudentLanding}
            />
            <Stack.Screen
                name='TeacherLanding'
                component={TeacherLanding}
            />
            <Stack.Screen
                name='OwnerLanding'
                component={OwnerLanding}
            />
            <Stack.Screen
                name='Profile'
                component={Profile}
            />
            <Stack.Screen
                name='TeacherProfile'
                component={TeacherProfile}  
            />
            <Stack.Screen 
                name='SchoolProfile'
                component={SchoolProfile}
            />
            <Stack.Screen
                name='ChatRoom'
                component={ChatRoom}
            />
        </Stack.Navigator>
    );
};

// Main component that wraps the HomeNavigator
const Main = () => {
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <HomeNavigator />
        </View>
    );
};

export default Main;
