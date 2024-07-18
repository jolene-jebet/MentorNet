import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const Profile = () => {
  const instructorProfile = {
    name: "Mary Olwal",
    instructorId: "0215",
    subject: "Mathematics",
    email: "mary.olwal@ireporter.com",
    cellphone: "0712345678",
    gender: "Female",
    profileImage: require(''),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>profile</Text>
      </View>
      <View style={styles.profileImageContainer}>
        <Image source={instructorProfile.profileImage} style={styles.profileImage} />
      </View>
      <Text style={styles.name}>{instructorProfile.name}</Text>
      <Text style={styles.id}>{instructorProfile.instructorId}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>
          <Text style={styles.label}>Subject: </Text>
          {instructorProfile.subject}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Instructor ID: </Text>
          {instructorProfile.instructorId}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Email: </Text>
          {instructorProfile.email}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Cellphone: </Text>
          {instructorProfile.cellphone}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Gender: </Text>
          {instructorProfile.gender}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileImageContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 75,
    padding: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#5a4f4f',
    padding: 15,
    borderRadius: 10,
    width: '80%',
  },
  detail: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default Profile;
