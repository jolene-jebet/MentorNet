import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import{ Card, Text } from "react-native-elements";

const StudentLanding = () => {
    return(
        
        <View >
            <View >
                {/* first container containing the header text */}
                <>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome,</Text>
                </>
                <>
                    <Text style={{fontSize: 30, fontWeight: 'extra-bold'}}>Nelly Waiganjo</Text>
                </>
            </View>
            
             {/* second container containing cards */}
             <View containerStyle={styles.bodyContainer} >

                <ScrollView>
                    <TouchableOpacity
                        // onPress={}  
                    >
                        {/* PROFILE CARD */}
                        <Card style={{justifyContent: 'center', backgroundColor: '#584D4D', width: 50}}>
                            {/* image of the card */}
                            <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                margin: 10
                            }}/>
                            {/* card text/ header */}
                            <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>Profile</Card.Title>
                        </Card>
                    </TouchableOpacity>
                    

                    <TouchableOpacity
                        // onPress={}  
                    >
                        {/* COURSE WORK CARD */}
                        <Card style={{justifyContent: 'center', backgroundColor: '584D4D'}}>
                            {/* image of the card */}
                            <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                margin: 10
                            }}/>
                            {/* card text/ header */}
                            <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>course work</Card.Title>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={}  
                    >
                        {/* LIBRARY CARD */}
                        <Card style={{justifyContent: 'center' , backgroundColor: '584D4D'}}>
                            {/* image of the card */}
                            <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                margin: 10
                            }}/>
                            {/* card text/ header */}
                            <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>library</Card.Title>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={}  
                    >
                        {/* ATTENDANCE CARD */}
                        <Card style={{justifyContent: 'center', backgroundColor: '584D4D'}}>
                            {/* image of the card */}
                            <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                margin: 10
                            }}/>
                            {/* card text/ header */}
                            <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>attendance</Card.Title>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={}  
                    >
                        {/* CHAT ROOM CARD */}
                        <Card style={{justifyContent: 'center', backgroundColor: '584D4D'}}>
                            {/* image of the card */}
                            <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                margin: 10
                            }}/>
                            {/* card text/ header */}
                            <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>chat room</Card.Title>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={}  
                    >
                        {/* TEST CARD */}
                        <Card style={{justifyContent: 'center', backgroundColor: '584D4D'}}>
                            {/* image of the card */}
                            <Card.Image source={'../assets/images/account-avatar-profile-user-6-svgrepo-com.svg'} style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                margin: 10
                            }}/>
                            {/* card text/ header */}
                            <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>test</Card.Title>
                        </Card>
                    </TouchableOpacity>

                </ScrollView>

             </View>
        </View>

        
    );
}

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
});

export default StudentLanding;