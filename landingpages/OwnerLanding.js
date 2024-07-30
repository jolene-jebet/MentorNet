import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView } from "react-native";
import { Card, Text } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import initializeDatabase from '../components/database';
import { useNavigation } from "@react-navigation/native";
// Get screen dimensions
const { width, height } = Dimensions.get('window');
// Calculate card dimensions based on screen size
const cardWidth = width * 0.44;
const cardHeight = height * 0.25;

const OwnerLanding = () => {
    const [uuserId, setUserId] = useState(null);
    const [schoolData, setSchoolData] = useState(null);
    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const id = await AsyncStorage.getItem('userId');
                if (id !== null) {
                    setUserId(id);
                    await fetchSchoolData(id); // Fetch school data using user ID
                } else {
                    console.log('No user ID found');
                }
            } catch (error) {
                console.error('Error retrieving user ID from AsyncStorage:', error);
            }
        };

        fetchUserId();
    }, []);

    const fetchSchoolData = async (userId) => {
        try {
            const { schoolOps } = await initializeDatabase();
            // if (!userId) {
            //     console.log('No user ID provided');
            //     return;
            // }
            const schoolInfo = await schoolOps.getById(userId); // Assuming you want to fetch school by userId
            if (schoolInfo) {
                setSchoolData(schoolInfo);
                console.log('School data:', schoolInfo);
            } else {
                console.log('No school data found for this user ID');
            }
        } catch (error) {
            console.error('Error fetching school data:', error);
        }
    };

    const navigation = useNavigation();
    return (
        // SafeAreaView ensures content is displayed within the safe area boundaries of the device
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header section */}
                <View style={styles.headerContainer}>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.nameText}>{schoolData?.schoolName}</Text>
                </View>
            

                {/* cards container */}
                <View style={styles.cardsContainer}>
                    {/* profile card */}
                    <TouchableOpacity style={styles.cardWrapper} onPress={() => navigation.navigate('SchoolProfile')}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/profile.png')}
                                    style={styles.cardImage}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Profile</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    {/* class room card */}
                    <TouchableOpacity style={styles.cardWrapper}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/classroom.png')}
                                    style={[styles.cardImage, {width: 130, height: 100}]}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Classroom</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    {/* add teacher card */}
                    <TouchableOpacity style={styles.cardWrapper} onPress={() => navigation.navigate('TeacherForm')}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/teacher.png')}
                                    style={[styles.cardImage, { width: 130, height: 100 }]}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Add teacher</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    {/* add student card */}
                    <TouchableOpacity style={styles.cardWrapper} onPress={() => navigation.navigate('StudentForm')}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/students.png')}
                                    style={[styles.cardImage, { width: 130, height: 150 }]}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Add Student</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#000000', 
    },
    container: {
        flex: 1,
        padding: 10,
    },
    headerContainer: {
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 25, 
        fontWeight: 'bold',
        color: 'white',
    },
    nameText: {
        fontSize: 35, 
        fontWeight: 'bold',
        color: 'white', 
    },
    cardsContainer: {
        flexDirection: 'row', 
        flexWrap: 'wrap', // Allow wrapping to next line
        justifyContent: 'space-between', 
    },
    cardWrapper: {
        marginBottom: 15,
    },
    card: {
        padding: 10,
        margin: 0,
        backgroundColor: '#584D4D',
        borderRadius: 15, 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        shadowColor: 'transparent',        
    },
    cardContent: {
        alignItems: 'center', 
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 25, 
        marginBottom: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fOntSize: 16, // Larger font size for readability
    },
});

export default OwnerLanding;