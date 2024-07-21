import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {

    const navigation = useNavigation();

    const handleStudentPress = () => {
        navigation.navigate('');
    };

    const handleInstructorPress = () => {
        navigation.navigate('');
    };

    const handleSchoolPress = () => {
        navigation.navigate('');
    };

    return(
        <View style={styles.container}>
             <Text style={styles.text}>
                Where educaction is empowered anytime, anywhere.
            </Text>
            <View style={styles.signup}>
                <Text style={styles.signupText}>Sign Up as:</Text>
                <TouchableOpacity style={styles.signupOption} onPress={handleStudentPress}>
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={40}
                        style={styles.icon}
                    />
                    <Text style={styles.optionText}>Student</Text>
                </TouchableOpacity>

                
                <TouchableOpacity style={styles.signupOption} onPress={handleInstructorPress}>
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={40}
                        style={styles.icon}
                    />
                    <Text style={styles.optionText}>Instructor</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.signupOption} onPress={handleSchoolPress}>
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={40}
                        style={styles.icon}
                    />
                    <Text style={styles.optionText}>School</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'center',  
      alignItems: 'center',      
    },
    text: {
      color: 'white',
      textAlign: 'center',
      fontSize: 24,
      marginBottom: 50,  
    },
    signup: {
      backgroundColor: '#584D4D',
      padding: 20,       
      borderRadius: 5,
      width: '80%',     
      alignItems: 'center',
      height: 500 
    },
    signupText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 30,  
    },
    signupOption: {
      alignItems: 'center',   
      marginBottom: 60,       
    },
    icon: {
      marginBottom: 10,       
    },
    optionText: {
      fontSize: 18,
      color: 'white',
    },
  });

export default HomeScreen;