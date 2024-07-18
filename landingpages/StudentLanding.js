import React from "react";
import { View, StyleSheet, Image} from "react-native";
import{ Card, Text } from "react-native-elements";

const StudentLanding = () => {
    return(
        
        <View >
            <View containerStyle={styles.headerContainer} >
                {/* first container containing the header text */}
                <>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome,</Text>
                </>
                <>
                    <Text style={{fontSize: 30, fontWeight: 'extra-bold'}}>Hello,</Text>
                </>
            </View>
            
             {/* second container containing cards */}
             <View containerStyle={styles.bodyContainer}>

                {/* PROFILE CARD */}
                <Card style={{justifyContent: 'center'}}>
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

                {/* COURSE WORK CARD */}
                <Card style={{justifyContent: 'center'}}>
                    {/* image of the card */}
                    <Card.Image source={'../assets/images/assets/images/desk-classroom-svgrepo-com.svg'} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        margin: 10
                    }}/>
                    {/* card text/ header */}
                    <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>Profile</Card.Title>

                </Card>

                {/* LIBRARY CARD */}
                <Card style={{justifyContent: 'center'}}>
                    {/* image of the card */}
                    <Card.Image source={'../assets/images/assets/images/library-book-svgrepo-com.svg'} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        margin: 10
                    }}/>
                    {/* card text/ header */}
                    <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>Profile</Card.Title>

                </Card>

                {/* ATTENDANCE CARD */}
                <Card style={{justifyContent: 'center'}}>
                    {/* image of the card */}
                    <Card.Image source={'../assets/images/assets/images/check-list-svgrepo-com.svg'} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        margin: 10
                    }}/>
                    {/* card text/ header */}
                    <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>Profile</Card.Title>

                </Card>

                {/* CHATROOM CARD */}
                <Card style={{justifyContent: 'center'}}>
                    {/* image of the card */}
                    <Card.Image source={'../assets/images/assets/images/chat-bubbles-svgrepo-com.svg'} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        margin: 10
                    }}/>
                    {/* card text/ header */}
                    <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>Profile</Card.Title>

                </Card>

                {/* TEST CARD */}
                <Card style={{justifyContent: 'center'}}>
                    {/* image of the card */}
                    <Card.Image source={'../assets/images/assets/images/exam-svgrepo-com.svg'} style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        margin: 10
                    }}/>
                    {/* card text/ header */}
                    <Card.Title style={{alignSelf: 'center', fontWeight: 'bold'}}>Profile</Card.Title>

                </Card>

             </View>
        </View>

        
    );
}

export default StudentLanding;