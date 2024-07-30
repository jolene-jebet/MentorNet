import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import initializeDatabase from '../components/database'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginFormScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userOps, setUserOps] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const initDatabase = async () => {
            try {
                const { userOps } = await initializeDatabase();
                setUserOps(userOps);
                console.log('Database initialized successfully.');
            } catch (error) {
                console.error('Error initializing database:', error);
                Alert.alert('Database Error', 'An error occurred while initializing the database.');
            }
        };

        initDatabase();
    }, []); // Runs once when the component mounts

    const handleLogin = async () => {
        console.log(`Logging in with email: ${email} and password: ${password}`);
        if (!userOps) {
            Alert.alert('Error', 'Database not initialized. Please try again later.');
            return;
        }
        try {
            const userData = await userOps.login(email, password);
            if (userData) {
                console.log('Login successful:', userData);
                await AsyncStorage.clear(); // Clear AsyncStorage
                await AsyncStorage.setItem('userId', userData.id.toString());
                // Navigate to the appropriate screen based on user role
                if (userData.role === 'admin') {
                    navigation.navigate('OwnerLanding');
                } else if (userData.role === 'teacher') {
                    navigation.navigate('TeacherLanding');
                } else if (userData.role === 'student') {
                    navigation.navigate('StudentLanding');
                }
            } else {
                Alert.alert('Login Failed', 'Invalid email or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert('Login Error', 'An error occurred during login. Please try again.');
        }
        setEmail('');
        setPassword('');
    };

    const handleSignup = () => {
        navigation.navigate('SchoolForm');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>LOGIN</Text>
            <View style={styles.login}>
                <Text style={styles.loginText}>Please enter your email and password!</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
                <Text style={styles.forgetText}>Forgot password?</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.signUpTextContainer}>
                    <Text style={styles.loginText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={handleSignup}>
                        <Text style={styles.signText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 30,
    },
    login: {
        backgroundColor: '#584D4D',
        padding: 20,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        marginTop: 50,
        paddingBottom: 40,
    },
    button: {
        width: '40%',
        height: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'grey',
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    loginText: {
        color: '#fff',
        marginBottom: 10,
    },
    forgetText: {
        color: '#fff',
        marginBottom: 20,
    },
    signUpTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30, 
    },
    signText: {
        color: 'white',
        marginLeft: 5,
        marginBottom: 10 
    },
});

export default LoginFormScreen;
