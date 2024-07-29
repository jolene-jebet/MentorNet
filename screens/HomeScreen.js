import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('LoginFormScreen'); 
    };

    return (
        <View style={styles.container}>
             <Icon
                name='book'
                type='font-awesome'
                color='#fff'
                size={60}
                style={styles.icon}
            />
            <Text style={styles.text}>Mentor Net</Text>
            <Text style={styles.heroText}>Where educaction is empowered anytime, anywhere.</Text>
            <TouchableOpacity style={styles.btn} onPress={handleLoginPress}>
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    icon: {
        marginTop: 180
    },
    text: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
    },
    heroText: {
        color: "white",
        marginTop: 30,
        fontSize: 24,
        textAlign: "center"
    },
    btn: {
        backgroundColor:"#584D4D",
        marginTop:40,
        borderRadius: 20,
        borderWidth: 8,
        padding: 10,
    },
    btnText: {
        color: "white"
    }
});

export default HomeScreen;
