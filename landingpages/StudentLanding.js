// import React from "react";
// import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import{ Card, Text } from "react-native-elements";

// const StudentLanding = () => {
//     return(
        
//         <View >
//             <View >
//                 {/* first container containing the header text */}
//                 <>
//                     <Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome,</Text>
//                 </>
//                 <>
//                     <Text style={{fontSize: 30, fontWeight: 'extra-bold'}}>Nelly Waiganjo</Text>
//                 </>
//             </View>
            
//              {/* second container containing cards */}
//              <View containerStyle={styles.bodyContainer} >

//                 <ScrollView>
//                     <TouchableOpacity
//                         // onPress={}  
//                     >
//                         {/* PROFILE CARD */}
//                         <Card style={{justifyContent: 'center', backgroundColor: '#584D4D', width: 50}}>
//                             {/* image of the card */}
//                             <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
//                                 width: 50,
//                                 height: 50,
//                                 borderRadius: 50,
//                                 margin: 10
//                             }}/>
//                             {/* card text/ header */}
//                             <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>Profile</Card.Title>
//                         </Card>
//                     </TouchableOpacity>
                    

//                     <TouchableOpacity
//                         // onPress={}  
//                     >
//                         {/* COURSE WORK CARD */}
//                         <Card style={{justifyContent: 'center', backgroundColor: '584D4D'}}>
//                             {/* image of the card */}
//                             <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
//                                 width: 50,
//                                 height: 50,
//                                 borderRadius: 50,
//                                 margin: 10
//                             }}/>
//                             {/* card text/ header */}
//                             <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>course work</Card.Title>
//                         </Card>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         // onPress={}  
//                     >
//                         {/* LIBRARY CARD */}
//                         <Card style={{justifyContent: 'center' , backgroundColor: '584D4D'}}>
//                             {/* image of the card */}
//                             <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
//                                 width: 50,
//                                 height: 50,
//                                 borderRadius: 50,
//                                 margin: 10
//                             }}/>
//                             {/* card text/ header */}
//                             <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>library</Card.Title>
//                         </Card>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         // onPress={}  
//                     >
//                         {/* ATTENDANCE CARD */}
//                         <Card style={{justifyContent: 'center', backgroundColor: '584D4D'}}>
//                             {/* image of the card */}
//                             <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
//                                 width: 50,
//                                 height: 50,
//                                 borderRadius: 50,
//                                 margin: 10
//                             }}/>
//                             {/* card text/ header */}
//                             <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>attendance</Card.Title>
//                         </Card>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         // onPress={}  
//                     >
//                         {/* CHAT ROOM CARD */}
//                         <Card style={{justifyContent: 'center', backgroundColor: '584D4D'}}>
//                             {/* image of the card */}
//                             <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
//                                 width: 50,
//                                 height: 50,
//                                 borderRadius: 50,
//                                 margin: 10
//                             }}/>
//                             {/* card text/ header */}
//                             <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>chat room</Card.Title>
//                         </Card>
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         // onPress={}  
//                     >
//                         {/* TEST CARD */}
//                         <Card style={{justifyContent: 'center', backgroundColor: '584D4D'}}>
//                             {/* image of the card */}
//                             <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
//                                 width: 50,
//                                 height: 50,
//                                 borderRadius: 50,
//                                 margin: 10
//                             }}/>
//                             {/* card text/ header */}
//                             <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>test</Card.Title>
//                         </Card>
//                     </TouchableOpacity>

//                 </ScrollView>

//              </View>
//         </View>

        
//     );
// }

// const styles = StyleSheet.create({
//     bodyContainer: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap',
//     },
// });

// 

import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView } from "react-native";
import { Card, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// Calculate card dimensions based on screen size
const cardWidth = width * 0.44;
const cardHeight = height * 0.25;

const StudentLanding = () => {

    const navigation = useNavigation();
    return (
        // SafeAreaView ensures content is displayed within the safe area boundaries of the device
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header section */}
                <View style={styles.headerContainer}>
                    <Text style={styles.welcomeText}>Welcome,</Text>
                    <Text style={styles.nameText}>Nelly Waiganjo</Text>
                </View>
            

                {/* cards container */}
                <View style={styles.cardsContainer}>
                    {/* profile card */}
                    <TouchableOpacity style={styles.cardWrapper} onPress={() => navigation.navigate('Profile')}>
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

                    {/* course work card */}
                    <TouchableOpacity style={styles.cardWrapper} onPress={() => navigation.navigate('CourseWork')}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/course-work.png')}
                                    style={styles.cardImage}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Course work</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    {/* library card */}
                    <TouchableOpacity style={styles.cardWrapper}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/library.png')}
                                    style={styles.cardImage}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Library</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    {/* attendance card */}
                    <TouchableOpacity style={styles.cardWrapper}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/attendance.png')}
                                    style={styles.cardImage}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Attendance</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    {/* chat room card */}
                    <TouchableOpacity style={styles.cardWrapper} onPress={() => navigation.navigate('ChatRoom')}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/chat-room.png')}
                                    style={styles.cardImage}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Chat room</Text>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    {/* test card */}
                    <TouchableOpacity style={styles.cardWrapper}>
                        {/* card component with dynamic width and height */}
                        <Card containerStyle={[styles.card, { width: cardWidth, height: cardHeight }]}>
                            {/* card content */}
                            <View style={styles.cardContent}>
                                {/* card image */}
                                <Card.Image
                                    source={require('../assets/images/school-svgrepo-com.svg')}
                                    style={styles.cardImage}
                                />
                                {/* card title */}
                                <Text style={styles.cardTitle}>Test</Text>
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

export default StudentLanding;