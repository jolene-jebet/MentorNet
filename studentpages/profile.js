import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const Profile = () => {
  const studentProfile = {
    name: "Nelly Waiganjo",
    studentId: "191232",
    class: "7 WEST",
    email: "nelly.waiganjo@ireporter.com",
    gender: "Female",
    classTeacher: "Ms Olwal M",
    profileImage: require(''),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>profile</Text>
      </View>
      <View style={styles.profileImageContainer}>
        <Image source={studentProfile.profileImage} style={styles.profileImage} />
      </View>
      <Text style={styles.name}>{studentProfile.name}</Text>
      <Text style={styles.id}>{studentProfile.studentId}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>
          <Text style={styles.label}>Class: </Text>
          {studentProfile.class}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Email: </Text>
          {studentProfile.email}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Student ID: </Text>
          {studentProfile.studentId}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Gender: </Text>
          {studentProfile.gender}
        </Text>
        <Text style={styles.detail}>
          <Text style={styles.label}>Class teacher: </Text>
          {studentProfile.classTeacher}
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
