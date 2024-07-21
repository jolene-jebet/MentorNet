import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginFormScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();


    const handleLogin = () => {
        console.log(`Logging in with email: ${email} and password: ${password}`);
        setEmail('');
        setPassword('');
    };

    const handleSignup = () => {
        navigation.navigate('SignUpScreen');
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
        marginTop: 20,
        paddingBottom: 40, // Increased paddingBottom for more space at the bottom
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
