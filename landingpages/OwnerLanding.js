import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView } from "react-native";
import { Card, Text } from "react-native-elements";

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// Calculate card dimensions based on screen size
const cardWidth = width * 0.44;
const cardHeight = height * 0.25;

const OwnerLanding = () => {
    return (
        // SafeAreaView ensures content is displayed within the safe area boundaries of the device
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header section */}
                <View style={styles.headerContainer}>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.nameText}>Mary Olwal</Text>
                </View>
            

                {/* cards container */}
                <View style={styles.cardsContainer}>
                    {/* profile card */}
                    <TouchableOpacity style={styles.cardWrapper}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/account-avatar-profile-user-6-svgrepo-com.svg')}
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
                                    source={require('../assets/images/account-avatar-profile-user-6-svgrepo-com.svg')}
                                    style={styles.cardImage}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Classroom</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    {/* add teacher card */}
                    <TouchableOpacity style={styles.cardWrapper}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/account-avatar-profile-user-6-svgrepo-com.svg')}
                                    style={styles.cardImage}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Add teacher</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    {/* add student card */}
                    <TouchableOpacity style={styles.cardWrapper}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/account-avatar-profile-user-6-svgrepo-com.svg')}
                                    style={styles.cardImage}
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
        width: 50,
        height: 50,
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